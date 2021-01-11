import './App.css';
import React, {Component} from 'react'
import { Title }  from './components/Title'
import { SearchForm }  from './components/SearchForm'
import { Container,Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Movie } from './components/Movie';

class App extends Component {
  state = { results: []}

  _handleResults = (results) => {
    this.setState({ results })
  }
  _renderResults () {
    const { results } = this.state
    return results.map(movie => {
      console.log(movie)
      return (
              <Col xl="4" lg="4" md="5" xs="10" className="mt-3 d-flex justify-content-center" key={movie.imdbID}>
                <Movie 
                  className="text-center" 
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  />
              </Col>
                )
    })
  }
  render(){
    return (
      <Container fluid="xl">
        <Row className="justify-content-center">
          
          <Col xl="8" lg="8" md="10" xs="12">
            <Title styleName="mt-3">Search Movies</Title> {/*styleName are name of css classes, this will be sent as a prop*/}
            <SearchForm onResults={this._handleResults}/>
          </Col>
        
        </Row>
        <Row className="justify-content-center">
          
              {this.state.results.length === 0
                ? <p className="text-center">Sin resultado</p>
                : this._renderResults()
              }
          
        </Row>
      </Container>
    );
  }
  
}

export default App;
