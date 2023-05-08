import React from "react";
import Button from "./Button";
// import App from "../App";
const Header=(props)=>{
    // const[a,seta]=useState(true);
    //const{m,n}=Props;
    const{toggleval,settoggleval}=props;
    return <div>
        <header className="header">
            <h2 className="app-header">Task manager app</h2> 
              <Button swap={toggleval? "close" :"Add"} toggleval1={toggleval} settoggleval1={settoggleval}/> 
        </header>
    </div>
}
export default Header