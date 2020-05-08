import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Book from '../book/book';

import * as BooksAPI from '../BooksAPI';

class SearchBook extends Component {
  state = { 
    query:'',
    books:[]
 }


 async getSearchResults(e) {
  if (e.target.value) {
      let books = await BooksAPI.search(e.target.value)
      if (books.error) {
          books = []
      }
      this.setState({
          books
      })
  } else {
      window.stop()
      this.setState({
          books: []
      })
  }
}
    render() { 
        
        return ( 
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"  onChange={e=>this.getSearchResults(e)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books['length']?this.state.books.map(e=><Book books={this.props.books}update={this.props.update} key={e.canonicalVolumeLink+e.title} book={e} />):<div>No Result found</div>}
              </ol>
            </div>
          </div>
         );
    }
}
 
export default SearchBook;