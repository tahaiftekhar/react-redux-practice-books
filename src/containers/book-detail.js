import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return (<div>Please Select a book</div>);
        }

        return(
            <div>
                <h1>Book Details</h1>
                <h3>{this.props.book.title}</h3>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);