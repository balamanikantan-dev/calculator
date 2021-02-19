import React, { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {
    const [total, setTotal] = useState(0)
    const [cal, setCal] = useState(0)
    const [oper, setOper] = useState()
    // const clickHandler = (event) => {
    //     switch (event.target.textContent) {
    //         case 'clear': setCal(0)
    //             break
    //         case '+': setTotal(cal)
    //             setOper("+")
    //             setCal(total + cal)
    //             break
    //         default: break;

    //     }

    // }
    const calculate = () => {
        switch (oper) {
            case '/': setCal(total / cal)
                break
            case '+': setCal(total + cal)
                break
            case '-': setCal(total - cal)
                break
            case '*': setCal(total * cal)
                break
            default: break;
        }
        setTotal(total + cal)
        // setOper('')
    }
    const clickHandler = (event) => {
        console.log(event.target.textContent)

        switch (event.target.textContent) {
            case 'clear': setCal(0)
                break
            case '/': setTotal(cal)
                setOper("/")
                if (oper) {
                    calculate()
                    // setCal("")
                }


                // setCal(0)
                break
            case '+': setTotal(cal)
                // if (total.toString().length > 0 && oper)
                setOper("+")

                if (oper) {
                    calculate()
                    // setCal("")
                }

                // setCal(0)
                break
            case '-': setTotal(cal)
                setOper("-")
                if (oper) {
                    calculate()
                    // setCal("")
                }

                // setCal(0)
                break
            case '*': setTotal(cal)
                setOper("*")
                // calculate()
                // setCal(0)
                if (oper) {
                    calculate()
                    // setCal("")
                }

                break
            case '=': calculate()
                break
            default:
                debugger
                setCal(prev => {
                    if (oper && total === prev) {
                        return parseInt(event.target.textContent)
                    }
                    else return parseInt(prev + event.target.textContent)
                })
        }

    }

    return (
        <div>
            <div style={
                { width: "200px", margin: "auto", direction: "rtl", border: "5px solid black" }
            }>{cal} </div>
            <div style={
                { width: "200px", margin: "auto" }
            }>
                <button className="but" style={{ width: "50%" }} onClick={clickHandler}>clear</button>
                <button className="but" onClick={clickHandler}>*</button>
                <button className="but" onClick={clickHandler}>/</button><br></br>
                <button className="but" onClick={clickHandler}>7</button>
                <button className="but" onClick={clickHandler}>8</button>
                <button className="but" onClick={clickHandler}>9</button>
                <button className="but" onClick={clickHandler}>-</button><br></br>
                <button className="but" onClick={clickHandler}>4</button>
                <button className="but" onClick={clickHandler}>5</button>
                <button className="but" onClick={clickHandler}>6</button>
                <button className="but" onClick={clickHandler}>+</button><br></br>
                <button className="but" onClick={clickHandler}>1</button>
                <button className="but" onClick={clickHandler}>2</button>
                <button className="but" onClick={clickHandler}>3</button>
                <button className="but" onClick={clickHandler}>=</button>
            </div>
        </div>
    )
}
export default Calculator