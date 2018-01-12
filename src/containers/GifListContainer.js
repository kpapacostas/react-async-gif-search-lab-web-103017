import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      gifs: []
    }
  }

  // componentDidMount(){
  //   if (this.state.searchT !== undefined){
  //
  //    }
  //  }

  updateSearchT = (searchT) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchT}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.json())
      .then(r => this.setState({
        gifs: r.data.slice(0, 3)
      }))
  }


  render(){
    console.log('container', this.state.searchT, this.state.gifs);

    return(
      <div className="giflist-container">
      <GifSearch search={this.updateSearchT}/>
      {this.state.searchT !== '' ?
        <GifList gifs={this.state.gifs}/> :
        <p>Enter a search term!</p>}


      </div>
    )
  }
}
