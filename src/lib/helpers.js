// Calculate Average
export const average = (item) => {
  return item.reduce((a, b) => a + b, 0) / item.length;
};

// Get count years between two dates
export const getNumberOfYears = (dateString) => {
  var ageInMilliseconds = new Date() - new Date(dateString);
  return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
};
