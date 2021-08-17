import React, { useRef, useEffect } from "react";

import { IPay2MyAppHub, IPay2MyAppLogin } from "pay2myapp-widgets";

type OverhideLoginProps = {
  hub?: IPay2MyAppHub | null;
};

const OverhideLoginComponent: React.FunctionComponent<OverhideLoginProps>  = (props) => {
  const componentRef = useRef();

  useEffect(() => {
    if (!!componentRef) {
      const { current } = componentRef;
      const component = (current as unknown) as IPay2MyAppLogin;
      if (!!props.hub && !!component.setHub) {
        component.setHub(props.hub);
      }
    }
  }, [props.hub])

  return (
    <div>
      <pay2myapp-login ref={componentRef}
                      overhideSocialMicrosoftEnabled
                      overhideSocialGoogleEnabled
                      overhideWeb3Enabled
                      ethereumWeb3Enabled
                      bitcoinEnabled
                      overhideSecretTokenEnabled>
      </pay2myapp-login>    
    </div>
  );
}

export default OverhideLoginComponent;
