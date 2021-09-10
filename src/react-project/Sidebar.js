import React from 'react';
import {Content, Rasm, Sidebartitle, Title, Menu, Icons,Imges, IconTitle, Races, Uchlik, Mutto , Muto, Pre, Contaner, ImgPeople, Text, Icon} from './Side-style'
import foto from './img/1.png'
import uy from './img/uy.png'
import kal from './img/kal.png'
import set from './img/set.png'
import Dmutu from './img/Ellipse 6.png'
import Ymutu from './img/Ellipse 7.png'
import Tmutu from './img/Ellipse 8.png'
import odam from './img/Ellipse 2.png'
import icon from './img/next icon.png'
function Sidebar(props){
        return (
               <div>
                   <Content>
                       <Sidebartitle>
                           <Rasm><img src={foto} /></Rasm>
                           <Title>iffee</Title>
                       </Sidebartitle>
                        <Menu>Menu</Menu>
                        <Icons> 
                            <Imges><img src={uy}/> </Imges>
                            <IconTitle> <pre>Home</pre></IconTitle>
                        </Icons>
                        <Icons> 
                            <Imges><img src={kal}/> </Imges>
                            <IconTitle> <pre>Garage</pre></IconTitle>
                        </Icons>
                        <Icons> 
                            <Imges><img src={set}/> </Imges>
                            <IconTitle> <pre>Service Menu</pre></IconTitle>
                        </Icons>
                        <Icons> 
                            <Imges><img src={uy}/> </Imges>
                            <IconTitle> <pre>Racers</pre></IconTitle>
                        </Icons>
                        <Icons> 
                            <Imges><img src={kal}/> </Imges>
                            <IconTitle> <pre>Calculator</pre></IconTitle>
                        </Icons>
                        <Icons> 
                            <Imges><img src={set}/> </Imges>
                            <IconTitle> <pre>Settings</pre></IconTitle>
                        </Icons>
                        <Races><pre>Scheduled Races</pre></Races>
                        <Uchlik>
                            <Mutto>
                                  <Muto>
                                      <img src={Dmutu} />
                                  </Muto>
                                      <Pre>
                                          <pre>  MotoGP 2022</pre>
                                    </Pre>
                            </Mutto>
                            <Mutto>
                                  <Muto>
                                      <img src={Ymutu} />
                                  </Muto>
                                      <Pre>
                                          <pre>Dynamics</pre>
                                    </Pre>
                            </Mutto>
                            <Mutto>
                                  <Muto>
                                      <img src={Tmutu} />
                                  </Muto>
                                      <Pre>
                                          <pre>Olympics</pre>
                                    </Pre>
                            </Mutto>
                        </Uchlik>
                        <Contaner>
                            <ImgPeople>
                           <img src={odam} />
                            </ImgPeople>
                            <Text>
                           <p>Killua</p>
                            </Text>
                            <Icon>
                           <img src={icon} />
                            </Icon>
                        </Contaner>
                   </Content>
               </div>
        );
}
export default Sidebar