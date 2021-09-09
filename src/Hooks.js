import React from "react"
import {Main, Body, Sidebar, Button} from './style'
function Hooks(props) {
    return (
    <Main>
        <Sidebar>
            <Button>Bye</Button>
            <Button type="cansal">Cansal</Button>
            <Button type="refresh">Refresh</Button>
            <Button type="info">Info</Button>
            <Button type="save">Save</Button>
        </Sidebar>
        <Body type="error">
            {/* <Img src={"/"} alt="no working"/> */}
        </Body>
    </Main>
        )
}
export default Hooks