import logo from './logo.svg';
import './App.css';
import { Title }  from './components/Title'
import { SearchForm }  from './components/SearchForm'
import { Container,Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid="xl">
      <Row>
        <Col xl="2">
          
        </Col>
        <Col xl="8">
          <Title>Search Movies</Title>
          <SearchForm />
        </Col>
        <Col xl="2">
          
        </Col>
      </Row>
    </Container>
  );
}

export default App;
