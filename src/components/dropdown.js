import React, {useState} from "react";

export default function Dropdown({items}){
    const [isOpen,setIsopen] = useState(false);

    const handleMouseEnter = ()=>{
        setIsopen(true);
    };
    const handleMouseLeave = ()=>{
        setIsopen(false);
    };
    const handleOptionClick = ()=>{
        setIsopen(false);
    };

    
    return(
        <>
            <div className="container" >
                    <h2>Should you use a dropdown? </h2>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button className="dropdown-button" >
                    Select an option 
                    <img className="arrow" src="https://cdn-icons-png.flaticon.com/128/32/32195.png"/>
                    </button>
                    {isOpen &&(
                <ul className="dropdown-list">
                    {items.map((item,index)=>(
                        <li key={index} className="dropdown-item" onClick={handleOptionClick}>
                            {item}
                        </li>
                    ))}   
                </ul>
               )}
                    </div>
                    
               {/* {isOpen &&(
                <ul className="dropdown-list">
                    {items.map((item,index)=>(
                        <li key={index} className="dropdown-item" onClick={handleOptionClick}>
                            {item}
                        </li>
                    ))}   
                </ul>
               )} */}
            </div>
        </>
    )
} 