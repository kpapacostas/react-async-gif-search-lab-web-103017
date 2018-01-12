import React from 'react'


const GifList = (props) =>{
  const gifs = props.gifs.map((gif, i) => <li key={i}><img src={gif.images.original.url}/></li>)
  return(
    <div className="giflist">
      <ul>
        {gifs}
      </ul>
    </div>

  )
}



export default GifList;
