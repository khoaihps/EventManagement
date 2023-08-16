export function convertToISODate(input) {
  // Split the input string by "/"
  const [day, month, year] = input.split("/");

  // Create a new Date object with the components
  const dateObject = new Date(`${year}-${month}-${day}`);

  // Get the year, month, and day from the date object
  const isoYear = dateObject.getFullYear();
  const isoMonth = String(dateObject.getMonth() + 1).padStart(2, '0');
  const isoDay = String(dateObject.getDate()).padStart(2, '0');

  // Combine the components to create the ISO date format "yyyy-mm-dd"
  const isoDate = `${isoYear}-${isoMonth}-${isoDay}`;

  return isoDate;
}

export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
