import React from 'react';
import './home.scss';
const data = [
  {
  name : 'one',
  },
  {
    name : 'two',
  },
  {
    name : 'three'
  }
]

function Home() {
  return (
    <div className='homeMain'>
      {
        data.map((item,index) => {
          return(
            <div key={index}>
              <h4>{item.name}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home;
