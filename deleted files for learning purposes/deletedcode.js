import express from "express"


const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('You are in the main route')
})

app.get('/cars', (req, res) => {
    res.send('You are in cars route')
})

app.post('/create-cars', (req, res) => {
    res.send('You are in post route to create')
})

app.delete('/delete-cars', (req, res) => {
    res.send('You are in delete route to delete')
})

app.put('/update-cars', (req, res) => {
    res.send('You are in put route to update/create car')
})

//the route '/:anything' will return that any route. dynamic way for infinite routes, or limit it using regex
app.get("/:id([0-9]{3})", (req, res) => {
    res.send(`You are viewing ${req.params.id}`)
})

app.get("*", (req, res) => {
    res.send(`You are in wrong route`)
})

app.listen('3001', () =>{
    console.log(`Server started on port ${port}`);
})