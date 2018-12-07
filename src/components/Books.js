import React from 'react'
//import * as BooksAPI from './BooksAPI'
import BookChanger from './BookChanger'

export default class Books extends React.PureComponent {
	state = {
      shelfSelection: this.props.book.shelf || "none"
    }

	render() {
      	const authors = this.props.book.authors && this.props.book.authors.join(' | ')
		let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`)

		return (
      			<div className="book">
                	<div className="book-top">
   						<button className="coverButton">
          					<div className="book-cover" style={{ width: 128, height: 193, 
          						backgroundImage: url}}></div>
        				</button>
						<BookChanger book={this.props.book} 
						onSwitchShelf={this.props.onSwitchShelf} value={this.props.shelf}/>     
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{authors}</div>
                  </div>
 
		)
	}
}

