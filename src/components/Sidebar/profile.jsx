import React from 'react'
import { ProfielContiener } from './style'
import noUser from "../../assets/images/noUser.webp"
function Profile() {
  return (
    <ProfielContiener>
       < ProfielContiener.Image src={noUser}/>
       <div>
        <ProfielContiener.Name>Eldor Umirzoqov</ProfielContiener.Name>
        <ProfielContiener.Email>umirzoqoveldor46@gmail.com</ProfielContiener.Email>
       </div>
       
    </ProfielContiener>
  )
}

export default Profile