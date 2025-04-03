export const calculateNumberOfDays = ({ startYear, startMonth, startDay, endYear, endMonth, endDay }) => {
  // Create Date objects for the start and end dates
  const startDate = new Date(startYear, startMonth - 1, startDay); // Month is zero-based
  const endDate = new Date(endYear, endMonth - 1, endDay); // Month is zero-based

  // Calculate the difference in milliseconds between the two dates
  const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

  // Convert milliseconds to days
  const numberOfDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  return numberOfDays;
};

// Example usage:
const range = {
startYear: 2024,
startMonth: 5,
startDay: 8,
endYear: 2024,
endMonth: 5,
endDay: 18
};

const numberOfDays = calculateNumberOfDays(range);
console.log(numberOfDays); // Output: 11
