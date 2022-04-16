const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1"
const checkEmailExists = "Select s FROM students s WHERE s.email = $1"
const addstudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)"

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addstudent,
}