import React, {Component} from 'react'
import { Title }  from '../components/Title'
import { SearchForm }  from '../components/SearchForm'
import { Container,Row, Col } from 'react-bootstrap';
import { MovieList } from '../components/MovieList';

export class Home extends Component {
    state = { results: [], usedSearch: false
    }
  
    _handleResults = (results) => {
      this.setState({ results, usedSearch: true })
      this.props.setResults(results)
    }
    render(){
        return (
        <Container>
          <Row className="justify-content-center">
            <Col xl="8" lg="8" md="10" xs="12">
              <Title styleName="mt-3">Search Movies</Title> {/*styleName are name of css classes, this will be sent as a prop*/}
              <SearchForm onResults={this._handleResults}/>
            </Col>
          </Row>
          <Row className="justify-content-around">
                {this.state.usedSearch
                    ? this.state.results.length === 0
                      ? <p className="text-center mt-3 font-weight-bold">Sorry, no results found </p >
                      : <MovieList
                        movies={this.state.results}
                        />
                    : null
                }
          </Row>
        </Container>
        );
    }
}