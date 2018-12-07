import React from 'react'

import Books from './Books'

export default class Shelf extends React.Component {
	state = {
      
    }
	
	render() {
    	return (
      		<div className="bookshelf">
            	<h2 className="bookshelf-title">{this.props.shelf.name}</h2>
             	<div className="bookshelf-books">
             		<ol className="books-grid">
             		{this.props.shelf.books.map(book => (
             				<li key={book.id}><Books book={book}
								onSwitchShelf={this.props.onSwitchShelf}
							/>
							</li>
						))}
             		</ol>
             	</div>
			</div>
		)
    }
}
  
  