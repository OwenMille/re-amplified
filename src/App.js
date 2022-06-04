import Amplify from 'aws-amplify'
import awsExports from "./aws-exports";
import { withAuthenticator, Button, Text, Heading, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css'
import { DefaultDivider, ReAmplified } from './components'
import React, { useState } from "react";
import { render } from "react-dom";

Amplify.configure(awsExports);

function App({ signOut, user }) {
  const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Heading level={1}>Hello {user.username}</Heading>
      </div>
    );
  };

  const HoverText = () => {
    return (
      <Text style={styles.hovertext} color="gray" lineHeight="2" width="20vw" onClick={signOut}>
        ( sign out )  
      </Text>
    );
  };
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setTimeout(function(){
      setIsHovering(false)
   }, 2000);

  };


  return (
    <div style={styles.container}>
      <div style={styles.top}>
        <HoverableDiv
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
        {isHovering && <HoverText />}
      </div>
      <DefaultDivider/>
      <Heading level={2}>reamplified</Heading>
      <ReAmplified/>
      </div>
  );
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', 
              flexDirection: 'column', justifyContent: 'center', padding: 20 },
  top: {
     display: 'flex', flexDirection: 'row', justifyContent: 'left'
  },
  hovertext:{
    cursor: 'pointer', fontWeight: '300',fontSize: '0.8em'
  }
}

export default withAuthenticator(App)