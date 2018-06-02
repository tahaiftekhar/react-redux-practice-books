import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
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

function mapStateToProps(state){
  return{
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList)