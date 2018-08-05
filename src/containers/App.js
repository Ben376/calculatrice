import React, { Component } from 'react';
import logo from '../images/redux-logo.png';
import './App.css';

import { connect } from 'react-redux'

class App extends Component {

  render() {
    const style = { display: 'inline-block', color: 'grey', padding: '20px', margin: '5px'};

    return (

    <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculatrice</h1>
        </header>

    <div style={{border: '2px solid red', margin: 'auto', maxWidth: '250px', padding: '20px'}} >
          
          <h4> Pavé numérique : </h4>
            <div>

            {this.props.pad.map((num,i) =>
            <button 
            key={`pad ${i}`}
            style={style} 
            onClick={ () => this.props.select(num) } > {num} </button>
            )}

            </div>

            <button style={style} onClick={() => this.props.operation()} > = </button>
            <button style={style} onClick={() => this.props.delete()} > D </button>
            <button style={style} onClick={() => this.props.reset()} > C </button>

    </div>

    <h4>Calcul en cours : </h4>
    <input value={this.props.inputValue} />

    <div style={{border: '2px solid green', margin: '20px auto', maxWidth: '150px', padding: '20px'}} >
        
        <h4> Résultats : </h4>

        <div>{this.props.memoryCard.map((x,i)=>
        <div 
        key={`card ${i}`} >{x}<button onClick={ () => this.props.clear(x) } 
        style={{margin: '5px', padding:'5px', fontSize: '10px'}} >
        X
        </button>
        </div>
        )}
        </div>
    </div>

  </div>
    );
  }
}


const mapStateToProps = state => {

  return {

    pad: state.numPad,

    memoryCard: state.memory,

    inputValue: state.barValue,

  }
};

const mapDispatchToProps = dispatch => {

  return {

    select : (num) => dispatch ({type: 'ENTER_VALUE', numAction: num}),

    operation : () => dispatch ({type: 'OPERATION_EVAL'}),

    delete : () => dispatch ({type: 'DELETE_LAST'}),

    reset : () => dispatch ({type: 'RESET_ALL'}),

    clear : (x) => dispatch ({type: 'CLEAR_RESULTS', iAction: x}),

  }
};

export default connect (mapStateToProps, mapDispatchToProps)(App);
