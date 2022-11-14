import React, { useState } from 'react'

type BaseButtonProps = {
    text?: string;
    size: "s" | "m";
    href?: string;
    disabled?: boolean;
    isFluid?: boolean;
    target?: string

}

    const styleSize = (size: "s" | "m") => {
        if(size === "s"){
            return {
                width: "110px",
                height: "40px",
                color: "red",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize:"12px"
            }
        } else {
            return {
                width: "170",
                height: "60px",
                color: "blue",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "20px"
            }
        }
    }

    const fluid = (isFluid: true | false ) => {
        if (isFluid === true){
            return {
                width: "100%"
            }
        } else {
           return { width: "auto" }
        }
    }
   

    const BaseButton: React.FC<BaseButtonProps>= ({ isFluid, target, text, size, href}) => {
        const [clickedButton, setClickedButton] = useState('Click the button:');

        const handleClick = (event : React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            setClickedButton('You clicked the button!')
            console.log(clickedButton);
        }

        if (href) {
            return <a style={{fontSize: "20px", fontWeight: "bold", color: "blue"}} target={target} href={href}> {text}  </a>
        }

        return (
            <>
                <p style={{fontSize: "20px", fontWeight: "bold"}}> { clickedButton }</p>
                <button onClick={ handleClick } style={{...styleSize(size), ...fluid(isFluid)}}>
                    { text }
                </button>
            </>
        )
    }

export default BaseButton