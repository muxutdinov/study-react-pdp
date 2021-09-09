import styled from "styled-components";
export const Main = styled.div`
color:red;
font-size: large;
display: flex;
`
export const Sidebar = styled.div`
width: 256px;
margin: 20px;
border: 1px solid red;
display: flex;
transition: all 1s;
:hover{
    background-color: yellow;
}
`
export const Body = styled.div`
flex: 1;
padding:15px;
border: 1px solid blue;
`
const getColor = ({type})=>{
    switch(type){
        case 'save': return "green"
        case "info":return "greenyellow"
        case "refresh":return "blue"
        case "cansal":return "red"
        default : return 'black'
    }
}
export const Button = styled.button`
width: 150px;
height: 56px;
color: white;
background-color:${(props)=>getColor(props)};
/* background-color: ${(props)=>props.save? "green" : "red"}; */
/* background-color: ${({type})=>(type==="save"? "green" : type==="refresh" ? "blue" :type==="cansal"?"red":"black")}; */
margin: 5px;
border: none;
border-radius: 4px;
cursor: pointer;
:active{
    transform:scale(0.95);
}
`
// export const Img = styled.img``
