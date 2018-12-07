import React from 'react'

export default class BookChanger extends React.Component {
	state = {
      shelfSelection: this.props.book.shelf || "none"
  	}
	
	onSwitchShelf = (book, shelf) => {
    	this.setState({shelfSelection:shelf})
        this.props.onSwitchShelf(book, shelf)
    }
	componentWillReceiveProps = (props) => {
        this.props = props
		this.setState({shelfSelection: this.props.book.shelf})
   }

	render = () => {
      return (
      	<div className="book-shelf-changer">
        	<select
         		value={this.state.shelfSelection}
        		onChange={(event) => this.props.onSwitchShelf(this.props.book, event.target.value)}>
           		<option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
      )
   }
}
         
         
         
         
         
         