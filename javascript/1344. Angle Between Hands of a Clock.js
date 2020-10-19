// INPUT: 3, 15
// OUTPUT: 7.5

const angleClock = (hour, minutes) => {
  const hourAngle = (hour * 30 + minutes / 2) % 360;
  const minutesAngle = minutes * 6;

  const angle = Math.abs(hourAngle - minutesAngle);

  return Math.min(angle, 360 - angle);
};

console.log(angleClock(3, 15));
