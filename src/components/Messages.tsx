import React from "react";

import './Messages.css';
import '../assets/w3.css'

export interface Message {
  text: string;
  isError: boolean;
};

type MessagesProps = {
  messages: Message[];
};

const Messages: React.FunctionComponent<MessagesProps>  = (props) => {
  const messages = [];
  let index = 1;

  console.log(`MESSAGES :: ${messages.length}`);

  for (const value of props.messages) {
    messages.push(<div key={index++} className={`w3-col s8 w3-center ${value.isError ? 'w3-panel w3-pale-red w3-display-container' : 'w3-panel w3-pale-green w3-display-container'}`}><p>{value.text}</p></div>);
  }

  return (
    <div className="w3-row messages-envelope">
      {messages}
    </div>
  );
}

export default Messages;
