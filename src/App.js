import React from 'react'
import './App.css'
import {  Route } from "react-router-dom";
import SearchBook from './search/Search';
import BookList from './book/ListBooks';
// Apis for this project
import * as BookAPI from './BooksAPI';

class BooksApp extends React.Component {

  //initialoze using constructor
  constructor(){
    super()
    this.state = {
      books:[]
    }
  
  }

  // calling function when component mounted
  componentDidMount(){
    BookAPI.getAll().then(data=>this.setState({ books:data}));

  }

  // when book state changed this function is called from one state
  bookStateUpdate=(e,book)=>{
    BookAPI.update(book,e.target.value).then(e=>BookAPI.getAll().then(data=>this.setState({ books:data})))
  }

  render() {
  

    return (
      // rendering based on the url
      <div className="app">
        <Route exact path="/create" render={()=><SearchBook update={this.bookStateUpdate} books={this.state.books}/>} />
        <Route exact path="/" render={()=><BookList update={this.bookStateUpdate} books={this.state.books}/>} />
      </div>
    )
  }
}

export default BooksApp
