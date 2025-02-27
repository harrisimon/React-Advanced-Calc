import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

    state = {
        num1: '',
        num2: '',
        result: '',
        operator: '',
        numDisplay: ''
    }

    handleNum = (e) => {
        //////// 
        // if the current num1 is '' and operator is '' only add to num1
        // if operator is clicked only add to num2

        const currButton = e.target.innerText

        if(!(this.state.num1 === '' && currButton === '0') && this.state.operator === ''){
            // handling double decimal
            if (this.state.num1.includes('.') && currButton === '.'){
                console.log('error!')
                this.setState(() => {
                    return {numDisplay: 'Only one decimal per number!'}
                })
            } else {
                // setting num1
                this.setState((prevstate)=>{
                    return {
                        num1: prevstate.num1 + currButton,
                        numDisplay: prevstate.num1 + currButton,
                    }
                })
            }
        }
        // doesn't allow 0 for first num2 digit
        if ((this.state.num1 !== '' && this.state.operator !== '') && currButton !== '0'){
            if(!(this.state.num2 === '' && this.state.operator === '')){
                //handling double decimal
                if (this.state.num2.includes('.') && currButton === '.'){
                    console.log('error!')
                    this.setState(() => {
                        return {numDisplay: 'Only one decimal per number!'}
                    })
                } else {
                    // setting num2
                    this.setState((prevstate) => {
                        return {
                            num2: prevstate.num2 + currButton,
                            numDisplay: prevstate.num2 + currButton
                        }
                    })
                }
            }
        } else if (this.state.num2 !== '' && this.state.operator !== ''){
            if(!(this.state.num2 === '' && this.state.operator === '')){
                //handling double decimal
                if (this.state.num2.includes('.') && currButton === '.'){
                    console.log('error!')
                    this.setState(() => {
                        return {numDisplay: 'Only one decimal per number!'}
                    })
                } else {
                    // setting num2
                    this.setState((prevstate) => {
                        return {
                            num2: prevstate.num2 + currButton,
                            numDisplay: prevstate.num2 + currButton
                        }
                    })
                }
            }
        }
    }
    // set operator and includes if result is filled for chaining operations
    handleOperator = (e) => {
        const operator = e.target.innerText
        if (!(this.state.num1 === '') && this.state.num2 === ''){
            this.setState(() => {
                return {operator: operator}
            })
        } else if (!(this.state.result === '')){
            this.setState(() => {
                return {operator: operator, num1: this.state.result, num2: ""}
            })
        }
    }

    handleCalc = () => {
        // if equals is clicked parse integers and complete operation 

        if(this.state.result === ''){
            switch (!(this.state.num1 === '' && this.state.num2 === '')) {
                case this.state.operator === '+':
                    this.setState(() => {
                        return {
                            result: Number(this.state.num1) + Number(this.state.num2),
                            numDisplay: '' ,
                            num1:this.state.result,
                            num2:this.state.num2
                        }
                    })
                    break
                case this.state.operator === '-':
                    this.setState(() => {
                        return {
                            result: Number(this.state.num1) - Number(this.state.num2),
                            numDisplay: '',
                            num1:this.state.result,
                            num2:this.state.num2 
                        }
                    })
                    break
                case this.state.operator === '/':
                    this.setState(() => {
                        return {
                            result: Number(this.state.num1) / Number(this.state.num2), 
                            numDisplay: '', 
                            num1:this.state.result,
                            num2:this.state.num2 
                        }
                    })
                    break
                case this.state.operator === 'x':
                    this.setState(() => {
                        return {
                            result: Number(this.state.num1) * Number(this.state.num2), 
                            numDisplay: '', 
                            num1:this.state.result,
                            num2:this.state.num2 
                        }
                    })
                    break    
                default:
                    break  
            }
        } else {
            // handling calc behavior of result + operator + num2
            switch (!(this.state.result ===  '')) {
                case this.state.operator === '+':
                    this.setState((prevstate) => {
                        return {
                            result: Number(prevstate.result) + Number(this.state.num2), 
                            numDisplay: '',
                            num1:this.state.result,
                            num2:this.state.num2
                        }
                    })
                    break
                case this.state.operator === '-':
                    this.setState((prevstate) => {
                        return {
                            result: Number(prevstate.result) - Number(this.state.num2), 
                            numDisplay: '',
                            num1:this.state.num2,
                            num2:'' 
                        }
                    })
                    break
                case this.state.operator === '/':
                    this.setState((prevstate) => {
                        return {
                            result: Number(prevstate.result) / Number(this.state.num2), 
                            numDisplay: '',
                            num1:this.state.num2,
                            num2:'' 
                        }
                    })
                    break
                case this.state.operator === 'x':
                    this.setState((prevstate) => {
                        return {
                            result: Number(prevstate.result) * Number(this.state.num2), 
                            numDisplay: '',
                            num1:this.state.num2,
                            num2:''
                        }
                    })
                    break

                default:
                    break
            }
        }
    } 
 
    // if num1 is not '' and operator is not '' setState for num2 to -
    handleNegative = () => {
        if(!(this.state.num1 === '') && this.state.operator === ''){
            this.setState((prevstate) => {
                return { num1: Number(prevstate.num1) * -1, numDisplay:Number(prevstate.num1) * -1 }
            })
        } else if (!(this.state.num2 === '')) {
            this.setState((prevstate) => {
                return { num2: Number(prevstate.num2) * -1, numDisplay:Number(prevstate.num2) * -1 }
            })
        }

    }
    
    handlePercent = () => {
        // case operator === '%' && this.state.num2 === '':
        //     this.setState(() => {
        //         return {result: Number(this.state.num1) / 100 , numDisplay: '' }
        //     })

        // case operator === '%' && this.state.result !== '':
        //     this.setState((prevstate) => {
        //         return {result: Number(prevstate.result) / 100, numDisplay: '' }
        //     })
        //     break
    }
    handleClear = () => {
        this.setState(() => {
            return {
                num1: '',
                num2: '',
                result: '',
                operator: '',
                numDisplay: ''
            }
        })
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {this.state.numDisplay} </p>
                <div className="answer-box">{this.state.result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.handleClear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={this.handleNegative}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.handleCalc}>%</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleNum}>7</button>
                    <button className="calc-button" onClick={this.handleNum}>8</button>
                    <button className="calc-button" onClick={this.handleNum}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleNum}>4</button>
                    <button className="calc-button" onClick={this.handleNum}>5</button>
                    <button className="calc-button" onClick={this.handleNum}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleNum}>1</button>
                    <button className="calc-button" onClick={this.handleNum}>2</button>
                    <button className="calc-button" onClick={this.handleNum}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.handleNum}>0</button>
                    <button className="calc-button" onClick={this.handleNum}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.handleCalc}>=</button>
                </div>
            </div>
        </div>
    )
}
}


export default Calculator