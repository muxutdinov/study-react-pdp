import React from 'react';
import './App.css'
import Sidebar from './react-project/Sidebar';
import Navbar from './react-project/Navbar';
import Body from './react-project/Body';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <div className="Nav-body">
        <Navbar/>
        <Body/>
        </div>
      </div>
    );
  }
}
export default App;
