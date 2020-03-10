// iterate through all numbers in range [2..n - 1]
// if number is prime, count++

// O(n^1.5)
const countPrimesInefficient = n => {
  const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (!(num % i)) return false;
    }

    return true;
  };

  let primeCount = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) primeCount++;
  }

  return primeCount;
};

// Sieve of Eratosthenes
const countPrimes = n => {
  const arr = new Array(n).fill(true);

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (arr[i]) {
      for (let j = i * i; j < n; j += i) {
        arr[j] = false;
      }
    }
  }

  let primeCount = 0;

  for (let i = 2; i < n; i++) {
    if (arr[i]) primeCount++;
  }

  return primeCount;
};

console.log(countPrimes(1));
