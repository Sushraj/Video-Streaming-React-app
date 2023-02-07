import React from "react";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
          <h1>Edit Profile</h1>
         <div className="profileScreen_info">
          <img src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png" alt="" />
          </div>  
      </div>
    </div>
  );
}

export default ProfileScreen;
