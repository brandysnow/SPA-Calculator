import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.settingInput = this.settingInput.bind(this);
  }

  settingInput = (event) => {
    event.persist();
    this.setState(() => ({
        ...this.state,
        value: this.state.value + event.target.value
    }));
  };

  settingAC = () => {
    this.setState(() => ({
        value: ""
    }));
  }

  settingPlusNeg = () => {
    this.setState(() => ({
        ...this.state,
        value: -1 * this.state.value
    }));
  }

  settingPercentage = () => {
    this.setState(() => ({
        ...this.state,
        value: this.state.value / 100
    }));
  }

  handleInput = () => {
    try {
      this.setState(() => ({
        ...this.state,
        value: String(eval(this.state.value))
    }));
    }catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className="display">{this.state.value}</div>
          <div className="inner-part">
            <div className="panel">
              <button onClick={this.settingAC.bind(this)} value="" className='button' >AC</button>
              <button onClick={this.settingPlusNeg.bind(this)} className='button' >+/-</button>
              <button onClick={this.settingPercentage.bind(this)} className='button' >%</button>
                <button onClick={this.settingInput} value="/" className='button' >/</button>
            </div>
            <div className="panel">
              <button onClick={this.settingInput} value="7" className='button'>7</button>
              <button onClick={this.settingInput} value="8" className='button'>8</button>
              <button onClick={this.settingInput} value="9" className='button'>9</button>
              <button onClick={this.settingInput} value="*" className='button'>*</button>
            </div>
            <div className="panel">
              <button onClick={this.settingInput} value="4" className='button'>4</button>
              <button onClick={this.settingInput} value="5" className='button'>5</button>
              <button onClick={this.settingInput} value="6" className='button'>6</button>
              <button onClick={this.settingInput} value="-" className='button' >-</button>
            </div>
            <div className="panel">
              <button onClick={this.settingInput} value="1" className='button'>1</button>
              <button onClick={this.settingInput} value="2" className='button'>2</button>
              <button onClick={this.settingInput} value="3" className='button'>3</button>
              <button onClick={this.settingInput} value="+" className='button'>+</button>
            </div>
            <div className="last-panel">
              <button onClick={this.settingInput} value="0" className='button'>0</button>
              <button onClick={this.settingInput} value="." className='button'>.</button>
              <button onClick={this.handleInput.bind(this)} className='button'>=</button>
            </div>      
        </div>
      </div>
    );
  }
}
