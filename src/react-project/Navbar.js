import React from 'react';
import {Nav, Ikkilik, Input1, Input2, Input3, Input4, Uchlik} from './Nav-style'
import Down from './img/down icon.png'
import Union from './img/search.png'
import odam from './img/odam2.png'
import ting from './img/ting.png'
import uy from './img/uy.png'
function Navbar(props) {
    return (
        <div>
              <Nav>
                  <Ikkilik>
                      <Input3>
                      <img src={Union} />
                       <Input1 placeholder="Search for a race, car or racer"/> 
                       </Input3>
                      <Input4> 
                      <Input2 placeholder="Choose a car" />
                      <img src={Down} />
                       </Input4>
                   </Ikkilik>
                   <Uchlik>
                       <img src={ting} />
                       <img src={uy} />
                       <img src={odam} />
                   </Uchlik>
               </Nav>
        </div>
    )
}
export default Navbar;

