import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import {
    Redirect,
    useParams
  } from "react-router-dom";
function About({movies}){
    let { selectedMovie } = []
    let { id } = useParams();
    if (movies.length===0){
        return <p>not found</p>
    }
    movies.forEach(movie => {
        if (movie.imdbID === id){
            selectedMovie = movie
        }
    });
    console.log(selectedMovie)
    return(
        <Card style={{ width: '18rem' }} className="mt-3">
            <Card.Img variant="top" src={`${selectedMovie.Poster}`}/>
            <Card.Body>
                <Card.Title>{selectedMovie.Title}</Card.Title>
                <Card.Text>{selectedMovie.Year}</Card.Text>
            </Card.Body>
        </Card>
    )
}
About.propTypes = {
    movies: PropTypes.array
}
export default About