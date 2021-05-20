import React, { Component } from 'react';
import { connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreator from '../../store/action/index'; 


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
                <button onClick={() => this.props.onStoreResult(this.props.ctr)} style={{width:"60px", height:"30px", color:"red", borderRadius:"5px", font:"bold" }}  >Store</button>
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
        ctr: state.ctr.counter,
        storeResult: state.res.result
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch(actionCreator.increment()),
        onDecrementCounter: () => dispatch(actionCreator.decrement()),
        onAdd: () => dispatch(actionCreator.onAdd(5)),
        onSub: () => dispatch(actionCreator.onSub(5)),
        onStoreResult: (result) => dispatch(actionCreator.onStoreResult(result)),
        onDeleteResult: (id) => dispatch(actionCreator.onDeleteResult(id))
    };
};

export default connect(mapStateToProps,mapDispatchToProps )(Counter);