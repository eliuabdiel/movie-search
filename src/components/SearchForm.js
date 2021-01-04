import React, { Component } from 'react'

export class SearchForm extends Component {
    state =  {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value})
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        alert(this.state.inputMovie)
    }
    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="input-group"> 
                    <input 
                        className=""
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