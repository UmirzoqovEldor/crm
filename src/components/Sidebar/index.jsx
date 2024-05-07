import React, { useEffect, useState } from "react";
import  { Body, Side , Container, Wrapper, Logo, LogOut,Menu ,MenuItem, Arrow, ChildWrapper, LogOutIcon}  from "./style";
import Navbar from "../Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Profile from "./profile";

import data from "../../utils/sidebar";
 export const Sidebar =()=>{
    const navigate =useNavigate()
    const ActiveLocation = useLocation();
    const exitFunction=()=>{
        navigate("/login")
    }
    useEffect(()=>{

    },[ActiveLocation])
    function navigetLogo() {
        navigate("/")
    }
    const [open ,setOpen]=useState([]);


    const OpenClouseArrow=({id,path,children},e)=>{
        if(!children){
            e.preventDefault();
            navigate(path);
        }
        if (open.includes(id)) {
          let menu = open.filter((value)=>value!==id) ;
          setOpen(menu)
        }else{
            setOpen([...open,id])
        }
        

    }
    return <Container>
        <Side>
            <Logo onClick={navigetLogo}>Webbrain Crm</Logo>
            <Profile/>
            <Menu>
                
                {data.map((parent)=>{
                   const{icon:Icon}=parent
                    return !parent.hidden?(
                        <React.Fragment key={parent.id}>
                    <MenuItem  onClick={(e)=>OpenClouseArrow(parent,e)} 
                    // to={parent.path}
                    act={ActiveLocation.pathname.includes(parent.path)}
                    >  
                    <MenuItem.Title> <Icon className="icon"/> {parent.title}</MenuItem.Title>
                    {parent?.children && <Arrow active={open.includes(parent.id)}/>}
                    
                    </MenuItem >
                    <ChildWrapper active={open.includes(parent.id)}>
                  {parent?.children?.map((child)=>{
                      return(
                          <MenuItem key={child.id} to={child.path} act={ActiveLocation.pathname.includes(child.path)}>  
                      <MenuItem.Title>  {child.title}</MenuItem.Title>
                    
                    
                    </MenuItem>
                    )
                })}

                </ChildWrapper>
                    </React.Fragment>
                    ):null;
                    
                })};
               
                
            </Menu>
            <LogOut onClick={exitFunction}>
               <LogOutIcon/> Chiqish
            </LogOut>
        </Side>
        <Body>
            
            <Navbar/>
            <Wrapper>
            <Outlet/>

            </Wrapper>
        </Body>
    </Container>
}
export default Sidebar