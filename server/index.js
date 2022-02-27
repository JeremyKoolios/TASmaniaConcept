import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv" // Allows access to env variables

dotenv.config()
const port = process.env.PORT || 8000

// Connect to database
const mongoClient = mongodb.MongoClient
mongoClient.connect(
    process.env.TASMANIACONCEPT_DB_URI,
    {
        maxPoolSize: 50,
        wtimeout: 2500,
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    app.listen(port, () => {
        console.log(`listening on port ${port})`)
    })
})
