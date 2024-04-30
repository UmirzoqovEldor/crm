import React from "react";
import { Route, Routes } from "react-router-dom";
import sidebar from "../utils/sidebar";

 export const Root =()=>{
    <Routes>
        {sidebar.map((parent)=>{
            const ElemantParent=parent.element
            console.log(parent.path);
            return <Route key={parent.id} path={parent.path} element ={<ElemantParent/>}/>
        })}
    </Routes>
}
export default Root