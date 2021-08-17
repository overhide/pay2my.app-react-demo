import React, { useRef, useEffect } from "react";

import { IPay2MyAppHub, IPay2MyAppStatus } from "pay2myapp-widgets";

type OverhideStatusProps = {
  hub?: IPay2MyAppHub | null;
};

const OverhideStatusComponent: React.FunctionComponent<OverhideStatusProps>  = (props) => {
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

export default OverhideStatusComponent;
