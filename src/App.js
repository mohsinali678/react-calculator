import React, { Component } from "react";
import './App.css';
import Input from "./Components/Input";
import Button from "./Components/Button";
import Operators from "./Components/Operators";
import Peripherals from "./Components/Peripherals";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "0",
      currentNumber: "0",
      previousNumber: "",
      operator: ""
    };
  }
  // Number with Commas


  // Add Value to Input
  addToInput = inputValue => {
    let { input } = this.state;
    input = input.replaceAll(",", "");
    if (input.length <= 9) {
      if (input.length !== 0) {
        let number = input + inputValue;
        if (number.length === 8) {
          this.setState({
            input: (Number(number).toExponential()),
            currentNumber: (Number(number))
          });
        } else {
          this.setState({
            input: (Number(number).toLocaleString().toString()),
            currentNumber: (Number(number))
          });
        }
      } else {
        this.setState({
          input: inputValue,
          currentNumber: inputValue
        });
      }
    } else {
      this.setState({
        input: "Out of bound",
      });
    }
  };

  //Add Decimal When there is no decimal point
  addDecimal = inputValue => {
    const { input } = this.state;
    if (input.toString().indexOf(".") === -1) {
      this.setState({ input: input + inputValue })
    }
  }

  // Add zero when input is not empty
  addZero = inputValue => {
    let { input } = this.state;
    input = input.replaceAll(",", "");
    if (input.length <= 9) {
    if (input.toString() === "0") {
      this.setState({ input })
    }else{
      let number = input + inputValue;
      this.setState({ input: (Number(number).toLocaleString().toString()), currentNumber: (Number(number)) })
    }
  }else{
    this.setState({
      input: "Out of bound",
    });
  }
  }

  //  Clear Current Input
  clearEntry = () => {
    this.setState({ input: "0", currentNumber: "0" })
  }

  //  Reset Everything
  allClear = () => {
    this.setState({
      input: "0",
      currentNumber: this.state.input.replaceAll(",", ""),
      previousNumber: "",
      operator: ""
    })
  }

  // Addition
  addition = () => {

    this.setState({
      previousNumber: this.state.input.replaceAll(",", ""),
      currentNumber: "",
      input: "",
      operator: "plus"
    })

  }

  // Subtraction
  subtraction = () => {
    this.setState({
      previousNumber: this.state.input.replaceAll(",", ""),
      input: "",
      operator: "subtract"
    })
  }

  // Multiplication
  multiplication = () => {
    this.setState({
      previousNumber: this.state.input.replaceAll(",", ""),
      input: "",
      operator: "multiply"
    })
  }

  // Division
  division = () => {
    this.setState({
      previousNumber: this.state.input.replaceAll(",", ""),
      input: "",
      operator: "divide"
    })
  }

  // Percentage
  percentage = () => {
    this.setState({
      input: (parseInt(this.state.input.replaceAll(",", "")) / 100),
    })
  }



  // Positive to Negative and vice versa
  signChanger = () => {
    if (this.state.input !== "0") {
      this.setState({
        input: parseInt(this.state.input) * -1
      })
    }
  }

  // Evalute Expression
  evaluate = () => {
    let { currentNumber, previousNumber, operator } = this.state;

    if (currentNumber.toString().length <= 10) {
      switch (true) {
        case operator === "plus":
          this.setState({
            input: (parseInt(previousNumber) + parseInt(currentNumber)).toLocaleString().toString(),
            currentNumber: parseInt(previousNumber) + parseInt(currentNumber)
          });
          break;
        case operator === "subtract":
          this.setState({
            input: (parseInt(previousNumber) - parseInt(currentNumber)).toLocaleString().toString(),
            currentNumber: parseInt(previousNumber) - parseInt(currentNumber)
          })
          break;
        case operator === "multiply":
          this.setState({
            input: (parseInt(previousNumber) * parseInt(currentNumber)).toLocaleString().toString(),
            currentNumber: parseInt(previousNumber) * parseInt(currentNumber)
          })
          break;
        case operator === "divide":
          this.setState({
            input: (parseInt(previousNumber) / parseInt(currentNumber)).toLocaleString().toString(),
            currentNumber: parseInt(previousNumber) / parseInt(currentNumber)
          })
          break;
        default:
          this.setState({ input: "NaN", currentNumber: "NaN" })
      }
    }else{
      this.setState({
        input: "Out of bound",
      });
    }
  }

  render() {
    const { input, currentNumber } = this.state;
    return (
      <div className="App">
        <div style={{ margin: "20px" }}>Project: <strong> React Calculator </strong> <br /><br /> Designed and Developed by:

          <strong>Hafiz Mohsin Ali</strong></div>

        <div className="calc-wrapper">

          <div className="row">
            <Input>{input}</Input>
          </div>

          <div className="row">

            {
              currentNumber === "0" ?
                <Peripherals handleClick={this.allClear}>AC</Peripherals>
                :
                <Peripherals handleClick={this.clearEntry}>CE</Peripherals>
            }

            <Peripherals handleClick={this.signChanger}>±</Peripherals>
            <Peripherals handleClick={this.percentage}>%</Peripherals>
            <Operators handleClick={this.division}>&#xf7;</Operators>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Operators handleClick={this.multiplication}>x</Operators>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Operators handleClick={this.subtraction}>-</Operators>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Operators handleClick={this.addition}>+</Operators>
          </div>

          <div className="row">
            <Button handleClick={this.addZero}>0</Button>
            <Button handleClick={this.addDecimal}>.</Button>
            <Operators handleClick={this.evaluate}>=</Operators>
          </div>


        </div>
      </div>
    )
  }
}

export default App;
