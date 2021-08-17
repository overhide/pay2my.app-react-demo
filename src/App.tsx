import { IPay2MyAppHub } from "pay2myapp-widgets";
import React, { useState } from "react";

import './App.css';
import './assets/w3.css'

import OverhideHubComponent from "./components/OverhideHubComponent";
import OverhideStatusComponent from "./components/OverhideStatusComponent";
import OverhideLoginComponent from "./components/OverhideLoginComponent";
import OverhideLoginButtonComponent from "./components/OverhideLoginButtonComponent";
import OverhideAppsellButtonComponent from "./components/OverhideAppsellButtonComponent";
import Messages, {Message} from "./components/Messages";

type AppProps = {
};

const App: React.FunctionComponent<AppProps>  = (props) => {
  const [isVisaPending, setIsVisaPending] = useState<boolean>(false);
  const [hub, setHub] = useState<IPay2MyAppHub>();
  const [messages, setMessages] = useState<Message[]>([]);

  const onHubInit = (hub: IPay2MyAppHub) => {
    if (!!hub) {
      setHub(hub);
    }
  }

  const onPendingTransaction = (currency: string, isPending: boolean) => {
    console.log(`pending-transaction :: ${JSON.stringify({currency, isPending})}`);
    if (currency === 'dollars') {
      setIsVisaPending(isPending);
    }
  }

  const addMessage = (sku: string) => {
    messages.unshift({text: `${new Date()} -- ${sku} feature used`, isError: false});
    setMessages([...messages]);
  }

  const addError = (text: string) => {
    messages.unshift({text: text, isError: true});
    setMessages([...messages]);
  }

  return (
    <div>
      <img className={`visa ${isVisaPending ? 'visible' : 'invisible'}`} id="visa" src={`${process.env.PUBLIC_URL}/visa.png`} alt="" />

      <OverhideHubComponent isTest={true} onHubInit={onHubInit} onPendingTransaction={onPendingTransaction}></OverhideHubComponent>

      <div className="w3-bar w3-border w3-light-grey">
        <div className="w3-right">
          <OverhideStatusComponent hub={hub}></OverhideStatusComponent>
        </div>          
      </div>

      <div className="w3-container note-container"><div className="w3-card w3-sand w3-margin note">
        <img className="w3-left info" src={`${process.env.PUBLIC_URL}/info.png`}></img>
        <p>The basic demo showing off all widgets as part of a React.js application.  Using features causes back-end endpoint invocations with authorization checks.</p>
        <p>In the top-right we see the <em>pay2myapp-status</em> widget &mdash; allows (re)login, transaction check, logout, and payments refresh.</p>
        <p>Just below we see an explicit "login" button (<em>pay2myapp-appsell</em> widget).  This button always allows (re)login and never starts a feature flow.  This button has some custom neopolitan themed color scheme CSS.</p>
        <p>At the bottom we see three feature buttons (<em>pay2myapp-appsell</em> widgets).  These cause initial login and feature flows &mdash; through the backe-end &mdash; at different payment tiers.</p>
        <p><a href="https://github.com/overhide/pay2myapp-widgets#demos">...back to demos</a></p>    
      </div></div>

      <OverhideLoginComponent hub={hub}></OverhideLoginComponent>

      <div className="w3-row w3-padding-64"><div className="w3-col s4">&nbsp;</div><div className="w3-col s4 w3-center">
        <OverhideLoginButtonComponent hub={hub}></OverhideLoginButtonComponent>
      </div></div>

      <div className="w3-row appsell-envelope">
        <div className="w3-col s4 w3-center">
          <OverhideAppsellButtonComponent 
            hub={hub}
            sku="free-feature"
            priceDollars="0"
            authorizedMessage="Use Feature"
            unauthorizedTemplate="Login to Use Free Feature"
            bitcoinAddress="tb1qr9d7z0es86sps5f2kefx5grpj4a5yvp4evj80z"
            ethereumAddress="0x046c88317b23dc57F6945Bf4140140f73c8FC80F"
            overhideAddress="0x046c88317b23dc57F6945Bf4140140f73c8FC80F"
            onAddMessage={addMessage}
            onAddError={addError}>
          </OverhideAppsellButtonComponent>
        </div>
        <div className="w3-col s4 w3-center">
          <OverhideAppsellButtonComponent 
            hub={hub}
            sku="paid-feature"
            priceDollars="2"
            authorizedMessage="Use Feature"
            unauthorizedTemplate="Add Feature ($${topup})"
            bitcoinAddress="tb1qr9d7z0es86sps5f2kefx5grpj4a5yvp4evj80z"
            ethereumAddress="0x046c88317b23dc57F6945Bf4140140f73c8FC80F"
            overhideAddress="0x046c88317b23dc57F6945Bf4140140f73c8FC80F"
            onAddMessage={addMessage}
            onAddError={addError}>
          </OverhideAppsellButtonComponent>
        </div>
        <div className="w3-col s4 w3-center">
          <OverhideAppsellButtonComponent 
            hub={hub}
            sku="subscribed-feature"
            priceDollars="3"
            authorizedMessage="Use Feature"
            unauthorizedTemplate="Subscribe Feature For 30 Minutes ($${topup})"
            bitcoinAddress="tb1qr9d7z0es86sps5f2kefx5grpj4a5yvp4evj80z"
            ethereumAddress="0x046c88317b23dc57F6945Bf4140140f73c8FC80F"
            overhideAddress="0x046c88317b23dc57F6945Bf4140140f73c8FC80F"
            withinMinutes="30"
            onAddMessage={addMessage}
            onAddError={addError}>
          </OverhideAppsellButtonComponent>
        </div>
      </div>

      <div className="w3-row w3-padding-64">
        <div className="w3-col w3-center">
          <Messages messages={messages}></Messages>
        </div>
      </div>        
    </div>
  );
}

export default App;
