const express= require("express");
const app = require("express")();
const PORT = 6000;

/*  app.use parses json before response is sent
Returns middleware that only parses json and only looks 
at requests where the Content-Type header matches the type option
*/
app.use(express.json());

app.listen(
            PORT, () => console.log(`Listening on http://localhost:${PORT}`));
// second part of the function is ran when route is requested,this is the handler(handles the request)
// req => incoming data
//res => outgoing data
app.get("/webdev", (req,res) => {
        res.status(200).send({
            stack:"javascript",
            type:"mobile dev",
            experience:"5 years",
            firm:"uber"
        })
});

//second endpoint with dynamic route
app.post("/webdev/:id", (req,res) => {
        const { id } = req.params;  
        const { name } = req.body;  

        if(!name ){
            res.status(418).send({ message:"Name is required"})
        }
        res.send({
            webdev: "You belong to the ${name} group and your id is ${id}."
         })
});


