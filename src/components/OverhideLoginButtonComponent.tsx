import React, { useRef, useEffect } from "react";

import './OverhideLoginButtonComponent.css';

import { IPay2MyAppHub, IPay2MyAppAppsell } from "pay2myapp-widgets";

type OverhideLoginButtonProps = {
  hub?: IPay2MyAppHub | null;
};

const OverhideLoginButtonComponent: React.FunctionComponent<OverhideLoginButtonProps>  = (props) => {
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

export default OverhideLoginButtonComponent;
