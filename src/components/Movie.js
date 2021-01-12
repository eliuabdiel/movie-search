import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

export class Movie extends Component{
    static propTypes = {
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }
    render(){
        const { poster, title, year } = this.props

        return(
            <Card style={{ width: '18rem' }} className="mt-3">
                <Card.Img variant="top" src={`${poster}`}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{year}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}