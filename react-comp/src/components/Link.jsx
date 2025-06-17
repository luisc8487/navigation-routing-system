import {useContext} from "react";
import NavigationContext from "../context/navigation";

function Link({to, children}) {
  const {navigate} = useContext(NavigationContext);

  const handlerClick = (event) => {
    if(event.metaKey || event.ctrlKey){
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return <a href={to} onClick={handlerClick}>{children}</a>;
}

export default Link;
