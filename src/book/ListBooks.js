import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Book from './book';
// this contains three section of self currently reading, want to read, read

class BookList extends Component {
  
    render() { 
      // functions to seperate the three shelf  insted of theis we can also use switch statement
      // const reading = this.props.books.filter(e=>e.shelf== "currentlyReading"); 
      // const wantToRead = this.props.books.filter(e=>e.shelf== "wantToRead"); 
      // const read = this.props.books.filter(e=>e.shelf== "read"); 

      let reading = [];
      let wantToRead =[];
      let read =[];
      // make book into it's shelf
      this.props.books.forEach(e=>{
        switch (e.shelf){
          case "currentlyReading":
              reading.push(e)
              break;
          case "wantToRead":
              wantToRead.push(e)
              break;
          case "read":
              read.push(e)
              break;
          default:
          break;
        }
      })

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>Hari Book reads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     
                     {reading['length']?reading.map(e=> <Book update={this.props.update} key={e.canonicalVolumeLink+e.title} book={e}/>):'No Books found'}
                     

                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wantToRead['length']?wantToRead.map(e=> <Book update={this.props.update} key={e.canonicalVolumeLink+e.title} book={e}/>):'No Books found'}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {read['length']?read.map(e=> <Book update={this.props.update} key={e.canonicalVolumeLink+e.title} book={e}/>):'No Books found'}
                
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/create'>Add a book</Link>
            </div>
          </div>
      
          );
    }
}
 
export default BookList;