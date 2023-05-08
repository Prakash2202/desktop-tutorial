import React from "react";
const Button =(props)=>{
    const{toggleval1,settoggleval1,swap}=props
    return <button className="btn" onClick={()=>settoggleval1(!toggleval1)}>{swap}</button>
       
}
export default Button