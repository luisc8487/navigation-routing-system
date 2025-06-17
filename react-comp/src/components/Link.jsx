import classNames from "classnames";
import {useContext} from "react";
import NavigationContext from "../context/navigation";

function Link({to, children}) {
  const {navigate} = useContext(NavigationContext);

  const classes = classNames("text-blue-500");

  const handlerClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handlerClick}>
      {children}
    </a>
  );
}

export default Link;
