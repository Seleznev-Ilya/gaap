export function getWeekNumber() {
  const DAY_IN_SECONDS = 86400000;
  const shiftStartWeek = 1;
  const oneWeek = 7;
  const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
  const pastDaysOfYear = (Date.now() - firstDayOfYear) / DAY_IN_SECONDS;

  return Math.ceil(
    (pastDaysOfYear + shiftStartWeek) / oneWeek
    // (pastDaysOfYear + firstDayOfYear + shiftStartWeek) / oneWeek
  );
}
