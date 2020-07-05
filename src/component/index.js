import React from 'react'
import './index.css';

class Calculator extends React.Component {
    state = {
        result: ""
    }

    handleClick = (e) => {
        this.setState({
            result: this.state.result.concat(e.target.name)
        })
    }
    calculate = () => {
        try {
            this.setState({
                result: eval(this.state.result).toString()
            })
        }
        catch (Error) {
            this.setState({
                result: "Error"
            })
        }
    }
    clear = () => {
        this.setState({
            result: ""
        })
    }
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }


    render() {
        return (
            <div>
                <form>
                    <input className="input"
                        type="text" value={this.state.result}></input>  </form>
                <div style={{ justifyContent: "center" }}>
                    <div className="grid-container">
                        <div className="grid-item"> <button className="btn" onClick={this.clear} >Clear</button> </div>
                        <div className="grid-item">  <button className="btn" onClick={this.backspace} >C</button> </div>
                        <div className="grid-item"> <button className="btn" name="+" onClick={this.handleClick}>+</button> </div>
                        <div className="grid-item"> <button className="btn" name="-" onClick={this.handleClick}>-</button> </div>
                        <div className="grid-item"><button className="btn" name="*" onClick={this.handleClick}>&times;</button> </div>
                        <div className="grid-item">   <button className="btn" name="/" onClick={this.handleClick}>/</button></div>
                        <div className="grid-item"><button className="btn" name="." onClick={this.handleClick}>.</button> </div>
                        <div className="grid-item"><button className="btn" name="(" onClick={this.handleClick}>(</button> </div>
                        <div className="grid-item"><button className="btn" name=")" onClick={this.handleClick}>)</button> </div>
                        <div className="grid-item"> <button className="btn" name="7" onClick={this.handleClick}>7</button></div>
                        <div className="grid-item"> <button className="btn" name="8" onClick={this.handleClick}>8</button></div>
                        <div className="grid-item">  <button className="btn" name="9" onClick={this.handleClick}>9</button></div>
                        <div className="grid-item"> <button className="btn" name="4" onClick={this.handleClick}>4</button></div>
                        <div className="grid-item"> <button className="btn" name="5" onClick={this.handleClick}>5</button> </div>
                        <div className="grid-item"> <button className="btn" name="6" onClick={this.handleClick}>6</button> </div>
                        <div className="grid-item"> <button className="btn" name="1" onClick={this.handleClick}>1</button></div>
                        <div className="grid-item"><button className="btn" name="2" onClick={this.handleClick}>2</button> </div>
                        <div className="grid-item"> <button className="btn" name="3" onClick={this.handleClick}>3</button> </div>
                        <div className="grid-item"><button className="btn" name="0" onClick={this.handleClick}>0</button> </div>
                        <div className="grid-item"> <button className="btn" onClick={this.calculate} id="result" >Result</button></div>
                        <div className="grid-item"> <button className="btn" onClick={this.clear} >Clear</button> </div>

                    </div>


                </div>

            </div>
        )
    }
}
export default Calculator;