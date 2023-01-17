/** @format */

// create a react component that inputs a text area message, with a button to send the message that is the same height as the text area and is on the right side of the text area with some padding, that performs a fetch request to localhost:3001 with the message as the body of the request, gets back a response as a data.message and displays that message in a box below

import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div className="App">
      <div className="Wrapper">
        <div className="Header-William">
          <h1>chatGPT = William Shakespeare</h1>
          <p>
            All responses will display in the form of Shakespearean Play, Romeo
            & Juliet... or something like that.
          </p>
          <div className="Romeo">
            <h3>
              {" "}
              ROMEO:{" "}
              <i>
                {" "}
                Remember, questions should be posed as Romeo asking Juliet...
              </i>
            </h3>{" "}
          </div>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={handleChange}
            className="TextArea"
          />
          <br />
          {/* <button type="submit">Send</button> */}
          <button
            type="submit"
            class="button">
            <span class="button__text">Ask Juliet</span>
            <span class="button__icon">
              <ion-icon name="cloud-download-outline"></ion-icon>
            </span>
          </button>
        </form>
        <br />
        <div className="Juliet">
          {" "}
          <h3>
            JULIET:{" "}
            <i>
              {response ? (
                `${response}`
              ) : (
                <>Juliet: Romeo, Romeo! wherefore art thou Romeo?</>
              )}
            </i>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
