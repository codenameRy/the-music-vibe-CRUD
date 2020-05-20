import React, { Component } from 'react';
import '../../styles/SearchBar.css';

class SearchBar extends Component {
    // constructor( props ) {
	// 	super( props );
	// 	this.state = {
	// 		query: '',
    //                     results: {},
    //                     loading: false,
    //                     message: '',
	// 	};
    // }
    
    state = {
        query: '',
        results: {},
        loading: false,
        message: '',
    }
	render() {
		return (
			<div className="container">
				{/*Heading*/}
				<h2 className="heading">Live Music Search:</h2>
				{/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value=""
						id="search-input"
						placeholder="Search lyrics & more"
					/>
					<i className="fa fa-search search-icon"/>
				</label>
				
			</div>
			)
	}
}


export default SearchBar;