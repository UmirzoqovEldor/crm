import styled from "styled-components"
import arrow from "../../assets/icons/rightArrow.svg?react";
import exit from "../../assets/icons/exit.svg?react"
import { NavLink } from "react-router-dom";
const Arrow =styled(arrow)`
display: flex;
  margin-left: auto;
  transform: ${({ active }) => active && `rotate(90deg)`};
  transition: all 0.1s;`
  const Container =styled.div`
display:flex;
`
const Side =styled.div`
display:flex;
flex-direction:column;
position:relative;
width:280px;
min-width:280px;
max-width:280px;
height:100vh;
overflow:hidden;
overflow-y:scroll;
background-color:white;
border:1px solid red;
&::-webkit-scrollbar{
  width:0;
}
`
const Body =styled.div`
flex:1;
border:1px solid blue;
`
const Wrapper = styled.div`
border:1px solid green;
margin:16px;
background-color:white;`
const Logo =styled.div`
color:#1890FF;
font-size:28px;
padding:16px 24px;
position:sticky;
top:0;
font-weight:600px;
line-height:28px;
border-bottom:1px solid #F8FAFC;
`
const LogOut =styled(Logo)`
display:flex;
align-items:center;
position:sticky;
margin-top:auto;
bottom:0;
border-bottom:0;
border-top:1px solid #F8FAFC;
`
const LogOutIcon =styled(exit)`
width:20px;
height:20px;
margin-right:10px;
`


//Profil qismi
const ProfielContiener =styled.div`
display:flex;
align-content:center;
justify-content:center;
margin:23px 24px 32px 24px;

`
ProfielContiener.Image=styled.img`
width:48px;
height:48px;
margin-right:16px;
border-radius:50%
`
ProfielContiener.Name=styled.div`
width:168px;
font-weight:600;
font-size:14px;
line-height:20px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
color:var(--primaryColor)
`
ProfielContiener.Email=styled.div`
width:168px;
font-weight:600;
font-size:14px;
line-height:20px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
color:var(--secondaryColor)
`
//MENU qismi
const Menu =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`
const MenuItem =styled(NavLink)`
text-decoration:none;
/* color: ${({act})=> act?`var(--activeColor)`:`var(--primaryColor`}; */
display:flex;
align-items:center;
margin-right:12px;
&:hover{
  cursor: pointer;
}
`
MenuItem.Title=styled.div`
color:var(--secondaryColor);
display:flex;
align-items:center;
flex:1;
font-weight:500;
font-size:14px;
line-height:20px;
margin:12px 0 12px 24px;
&:hover{
  cursor: pointer;
  color:var(--activeColor);
  & path{
    fill:var(--activeColor)
  }
}
.icon{
  margin-right:16px;
}
`
const ChildWrapper = styled.div`
height: ${({active})=>active?"auto":"0px"};
overflow:hidden;
margin-left:35px;`
export { Container,ChildWrapper,Arrow ,LogOutIcon,Side,Body,Wrapper,Logo,LogOut,ProfielContiener,Menu,MenuItem }