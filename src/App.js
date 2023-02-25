 import Navbar from './Navbar'
import Home from './home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  //const title='Welcome to first react page'
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>  
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>    
      
        {/* <h1>{title} component</h1> */}

    </div>
    </div>
    </Router>
  );
}

export default App;
