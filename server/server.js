import express from "express"
import cors from "cors"
import tracks from "./api/tracks.route.js" // File to make routes in

const app = express()
app.use(cors())
app.use(express.json()) // Allows server to json in request body
app.use("/api/v1/tracks", tracks) // Sets a base route
app.use("*", (req, res) => res.status(404).json({ error: "not found"})) // If wrong route entered...

export default app