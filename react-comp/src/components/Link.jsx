import {useContext} from "react";
import NavigationContext from "../context/navigation";

function Link({to, children}) {
  const {navigate} = useContext(NavigationContext);

  const handlerClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return <a onClick={handlerClick}>{children}</a>;
}

export default Link;
