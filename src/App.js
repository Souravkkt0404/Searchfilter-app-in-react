import React, { useState } from 'react';
import JSONDATA from './MOCK_DATA.json';
import "./App.css";



const App = () => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className='App'>

      <input type="text" placeholder='Search...'
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      {JSONDATA.filter((val)=> {
          if (searchTerm == "") {
            return val
          }
          else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((val, key) => {
          return (
            <div className='user' key={key}>
              <p>{val.first_name}</p>
              {/* <p>{val.last_name}</p> */}
            </div>

          );
        })
      }
    </div>
  )
}

export default App
