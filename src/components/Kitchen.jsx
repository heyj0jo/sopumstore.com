import React, {useState} from 'react'
import Navbar from "./Navbar"
import Items from './Item'


function Kitchen() {
  const [items, setItems] = useState([]);
  
  return (
    <div>
        <Navbar />
        {
          items?.length > 0
          ? (
            <div>
              {items.map((item) => (
                <Items item={item} />
              ))}
            </div>
          ) : (
            <h1>no items</h1>
          )
        }
    </div>
  )
}

export default Kitchen