import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";

import Sidebar from "../components/Sidebar";
import data from "../utils/sidebar";

 export const Root =()=>{
    return (
    <Routes>
        <Route path="/" element={<Navigate to={"analitika"} />} />
        <Route element={<Sidebar/>}>
        {data.map((parent)=>{
            const ElemantParent=parent.element
           
            if(parent?.children){
             return parent.children.map((child)=>{
                const ElemmentChild= child.element
                
                    return  (!parent.hidden && (<Route key={child.id} path={child.path} element={<ElemmentChild/>}/>)
        )});
            }else
            return <Route key={parent.id} path={parent.path} element ={<ElemantParent/>}/>
        })};
        </Route>

        {/* {
            data.map((parent)=>{
                const ElemantParent=parent.element;
                return parent.hidden &&(
                    <Route key={parent.id} path={parent.path} element ={<ElemantParent/>}/> 
                )
            })
        }; */}
         <Route path="/login" element={<h1>login</h1>}/>
        <Route path="*" element={<h1>404 not found</h1>}/>
    </Routes>
    )
}
export default Root