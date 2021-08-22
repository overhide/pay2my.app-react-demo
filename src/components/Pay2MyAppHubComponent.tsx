import React, { useRef, useState, useEffect } from "react";

import { IPay2MyAppHub } from "pay2my.app";

type Pay2MyAppHubProps = {
  isTest: boolean;
  onHubInit?: (hub: IPay2MyAppHub) => void;
  onPendingTransaction?: ( currency: string, isPending: boolean) => void;
};

const Pay2MyAppHubComponent: React.FunctionComponent<Pay2MyAppHubProps>  = (props) => {
  const hubRef = useRef();
  const BACKEND_CONNECTION_STRING = `https://demo-back-end.azurewebsites.net/api`;

  const [token, setToken] = useState<string | null>(null);

  const invokeOnPendingTransaction = (event: any) => {
    if (!props.onPendingTransaction) {
      return;
    }
    props.onPendingTransaction(event.detail.currency, event.detail.isPending)
  }
  
  useEffect(() => {
    if (!!props.onHubInit) {
      const {current} = hubRef;
      const hub: IPay2MyAppHub = (current as unknown) as IPay2MyAppHub;
      props.onHubInit(hub);
    }

    fetch(`${BACKEND_CONNECTION_STRING}/GetToken`)
    .then(async (response) => {
      if (response.ok) {            
        setToken(await response.text());
      } else {
        console.error(`error talking to back-end -- ${response.status} &mdash; ${response.statusText}`);
      }
    }).catch(e => console.error(`error talking to back-end -- ${e}`));
  }, [hubRef]);

  useEffect(() => {
    const {current} = hubRef;
    const element = (current as unknown) as HTMLElement;
    // This event fires whenever we're asked to topup funds.
    // We're using it here to show the VISA instructional helper image.
    element.addEventListener('pay2myapp-hub-pending-transaction', invokeOnPendingTransaction);
    return () => element.removeEventListener('pay2myapp-hub-pending-transaction', invokeOnPendingTransaction);
  }, [hubRef]);

  return (
    <div>
      <pay2myapp-hub ref={hubRef} token={token} isTest={props.isTest}></pay2myapp-hub>
    </div>
  );
}

export default Pay2MyAppHubComponent;
