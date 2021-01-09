import './App.css';
import React, {Component} from 'react'
import { Title }  from './components/Title'
import { SearchForm }  from './components/SearchForm'
import { Container,Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = { results: []}

  _handleResults = (results) => {
    this.setState({ results })
  }
  _renderResults () {
    const { results } = this.state
    return results.map(movie => {
      return <p className="text-center" key={movie.imdbID}>{movie.Title}</p>
    })
  }
  render(){
    return (
      <Container fluid="xl">
        <Row className="">
          <Col xl="2">
            
          </Col>
          <Col xl="8">
          <Title styleName="mt-3">Search Movies</Title> {/*styleName are name of css classes, this will be sent as a prop*/}
            <SearchForm onResults={this._handleResults}/>
            
              {this.state.results.length === 0
                ? <p className="text-center">Sin resultado</p>
                : this._renderResults()
              }
            
          </Col>
          <Col xl="2">
            
          </Col>
        </Row>
      </Container>
    );
  }
  
}

export default App;
