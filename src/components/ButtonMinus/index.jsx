import React from "react";
import style from "./style.module.css"
export default props => {
	return (
		<button onClick ={()=>props.incrementCounter()} className={style.minus}>
			-
		</button>
	)
}