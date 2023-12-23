import React from "react";

const Profile = ({ loginInfo }) => {
  return (
    <div className="sign-in-page">
      <h2>{loginInfo.id}</h2>
      <h2>{loginInfo.username}</h2>
      <h2>{loginInfo.email}</h2>
      <h2>{loginInfo.firstName}</h2>
      <h2>{loginInfo.lastName}</h2>
      <h2>{loginInfo.gender}</h2>
      <h2>{loginInfo.image}</h2>
    </div>
  );
};

export default Profile;
