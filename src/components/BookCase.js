import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

export default class BookCase extends React.Component {
	state = {
     
    }

	componentDidMount = () => {
      this.props.onRefreshBooks();
    }

	

	updateCase = () => {
		const currentRead ={
        	name: "Currently Reading",
        	books: this.props.books.filter(book => book.shelf === 'currentlyReading')
          	
        }
        
        const want2Read = {
        	name: "Want to Read",
        	books:  this.props.books.filter(book => book.shelf === 'wantToRead')
        }
        
        const read = {
        	name: "Read",
          	books: this.props.books.filter(book => book.shelf === 'read')
        }
  		
        return (
        	[currentRead, want2Read, read]
        );
    }
  	render() {
      	let shelves = [];
		if (this.props.books && this.props.books.length)
			shelves = this.updateCase();

    	return (
      		<div className="app">
         		<div className="list-books">
            		<div className="list-books-title">
              			<h1>MyReads</h1>
            		</div>
            		<div className="list-books-content">
              			<div>
          					{shelves && shelves.map((shelf) => (<Shelf key={shelf.name} shelf={shelf} onSwitchShelf={this.props.onSwitchShelf}/>))}
             		</div>
                </div>
             	<div className="open-search">
              		<Link to="/search">Add a book</Link>
				</div>
             </div>
           </div>
		)
	}
}

      		
      
      