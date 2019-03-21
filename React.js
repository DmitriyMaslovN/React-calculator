

class Buttons extends React.Component{

  render(){
    return(
        <React.Fragment>
        <div id="buttons-row">
          <button id="clear" className="btn btn-danger"
            onClick={this.props.handleClear} >AC</button>

          <button onClick={this.props.handleOperators} 
             className="btn btn-warning" 
            id="divide" value={`/`} >/</button>
          <button className="btn btn-warning"
            onClick={this.props.handleOperators} 
            id="multiply" value={`*`}>x</button>
        </div>
         <div id="buttons-row">
          <button onClick={this.props.handleValue}
            className="btn btn-primary"
            id="one" value={`1`}>1</button>
          <button onClick={this.props.handleValue}
            className="btn btn-primary"
            id="two" value={`2`}>2</button>
          <button onClick={this.props.handleValue}
            className="btn btn-primary"
            id="three" value={`3`}>3</button>
          <button onClick={this.props.handleOperators} 
            className="btn btn-warning"
            id="subtract" value={`-`}>-</button>
        </div>
         <div id="buttons-row">
          <button onClick={this.props.handleValue}
            className="btn btn-primary"
            id="four" value={`4`}>4</button>
          <button onClick={this.props.handleValue} 
            className="btn btn-primary"
            id="five" value={`5`}>5</button>
          <button onClick={this.props.handleValue}
            className="btn btn-primary"
            id="six" value={`6`}>6</button>
          <button onClick={this.props.handleOperators} 
               className="btn btn-warning" 
            id="add" value={`+`}>+</button>
        </div>
         <div id="buttons-row">
          <button onClick={this.props.handleValue} 
            className="btn btn-primary"
            id="seven" value={`7`}>7</button>
          <button onClick={this.props.handleValue} 
            className="btn btn-primary"
            id="eight" value={`8`}>8</button>
          <button onClick={this.props.handleValue} 
            className="btn btn-primary"
            id="nine" value={`9`}>9</button>
           
           <button onClick={this.props.handleEqual} 
            className="btn btn-warning"
            id="equals" value={`=`}>=</button>
        </div>
         <div id="buttons-row">
          <button onClick={this.props.handleValue} 
            className="btn btn-primary"
            id="zero" value={`0`}>0</button>
          <button onClick={this.props.handleDecimal} 
            className="btn btn-primary"
            id="decimal" value={"."}>.</button>
          
        </div>
       </React.Fragment>
    )
  }
  
}


class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      display: '0',
      prevValue: ''
    }
   
    this.handleClear = this.handleClear.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }
  
  handleValue(e){
   if(this.state.display == '0'){
     this.setState({
       display: e.target.value, 
     })
   }else{
      this.setState({
       display: this.state.display + e.target.value,
     })
   }
  }   
  handleOperators(e){
   
     this.setState({
       prevValue: e.target.value,
       display:  this.state.prevValue != e.target.value ? 
       this.state.display  + e.target.value : this.state.display
     })
    
  }
  handleDecimal(e){
    this.setState({
       prevValue: e.target.value,
       display: e.target.value != this.state.prevValue  ?
      this.state.display + e.target.value: this.state.display
     })
  }
  handleClear(){
    this.setState({
      display: '0',
      prevValue: ''
    })
  }
 
  handleEqual = () => {
    let rightEqual = this.state.display;
    rightEqual = rightEqual.replace(/[+*/-]*/g, 
    ops => ops.substring(ops.length - 1));
    
    const result = eval(rightEqual);
    this.setState({
      display: result,
      prevValue:  rightEqual  + ("=" + result)      
         }) // eval math function equal our expression
  }

  render(){
    return(
      <div id="app">
        <div className="wrapper">
         <div id="prev-value">{this.state.prevValue}</div>
          <div id="display">{this.state.display}</div>
          <Buttons 
            display={this.state.display}
            handleClear={this.handleClear}
            handleValue={this.handleValue}
            handleEqual={this.handleEqual}
            handleOperators={this.handleOperators}
            handleDecimal={this.handleDecimal}
            />
          </div> 
        </div>
      
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
