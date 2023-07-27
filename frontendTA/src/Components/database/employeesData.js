// Assuming you have the mongoose library imported and the employeeSchema defined.

const employees = [
    {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        password: "mypassword",
        DOB: "1990-01-01",
        email: "john.doe@example.com",
        phone: "1234567890",
        address: "123 Main St, City",
        department: "Operation",
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        username: "janesmith",
        password: "anotherpassword",
        DOB: "1985-05-15",
        email: "jane.smith@example.com",
        phone: "9876543210",
        address: "456 Park Ave, Town",
        department: "Media",
    },
    // Add more employeesData as needed
    {
        firstName: "Michael",
        lastName: "Johnson",
        username: "michaeljohnson",
        password: "securepassword",
        DOB: "1988-11-30",
        email: "michael.johnson@example.com",
        phone: "5551234567",
        address: "789 Oak St, Village",
        department: "Content Planning",
    },
    {
        firstName: "Emily",
        lastName: "Lee",
        username: "emilylee",
        password: "secret123",
        DOB: "1992-09-10",
        email: "emily.lee@example.com",
        phone: "1112223333",
        address: "101 Elm St, County",
        department: "Program - MC",
    },
    {
        firstName: "Robert",
        lastName: "Brown",
        username: "robertbrown",
        password: "password123",
        DOB: "1995-07-25",
        email: "robert.brown@example.com",
        phone: "4445556666",
        address: "222 Maple Ave, State",
        department: "Media",
    },
];

// Now you have an array "employeesData" with 5 objects, each conforming to the "employeeSchema".
export default employees;