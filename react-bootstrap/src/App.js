import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import CreateUser from './components/create-user.component'
import EditUser from './components/edit-user.component'
import UserList from './components/user-list.component'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <NavBar bg="dark" variant="dark">

            <Container>

              <NavBar.Brand>

                <Link to={"/create-user"} className="nav-link">

                  React MERN Stack CRUD

                </Link>

              </NavBar.Brand>

              <Nav className="justify-content-end">

                <Nav>

                  <Link to={"/create-user"} class="nav-link">

                    Create USER. 

                  </Link>

                </Nav>

                <Nav>

                  <Link to={"/user-list"} class="nav-link">

                    USER List.

                  </Link>

                </Nav>

              </Nav>  

            </Container>

          </NavBar>
          
        </header>

        <Container>

          <Row>

            <Col md="12">
            
              <div className="wrapper">

                  <Route exact path="/" component={CreateUser} />
                  <Route path="/create-user" component={CreateUser} />
                  <Route path="/edit-use:id" component={EditUser} />
                  <Route path="/user-list" component={UserList} />

              </div>
            
            </Col>

          </Row>

        </Container>

      </div>
    </Router>
  );
}

export default App;