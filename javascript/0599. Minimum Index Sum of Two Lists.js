const findRestaurant = (list1, list2) => {
  const restaurants = {};

  for (let i = 0; i < list1.length; i++) {
    restaurants[list1[i]] = [0, i];
  }

  for (let i = 0; i < list2.length; i++) {
    if (restaurants[list2[i]]) {
      restaurants[list2[i]] = [1, restaurants[list2[i]][1] + i];
    }
  }

  let maxInterest = Infinity,
    maxInterestRestaurants = [];

  for (let i of Object.keys(restaurants)) {
    if (restaurants[i][0]) {
      if (maxInterest > restaurants[i][1]) {
        maxInterestRestaurants = [i];
        maxInterest = restaurants[i][1];
      } else if (maxInterest === restaurants[i][1]) {
        maxInterestRestaurants.push(i);
      }
    }
  }

  return maxInterestRestaurants;
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun"
    ]
  )
);
