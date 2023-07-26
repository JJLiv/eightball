import React, {useState} from "react";
import "./EightBall.css";
import { getRandom } from "./getRandom";


const EightBall = ({ answers }) => {
    let [color, setColor] = useState("black");
    let [msg, setMsg] = useState("Think of a Question");
    let answer;

    function handleClick(){
        answer = answers[getRandom(answers.length)];
        setColor(answer.color);
        setMsg(answer.msg);
        console.log(answer);
    }

    return (
        <div className="EightBall" 
        onClick={handleClick}
        style={{backgroundColor: color}}
        >
        <button type="button" className="btn">
            <b>{msg}</b>
        </button>
        
        </div>
    );

};






export default EightBall;