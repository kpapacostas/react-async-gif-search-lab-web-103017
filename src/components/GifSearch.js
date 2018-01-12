import React from 'react'

class GifSearch extends React.Component{
  handleSearch = (e) => {
    return this.props.search(e.target.parentElement.children[1].value  )
  }

  render(){

    return(
      <div className="gifsearch">
        <h2>Pick Yo Gifs!</h2>
        <input placeholder="Search Term"/>
        <button  onClick={this.handleSearch} className="search-submit">Submit</button>
      </div>
    )
  }
}

export default GifSearch
