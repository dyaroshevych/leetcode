const mincostTickets = (days, costs) => {
  const costsAtDay = new Array(30).fill(0);

  let t7 = 0;
  let t30 = 0;

  for (let i = 0; i < days.length; i++) {
    while (days[t7] + 7 <= days[i]) {
      t7++;
    }

    while (days[t30] + 30 <= days[i]) {
      t30++;
    }

    costsAtDay[(i + 1) % 30] = Math.min(
      costsAtDay[i % 30] + costs[0],
      costsAtDay[t7 % 30] + costs[1],
      costsAtDay[t30 % 30] + costs[2]
    );
  }

  return costsAtDay[days.length % 30];
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
