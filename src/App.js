
import './App.css';
import { Router } from '@reach/router'
import Detail from './views/Detail';
import View from './views/View'
import Update from './views/Update';


function App() {
  return (
    <div className="wrapper">
      <Router>
        <View path="/" />
        <Detail path="/authors/:id" />
        <Update path="/authors/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
