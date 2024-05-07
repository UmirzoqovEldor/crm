import styled from "styled-components"
import search from "../../assets/icons/search.svg?react"
 const Container =styled.div`
 height:60px;
 border:1px solid currentColor;
 padding:0 16px 0 24px;
 display:flex;
 justify-content:space-between;
 align-items:center;
`
const InputWrriper =styled.div`
display:flex;
align-items:center;
flex:1;
 max-width:500px;
width:fit-content;
border:1px solid var(--secondaryColor);
height:40px;
border-radius:8px;
`
const Input =styled.input`
outline:none;
border:none;
height:36px;
flex:1;
 max-width:500px;
border-radius:8px;
font-weight:500;
font-size:14px;
line-height:20px;
color:#bbc3cd;
::placeholder{
    color: #BBC3CD;
    font-weight:500;
font-size:14px;
line-height:20px;

}
`
const SearchIcon =styled(search)`
margin:0 16px;
`
const NavbarSection =styled.div`
display:flex;
`
const Timer =styled.div`
color:${({status})=> status?"var(--secondaryColor)":"var(--primaryColor)"};
font-weight:600;
font-size:24px;
line-height:32px;
padding:5px;

`


export {Container ,Input,InputWrriper,SearchIcon,NavbarSection,Timer} 