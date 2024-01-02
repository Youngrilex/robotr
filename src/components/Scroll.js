import React from "react";

const Scroll = (props) => {
    return(
        <div className="min-h-[100vh] border-t-[3px] border-green-200">
        {props.children}    
        </div>
    )
}

export default Scroll;