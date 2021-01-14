import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";

export class Movie extends Component{
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }
    render(){
        const { id, poster, title, year } = this.props
        console.log('llaves',id)
        return(
            <Link to={`/about/${id}`} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '18rem' }} className="mt-3">
                    <Card.Img variant="top" src={`${poster}`}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{year}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            
        )
    }
}