import express from 'express'
import Flickr from 'flickr-sdk'
import cors from "cors"
import "dotenv/config";

const app = express()
const flickr = new Flickr(process.env.API_KEY)
const port = process.env.PORT || 8000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// The default search term
let searchInput = 'birds'

// The index page that get images with default search term
app.get('/flickr', async (req, res) => {
    const response = await flickr.photos
        .search({
            text: searchInput,
        }) 
    res.send(response.body) 
}) 

// Post that gets images from the new search term
app.post("/flickr", async (req, res) => {
    if (req.body.query) {
        searchInput = req.body.query 
        const response = await flickr.photos
            .search({
                    text: searchInput,
                })
        res.send(response.body) 
    }
}) 

app.listen(port, () => console.log(`Server is running.`))