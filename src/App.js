import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './components/BookCase'
import Search from './components/Search'


export default class BooksApp extends React.Component {
  state = {   
    
  }
		
	componentDidMount() {
    	BooksAPI.getAll().then((books) => {
          
          this.setState({books})
        });  
    }

	refreshBooks = (books) => {
    	BooksAPI.getAll().then((list) => {  
    		this.setState({        
          		books: (list)
        	})
        })
    }

	switchShelf = (book, shelf) => {
     BooksAPI.update(book, shelf)
	 book.shelf = shelf
     this.setState(state => ({
     	books:state.books.filter(books => books.id !== book.id).concat(book)
     	}))
    }  

	render() {
    	return (
      		<div className="app">
            	<Route exact path='/'
             	 render={(() => (<BookCase books={this.state.books} onRefreshBooks={this.refreshBooks} onSwitchShelf={this.switchShelf}/>))}/>

				<Route exact path='/search'
				 render={(() => (<Search pickedbooks={this.state.books} onSwitchShelf={this.switchShelf}/>))}/>
			</div>
    	)
  	}
}


