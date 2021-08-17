import React, { useRef, useEffect } from "react";

import { IPay2MyAppHub, IPay2MyAppAppsell } from "pay2myapp-widgets";

type OverhideAppsellButtonProps = {
  hub?: IPay2MyAppHub | null;
  sku?: string;
  priceDollars?: string;
  authorizedMessage?: string;
  unauthorizedTemplate?: string;
  bitcoinAddress?: string;
  ethereumAddress?: string;
  overhideAddress?: string;
  withinMinutes?: string;
  onAddMessage?: (sku: string) => void;
  onAddError?: (text: string) => void;
};

const OverhideAppsellButtonComponent: React.FunctionComponent<OverhideAppsellButtonProps>  = (props) => {
  const componentRef = useRef();
  const BACKEND_CONNECTION_STRING = `https://demo-back-end.azurewebsites.net/api`;

  const invokeOnSkuClicked = (event: any) => {
    console.log(`sku-clicked :: ${JSON.stringify(event.detail, null, 2)}`);
  
    // Call back-end and ensure it verifies before saying it's handled.
    fetch(`${BACKEND_CONNECTION_STRING}/RunFeature`
      +`?sku=${event.detail.sku}`
      +`&currency=${event.detail.currency}`
      +`&from=${event.detail.from}`
      +`&isTest=${event.detail.isTest}`
      +`&message=${btoa(event.detail.message)}`
      +`&signature=${btoa(event.detail.signature)}`)
      .then(response => {
        if (response.ok) {
          props.onAddMessage && props.onAddMessage(event.detail.sku);
        } else {
          props.onAddError && props.onAddError(`error talking to back-end &mdash; ${response.status} &mdash; ${response.statusText}`);
        }
    }).catch(e => props.onAddError && props.onAddError(`error talking to back-end &mdash; ${e}`))
  }

  useEffect(() => {
    if (!!componentRef) {
      const { current } = componentRef;
      const component = (current as unknown) as IPay2MyAppAppsell;
      if (!!props.hub && !!component.setHub) {
        component.setHub(props.hub);
      }
    }
  }, [props.hub])

  useEffect(() => {
    const {current} = componentRef;
    const element = (current as unknown) as HTMLElement;
    // This is where we listen to authorized users clicking on events when they click a feature button.
    // We hit the back-end in response to these.
    // We re-validate authorizations in the back-end.
    // See /demo-back-end
    element.addEventListener('pay2myapp-appsell-sku-clicked', invokeOnSkuClicked);
    return () => element.removeEventListener('pay2myapp-appsell-sku-clicked', invokeOnSkuClicked);
  }, [props.hub]);

  return (
    <div>
      <pay2myapp-appsell 
        ref={componentRef}      
        sku={props.sku}
        priceDollars={props.priceDollars}
        authorizedMessage={props.authorizedMessage}
        unauthorizedTemplate={props.unauthorizedTemplate}
        bitcoinAddress={props.bitcoinAddress}
        ethereumAddress={props.ethereumAddress}
        overhideAddress={props.overhideAddress}
        withinMinutes={props.withinMinutes}>
      </pay2myapp-appsell>
    </div>
  );
}

export default OverhideAppsellButtonComponent;
