import React from 'react';
import Sidebar from './react-project/Sidebar';
import Navbar from './react-project/Navbar';
import Body from './react-project/Body';
import './Project.css'
class Project extends React.Component {
  render() {
    return (
      <div className="Project">
        <Sidebar/>
        <div>
        <Navbar/>
        <Body/>
        </div>
      </div>
    );
  }
}
export default Project;
