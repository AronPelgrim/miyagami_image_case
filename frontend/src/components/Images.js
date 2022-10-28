import React, { useState, useEffect } from 'react' 
import axios from 'axios' 
import './Images.css' 


function Images() {

  const [backendData, setBackendData] = useState([]) 

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:8000/flickr") 
      const data = response.data.photos.photo 
      setBackendData(data) 
    }
    getData()
  }, [])

  return (
      <ul className="imageGrid">
          {backendData.map((image, i) => (
            <li key={i}>
              <img src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt={`${image.title}`}/>
            </li>
          ))}
      </ul>
  )
}

export default Images