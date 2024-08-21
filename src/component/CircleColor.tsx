import {  DetailedHTMLProps, HTMLAttributes } from "react";


interface IColor extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
     color:string
 }
const CircleColor = ({color , ...rest} :IColor) => {
    return (
        <span className={`inline-block w-5 h-5 rounded-full`} style={{ backgroundColor: color}}  {...rest} />
    );
}

export default CircleColor;
