import React, { useRef, useEffect } from "react";

import { IPay2MyAppHub, IPay2MyAppLogin } from "pay2my.app";

type Pay2MyAppLoginProps = {
  hub?: IPay2MyAppHub | null;
};

const Pay2MyAppLoginComponent: React.FunctionComponent<Pay2MyAppLoginProps>  = (props) => {
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

export default Pay2MyAppLoginComponent;
