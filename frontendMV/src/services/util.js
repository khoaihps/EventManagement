export function convertToISODate(inputDOB) {
    // Split the input string by "/"
    const [day, month, year] = inputDOB.split("/");

    // Create a new Date object with the components in "yyyy-mm-dd" format
    const dateObject = new Date(`${year}-${month}-${day}`);

    // Use toISOString() to get the date in "yyyy-mm-dd" format
    const isoDate = dateObject.toISOString().slice(0, 10);

    return isoDate;
}