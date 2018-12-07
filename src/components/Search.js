import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Books from './Books'
import * as BookUtils from './BookUtils'

export default class Search extends React.Component {
	state = {
      	query: "",
      	books: [],
      	results: []
    }

	      
	
	updateQuery = (query) => {
    	this.setState({query:query})
      	if(query) {
          this.updateSearch(query)
        }else{
          this.setState({results: []})
        }
    }
	
	updateSearch = () => {
    	if (this.state.query === "") {
          return this.setState({results: []})
        }
      	
      	BooksAPI.search(this.state.query).then(response => {
            let newList = [];            	
        	if (response.error) {
            	return this.setState({results: []})
        	}else if (response.length > 0) {
              	newList = BookUtils.mergeAndSearch(this.props.pickedbooks, response)
             }
             	
             	return this.setState({books : newList})
          	    
   		})
   }
	
	componentWillReceiveProps = (props) => {
    	this.props = props;
      	let newList = BookUtils.mergeAndSearch(this.props.pickedbooks, this.state.books)
        this.setState({books : newList})
      	     
    }
	render() {
		return (	
			<div className="search-books">
            	<div className="search-books-bar">
              		<Link className="close-search" to="/">Close</Link>
              		<div className="search-books-input-wrapper">
                    	<input type="text" placeholder="Search by title or author"
             				onChange={(event) => this.updateQuery(event.target.value)}
							value={this.state.query.value}/>
					</div>
            	</div>
            	<div className="search-books-results">
              		<ol className="books-grid">
						{this.state.books && this.state.books.map(book => ( 
                         	<li key={book.id}>
								<Books book={book} onSwitchShelf={this.props.onSwitchShelf}/>
							</li>
						))}
					</ol>
            	</div>
         	 </div>
		)
	}
}
