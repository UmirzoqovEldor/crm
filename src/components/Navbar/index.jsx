import React from "react";
import { Input, InputWrriper,Container, SearchIcon, NavbarSection } from "./style";
import Time from "./Time";


const Navbar =()=>{
    return <Container>
        <InputWrriper>
        <SearchIcon/>
        <Input placeholder="Search"/> 
        </InputWrriper>
        <NavbarSection>
            <Time/>
        
        </NavbarSection>
    </Container>
}
export default Navbar