let tracks

// Get track data from DB if not already gotten
export default class TracksDAO {
    static async injectDB(conn) {
        if (tracks) { return }
        try { tracks = await conn.db(process.env.TASMANIACONCEPT_NS).collection("tracks") }
        catch(e) {console.error(`tracksDAO could not connect to the collection: ${e}`)}
    }
}