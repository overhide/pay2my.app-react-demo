import React, { useRef, useEffect } from "react";

import './Pay2MyAppLoginButtonComponent.css';

import { IPay2MyAppHub, IPay2MyAppAppsell } from "pay2my.app";

type Pay2MyAppLoginButtonProps = {
  hub?: IPay2MyAppHub | null;
};

const Pay2MyAppLoginButtonComponent: React.FunctionComponent<Pay2MyAppLoginButtonProps>  = (props) => {
  const componentRef = useRef();

  useEffect(() => {
    if (!!componentRef) {
      const { current } = componentRef;
      const component = (current as unknown) as IPay2MyAppAppsell;
      if (!!props.hub && !!component.setHub) {
        component.setHub(props.hub);
      }
    }
  }, [props.hub])

  return (
    <div>
      <pay2myapp-appsell 
        ref={componentRef}      
        loginMessage="Login">
          <div slot="unauthorized-button" className="neopolitan-button"></div>
      </pay2myapp-appsell>
    </div>
  );
}

export default Pay2MyAppLoginButtonComponent;
