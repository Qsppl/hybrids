import { COMPONENT, OBSERVER } from '../symbols';

export default Component => key => (host, component) => {
  let parentElement;
  const check = ({ target }) => {
    if (target === parentElement) {
      host[OBSERVER].check();
    }
  };

  host.addEventListener('@connect', () => {
    parentElement = host.parentElement;
    component[key] = null;

    while (parentElement) {
      const parentComponent = parentElement[COMPONENT];
      if (parentComponent && parentComponent instanceof Component) {
        component[key] = parentComponent;
        break;
      }
      parentElement = parentElement.parentElement;
    }

    if (parentElement) {
      parentElement.addEventListener('@change', check);
    }
  });

  host.addEventListener('@disconnect', () => {
    if (parentElement) {
      parentElement.removeEventListener('@change', check);

      parentElement = null;
      component[key] = null;
    }
  });
};