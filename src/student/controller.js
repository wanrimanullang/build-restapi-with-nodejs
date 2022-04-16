const pool = require('../../db')
const queries = require('../student/queries')


const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, result) => {
        if(error) throw error;
        res.status(200).json(result.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}; 

const addstudent = (req, res) => {
    const { name, email, age, dob } = req.body;
    //cek email jika sudah ada
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if(results.rows.length){
            res.send("Email sudah ada!");
        }
        //memasukkan data ke dalam database
        pool.query(
            queries.addstudent, 
            [name, email, age, dob],
            (error, results) => {
            if (error) throw error;
            res.status(201).send("Pendaftaran Berhasil!");
        }
        );
    });
};

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Data siswa tidak ada di database!")
        }
        
        pool.query(queries.removeStudent, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Data yang anda inginkan sudah terhapus!");
        })    
    })
}


module.exports = {
    getStudents,
    getStudentById,
    addstudent,
    removeStudent,
};