const pool = require('../../db');
const queries = require('./queries')

const getemployee = (req, res)=>{
    pool.query(queries.getemployee,(error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getemployeeById = (req, res) => {
    const employee_id = parseInt(req.params.employee_id);
    pool.query(queries.getemployeeById, [employee_id] ,(error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};

const addemployee = (req, res) => {
    const { name, email, area, age } = req.body;
    // check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results)=>{
        if(results.rows.length){
            res.send("Email already exists");
        }

        //add employee to db
        pool.query(queries.addemployee,[name, email, area, age], (error, results)=>{
            if(error) throw error;
            res.status(201).send("Employee Created Successfully")
        })
    })
};

const removeemployee = (req, res) =>{
    const employee_id = parseInt(req.params.employee_id);

    pool.query(queries.getemployeeById, [employee_id], (error, results)=>{
        
        pool.query(queries.removeemployee, [employee_id], (error, results)=>{
            if (error) throw error;
            res.status(200).send("Employee remove successfully.");
        });

        // const noemployeeFound = !results.rows.length;
        // if(noemployeeFound){
        //     res.send("Employee does not exist in the database");
        // }
    });
};

const updateemployee = (req, res) =>{
    const employee_id = parseInt(req.params.employee_id);
    const { name, email, area, age } = req.body;

    pool.query(queries.getemployeeById, [employee_id], (error, results) => {
        if (error) {
            console.error("Error retrieving employee:", error);
            return res.status(500).send("Error retrieving employee");
        }

        if (!results.rows.length) {
            return res.status(404).send("Employee does not exist in the database");
        }

        // Update employee
        pool.query(queries.updateemployee, [name, email, area, age, employee_id], (error, results) => {
            if (error) {
                console.error("Error updating employee:", error);
                return res.status(500).send("Error updating employee");
            }
            res.status(200).send("Employee updated successfully");
        });
    });
}

module.exports = {
    getemployee,
    getemployeeById,
    addemployee,
    removeemployee,
    updateemployee,
}