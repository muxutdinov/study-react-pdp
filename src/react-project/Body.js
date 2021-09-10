import React from 'react';
import {Bod,Top, Kv, Kvx, BodyTitle, Kvb, Icons, Icon, Title, Text1} from './Body-style'
// import Kl from './img/vector.png'
// import Ko from './img/vector2.png'
import ong from './img/Vector 636.png'
import chap from './img/Vector 637.png'
import cat from './img/cat icon.png'
class Body extends React.Component {
    render() {
        return (
            <div>
                <Bod>
                  <Top>
                     <Kv>
                         <Kvx>
                           Start
                         </Kvx>
                     </Kv>
                     <Kv>
                         <Kvx>
                           Drive
                         </Kvx>
                     </Kv>
                     <Kv>
                         <Kvx>
                           Maintinance
                         </Kvx>
                     </Kv>
                     <Kv>
                         <Kvx>
                           Battery
                         </Kvx>
                     </Kv>
                     <Kv>
                         <Kvx>
                           Tireps
                         </Kvx>
                     </Kv>
                     <Kv>
                         <Kvx>
                           Lock
                         </Kvx>
                     </Kv>
                  </Top>
                 <BodyTitle>
                   <Title>
                   Infiniti Renault
                   </Title>
                   <Kvb>
                     <img src={ong}/>
                   </Kvb>
                   <Kvb>
                     <img src={chap}/>
                   </Kvb>
                    <Icons>
                       <Icon>
                           <img src={cat}/> 
                           <Text1>Championships</Text1>
                       </Icon>
                       <Icon>
                           <img src={cat}/> 
                           <Text1>Championships</Text1>
                       </Icon>
                       <Icon>
                           <img src={cat}/> 
                           <Text1>Championships</Text1>
                       </Icon>
                    </Icons>
                 </BodyTitle>
                </Bod>
            </div>
        );
    }
}
export default Body;




