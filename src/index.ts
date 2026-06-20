import express, { Application } from 'express'

const app: Application = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: 'The type script lesson begin!'})
})

const PORT: Number = 3000

app.listen(PORT, () => {
    console.log(`server running port: http://localhost:${PORT}`)
})