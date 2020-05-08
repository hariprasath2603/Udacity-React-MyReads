import React from 'react';

// for rendering each book this was render 
const Book = (props) => {
    let {title,shelf,authors} = props.book;
    const url = props.book.imageLinks ?props.book.imageLinks.smallThumbnail:''
    if(!shelf){
      props.books.forEach(e => {
        if(e.id === props.book.id){
          shelf = e.shelf
          
        }
      });
    }
    return ( 
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={e=>props.update(e,props.book)}>
                {/* this is a fake option to mimic some difficulties */}
                <option value=""  default style={{"display":"none"}}>Label</option> 
                <option value="move"  disabled>Move to...</option>
                <option value="currentlyReading"  >{shelf === "currentlyReading" && ('✔ ')}Currently Reading</option>
                <option value="wantToRead" >{shelf === 'wantToRead' && ('✔ ')}Want to Read</option>
                <option value="read" >{shelf === "read" && ('✔ ')}Read</option>
                <option value="none" >{!shelf && ('✔ ')} None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors && authors.join(',')}</div>
        </div>
      </li>
     );
}
 
export default Book;