import React from "react";

function ProfileCard({ name, title, bio }) {
  return (
    <div>
      <p style={{ fontSize: "35px" }}>{name}</p>
      <p>
        <span style={{ fontWeight: "bolder" }}>Title: </span> {title}
      </p>
      <p>
        <span style={{ fontWeight: "bolder" }}>Bio: </span>
        {bio}
      </p>
    </div>
  );
}

export default ProfileCard;
