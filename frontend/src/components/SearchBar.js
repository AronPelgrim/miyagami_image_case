import React, { useState } from 'react'
import axios from 'axios'
import './SearchBar.css'

function Search() {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSubmit = (e) => {
        setSearchQuery(e.target[0].value)
    }

    const sendQuery = async () => {
        await axios.post(`http://localhost:8000/flickr`, {
            query: searchQuery
        })
    }
    sendQuery()

    return (
        <section className="searchBar">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Flickr Image Finder</h1>
                <input type="text" placeholder="Look for the best images"/>
                <button type="submit">Search images</button>
            </form>
        </section>
    )
}

export default Search