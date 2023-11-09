import * as React from "react";
import { render } from "react-dom";
import { hidden_backend } from "../../declarations/hidden_backend";

const MyHello = () => {
  const [principal, setPrincipal] = React.useState('');
  const [newMessage, setNewMessage] = React.useState('');
  const [yourMessage, setYourMessage] = React.useState('');
  const [yourPrincipal, setYourPrincipal] = React.useState('');

  // Function to add a  new message
  async function addnewMessage() {
    try{
    const add = await hidden_backend.putMessage(principal, newMessage);
    setNewMessage(add);
    }
    catch(err){
      console.log(err);
    }
  }

  // Function to rate a course
  async function checkMessage() {
    try{
    const yourMessageIs = await hidden_backend.lookup();
    console.log(yourMessageIs);
    setYourMessage(yourMessageIs);
    }
    catch(err){
      console.log(err);
    }
  }

  // Function to get course rating
  async function getPrincipal() {
    try{
    const add = await hidden_backend.checkMsg();
    console.log(add);
    setYourPrincipal(add);
    }

    catch(err){
      console.log(err);
    }
  }

  return (
    <div style={{ "fontSize": "30px" }}>
      <div style={{ "backgroundColor": "yellow" }}>
        <p>Welcome to Decentra Message</p>
      </div>
      <div style={{ margin: "30px" }}>
        <p>Enter Your Message </p>
        <input
          id="principal"
          placeholder = "Principal"
          value={principal}
          onChange={(ev) => setPrincipal(ev.target.value)}
        ></input>
        <input
          id="message"
          value={newMessage}
          placeholder = "Message"
          onChange={(ev) => setNewMessage(ev.target.value)}
        ></input>
        <button onClick={addnewMessage}>Send Message</button>
      </div>

      <div style={{ margin: "30px" }}>
        <p>Click to view your message</p>
        <button onClick={checkMessage}>Check Message</button>
      </div>

      {/* <div style={{ margin: "30px" }}>
        <p>Click to View your Principal</p>
        <button onClick={getPrincipal}>Get Your Principal</button>
      </div> */}

      { newMessage !== '' &&
      <div>
        "
        <span style={{ color: "blue" }}>{newMessage}</span>" is added!
      </div>
}
{ yourPrincipal !== '' &&
      <div>
        "
        <span style={{ color: "blue" }}>{yourPrincipal}</span>" is your Principal
      </div>
}
{ yourMessage !== '' &&
      <div>
        "
        <span style={{ color: "blue" }}>{yourMessage}</span>" is your message
      </div>
}
    </div>
  );
};

render(<MyHello />, document.getElementById("app"));