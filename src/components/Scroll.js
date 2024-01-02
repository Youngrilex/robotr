import React from "react";

const Scroll = (props) => {
    return(
        <div className="border-t-[3px] border-green-200">
        {props.children}    
        </div>
    )
}

export default Scroll;