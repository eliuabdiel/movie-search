import React, { Component } from 'react'
const API_KEY = 'fb2fa295'
export class SearchForm extends Component {
    state =  {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value})
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const {Search} = results
                this.props.onResults(Search)
            })
    }
    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="input-group"> 
                    <input 
                        onChange={this._handleChange}
                        type="text" 
                        className="form-control" 
                        placeholder="Movie to search"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}