import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from '@mui/material';
import UpdateStudent from './components/UpdateStudent'
import StudentList from './components/StudentList';
import Navbar from './components/Layout/Navbar';
import CreateStudentComponent from './components/CreateStudentComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header navbar">
          <Navbar />
        </header>
        <Container>
          <div className="wrapper">
            <Switch>
              <Route exact path="/">
                <CreateStudentComponent />
              </Route>
              <Route path="/create-student">
                <CreateStudentComponent />
              </Route>
              <Route path="/update-student/:id">
                <UpdateStudent />
              </Route>
              <Route path="/student-list">
                <StudentList />
              </Route>
            </Switch>
          </div>
        </Container>
      </div>
    </Router >
  );
};
export default App;
