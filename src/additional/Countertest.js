import React , {useState} from 'react';

const Countertest = () => {
    const [count,setCount] = useState(0)
    
    const countUp = () =>{
        setCount(count+1);
    }

    const countDown = () =>{
        setCount(count-1);
    }
    return (
        <div className="container col-md-4 offset-md-4">
            <h6>Current value {count}</h6>
            <button className = "btn btn-success" onClick={countUp}>Count up</button>
            <button className = "btn btn-danger" onClick={countDown}>Count down</button>
        </div>
    );
}

export default Countertest;
