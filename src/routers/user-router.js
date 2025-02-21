import express from "express"
import cors from "cors"

const app = express()
const port = 4000

app.use(express.json())

app.use(cors())

app.use("/", (req, res) => {
    // const {as}}
    res.send("This is the best")
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
    
})