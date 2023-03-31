import React from "react";


const CustomButton = ({type, title, customStyle, handleClick}) => {
 
    const generateStyle = (type) => {
        if(type==='filled'){
            return {
                backgroundColor: '#000',
                color: '#fff',
            }
        }
    }
 
    return <button className={"px-2 py-1.2 flex-1 rounded-md ${customStyles}"}
  style={generateStyle(type)}
  >
    {title}
    </button>;
};

export default CustomButton;
