const express = require("express");

const app = express();

const data = [
    {
        id: 1,
        name: "John Doe",
        age: 32,
    },
    {
        id: 2,
        name: "Jane Doe",
        age: 30,
    },
    {
        id: 3,
        name: "John Smith",
        age: 25,
    },
];


// This route gets *ALL* the users
// app.get("/api/users/all", (req, res) => {
//     res.json(data);
// });

app.get("/api/users/", (req, res) => {
    res.json(data);
});


// Add a new route to get a *SINGLE* user (you can use either path param or query param)
// /api/users/1      <-- path param (req.params.id)
// /api/users?id=1   <-- query param (req.query.id)

//below is to use path param

app.get("/api/users/:id", (req, res) => {

    let id = req.params.id;
    // console.log(id);
    res.json(data[id-1]);
});

//below is to use query param
// app.get("/api/users", (req, res) => {

//     let id = req.query.id;
//     console.log(id);
//     res.json(data[id-1]);
// });




// BONUS QUESTION - Add routes to implement all the CRUD operations (POST, PUT, DELETE)

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
