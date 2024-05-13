let express = require('express');

let employeeRoutes = require("./src/employee/routes")

let app = express();
let port = 3000;

app.use(express.json());

app.get("/", (req,res)=> {
    res.send("Hello world")
});

app.use("/api/v1/employee", employeeRoutes);

app.listen(port,() => console.log(`app listening on port ${port}`));