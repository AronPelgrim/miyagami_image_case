import React from 'react' 
import ReactDOM from 'react-dom/client' 
import './index.css' 
import Image from './components/Images' 
import Search from './components/SearchBar' 
import reportWebVitals from './reportWebVitals' 

const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(
  <React.StrictMode>
    <Search />
    <Image />
  </React.StrictMode>
) 

reportWebVitals() 