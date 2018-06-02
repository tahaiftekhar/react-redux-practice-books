import React, { Component } from 'react';

export default class BookList extends Component {
  renderList(){
    const bookList = this.props.books.map((book)=> {
      return (
          <li key={book.title} className="list-group-item">{book.title}</li>
      )
    });
    return bookList;
  }

  render() {
    return (
      <ul>{this.renderList()}</ul>
    );
  }
}
