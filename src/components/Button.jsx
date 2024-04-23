import React from 'react'

function Button({
    children,
    className = "",
    color = "text-black",
  
    ...props
  }) {
    return <div className={`py-1 px-3 rounded-lg ${className} ${color} cursor-pointer ` } {...props}>{children}</div>;
  
}

export default Button