import React from "react";
import { Meteor } from "meteor/meteor";

export const LoginWithFacebook = () => {
  const handleFacebookLogin = () => {
    Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email', /* 'instagram_graph_user_profile'*/] }, function(err){
      if (err) {
          console.log('Handle errors here: ', err);
      }
  });
};

  return (
    <button
      type="button"
      className="Facebook-btn"
      onClick={handleFacebookLogin}
    >
      Login with Facebook
      <div>
        <div
          className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
        ></div>
      </div>
    </button>
  );
};
