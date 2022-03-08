import classes from './Counter.module.css';
import { Component } from 'react';
import { useSelector, useDispatch} from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state=>state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  const incrementHandler = ()=>{
    dispatch({type:'increment'});
  }
  const increaseHandler = ()=>{
    dispatch( {type:'increase', amount: 5} )
  }
  const decrementHandler = ()=>{
    dispatch({type:'decrement'});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{

//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){}

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// //! This is used instead of useSelector Hook
// const mapStateToProp = (state)=>{
//   return{
//     counter: state.counter
//   }
// }

// //! This is used instead of useDispatch hook 
// const mapDispatchToProp =(dispatch)=>{
//   return {
//     increment: ()=> dispatch({type:'increment'}),
//     decrement: ()=> dispatch({type:'decrement'})
//   }
// }
// // ! we can also use connect in functional component but using useSelector and useDispatch hook is convinient 
// //! 
// export default connect(mapStateToProp, mapDispatchToProp)(Counter);
export default Counter;
