const getemployee = "SELECT * FROM employee";
const getemployeeById = "SELECT * FROM employee WHERE employee_id = $1";
const checkEmailExists = "SELECT s FROM employee s WHERE s.email = $1";
const addemployee = "INSERT INTO employee (name, email, area, age) VALUES ($1, $2, $3, $4)";
const removeemployee = "DELETE FROM employee WHERE employee_id = $1";
const updateemployee = "UPDATE employee SET name = $1, email = $2, area = $3, age = $4 WHERE employee_id = $5";

module.exports={
    getemployee,
    getemployeeById,
    checkEmailExists,
    addemployee,
    removeemployee,
    updateemployee
}