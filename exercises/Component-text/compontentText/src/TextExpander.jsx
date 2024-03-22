import { useState } from "react";
import PropTypes from "prop-types"

TextExpander.propTypes ={
    collapsedNumWords: PropTypes.number.isRequired,
    expandButtonText: PropTypes.string,
    collapseButtonText: PropTypes.string,
    buttonColor: PropTypes.string,
    expanded: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
}

function TextExpander({
    children,
    collapsedNumWords = 15,
    collapseButtonText = "Collapse",
    expandButtonText = "Expand",
    buttonColor = "violet",
    expanded = false,
    className = "", 
}){
    const [isExpanded, setIsExpanded] = useState(expanded);
    const buttonStyle = {
        color : buttonColor,
        background : "none",
        border : "none",
        font : "inherit",
        cursor : "pointer",
        marginLeft : "6px",
    }
    const displayText = isExpanded
      ? children
      : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
    
      const handleClick = ()=>{
        setIsExpanded(!isExpanded);
    }
    return (
        <div className={className}>
            <span> {displayText}</span>
            <button style={buttonStyle} onClick = {handleClick}>
                {isExpanded? collapseButtonText: expandButtonText}
            </button>
        </div>
    )
}



  export default TextExpander;