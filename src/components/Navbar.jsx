import React from 'react';
import CustomLink from "./CustomLink";

function Navbar (props) {
  return (
      <div><CustomLink to={'/'}>Home</CustomLink>
        <CustomLink to={'/profile'}>Profile</CustomLink>
        <CustomLink to={'/chats'}>Chats</CustomLink>
      </div>

  );
}

export default Navbar;