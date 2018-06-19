import React, { Component } from 'react';
import './App.css';
import Movie from './components/movie.js'
import Favorites from './components/favorites.js'
import Random from './components/random.js'


class App extends Component {

    state = {
      movies: [],
      favorites: [],
      randomPicked: undefined
      }

  
  
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json') 
        .then(res => res.json()) 
        .then(resJson => this.setState({ movies: resJson.movies }))
      }
      
  addToFavorites = id => {
    if (this.state.favorites.find(movie => movie.id === id)) {
      return
    }
    const newFavorite = this.state.movies.find(movie => movie.id ===id)
    const allFavorites = [newFavorite, ...this.state.favorites]
    this.setState({ favorites: allFavorites })
  }
  removeFromFavorites = id => {
      const UpdateFavorites = this.state.favorites.filter(favorite => favorite.id !== id)
      this.setState({ favorites: UpdateFavorites })
  }
  randomPick = id => {
    const favoritesLength = this.state.favorites.length
    const randomIndex = Math.floor(Math.random() * favoritesLength)
    this.setState({ randomPicked: this.state.favorites[randomIndex] })
  }
  

  render() {
    
    const movies = this.state.movies.map(movie =>
      <div>
      <Movie key={movie.id} id={movie.id}  title={movie.title} image={movie.posterUrl} 
      addToFavorites={this.addToFavorites}
      />
      </div>
    )
    const favorites = this.state.favorites.map(favorite =>
      <div>
      <Favorites key={favorite.id} id={favorite.id} title={favorite.title} image={favorite.posterUrl}
      removeFromFavorites={this.removeFromFavorites}
      />
      </div>
    )
    const randomPicked = this.state.randomPicked !== undefined 
      ? <Random key={this.state.randomPicked.id} id={this.state.randomPicked.id} title={this.state.randomPicked.title} image={this.state.randomPicked.posterUrl}/>
      : ""

    return (
      <div className="App">
        <h1 className='random' onClick={this.randomPick}><span>🎲</span> RANDOM FROM FAVORITE MOVIES <span>🎲</span></h1>
          <div className='movieContainer'>{randomPicked}</div>
        <h1>FAVORITE MOVIES</h1>
          <div className='movieContainer'>{ favorites }</div>
        <h1>MOVIES LIST</h1>
          <div className='movieContainer'>{ movies }</div>
      </div>
    );
  }
}

export default App;
