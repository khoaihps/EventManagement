export function convertToISODate(input) {
  // Split the input string by "/"
  const [day, month, year] = input.split("/");

  // Create a new Date object with the components in "yyyy-mm-dd" format
  const dateObject = new Date(`${year}-${month}-${day}`);

  // Use toISOString() to get the date in "yyyy-mm-dd" format
  const isoDate = dateObject.toISOString().slice(0, 10);

  return isoDate;
}
export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
