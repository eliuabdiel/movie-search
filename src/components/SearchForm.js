import React, { Component } from 'react'

export class SearchForm extends Component {
    render(){
        return(
            <div className="input-group mb-3"> 
                <input 
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
        )
    }
}