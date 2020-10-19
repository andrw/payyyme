import React from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";

const responseFacebook = (response) => {
  console.log(response);
};

export default function SpacingGrid() {
  return (
    <FacebookLogin
      appId="509854009052287"
      autoLoad={true}
      fields="name,email,picture"
      // onClick={componentClicked}
      callback={responseFacebook}
    />
  );
}
