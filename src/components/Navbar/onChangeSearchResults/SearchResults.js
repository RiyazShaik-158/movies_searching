import React from 'react';

function SearchResults({moviesData}) {
  return (
    <div style={{marginTop:'40px',color:'#fff',display:'flex',flexWrap:'wrap',columnGap:'40px',rowGap:'20px'}}>
      {
        moviesData?.map(item => {
          return(
            <div style={{display:'flex',flexDirection:'column',width:'250px'}}>
              <h4>{item.Title}</h4>
              <img style={{aspectRatio:'4:3',objectFit:'contain'}} width={'200px'} src={item.Poster} alt='someImg'/>
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResults
