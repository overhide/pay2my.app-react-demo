import React, { useRef, useEffect } from "react";

import { IPay2MyAppHub, IPay2MyAppStatus } from "pay2my.app";

type Pay2MyAppStatusProps = {
  hub?: IPay2MyAppHub | null;
};

const Pay2MyAppStatusComponent: React.FunctionComponent<Pay2MyAppStatusProps>  = (props) => {
  const componentRef = useRef();

  useEffect(() => {
    if (!!componentRef) {
      const { current } = componentRef;
      const component = (current as unknown) as IPay2MyAppStatus;
      if (!!props.hub && !!component.setHub) {
        component.setHub(props.hub);
      }
    }
  }, [props.hub])

  return (
    <div>
      <pay2myapp-status ref={componentRef}></pay2myapp-status>
    </div>
  );
}

export default Pay2MyAppStatusComponent;
