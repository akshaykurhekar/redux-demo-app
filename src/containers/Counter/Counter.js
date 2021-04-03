import React, { Component } from 'react';
import { connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/action'; 

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter }  />
                <CounterControl label="Add 5" clicked={this.props.onAdd }  />
                <CounterControl label="Subtract 5" clicked={this.props.onSub}  />
                <hr/>
                <button onClick={this.props.onStoreResult} >Store</button>
                <ul>
                    {this.props.storeResult.map(strResult => {
                        // console.log(strResult.value)
                      return  <li key={strResult.id } onClick={() => this.props.onDeleteResult(strResult.id) }>{strResult.value} </li>   
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr: state.counter,
        storeResult: state.result
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch({type: actionType.Increment}),
        onDecrementCounter: () => dispatch({type: actionType.Decrement}),
        onAdd: () => { dispatch({type: actionType.Add , value:5 }) },
        onSub: () => dispatch({type: actionType.Sub, value:5}),
        onStoreResult: () => dispatch({type: actionType.Store_Result}),
        onDeleteResult: (id) => dispatch({type: actionType.Delete_Result ,resultId: id})
    };
};

export default connect(mapStateToProps,mapDispatchToProps )(Counter);