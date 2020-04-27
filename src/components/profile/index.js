import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import ChangePasswordForm from "../changePasswordForm";

const Profile = () => {
  const { username } = useContext(AuthContext);

  return (
    <>
      <h2 style={{color:"white"}}>{username}</h2>
      <ChangePasswordForm name={username}/>
    </>

  );
};

export default Profile;