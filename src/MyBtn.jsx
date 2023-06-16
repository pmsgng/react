import React, { useState } from 'react';

const MyBtn = () => {
    const [count , setCount] = useState(0)

    function decrement() {
        setCount(count - 1)
    }
    function increment() {
        setCount(count + 1)
    }
    function refresh() {
        setCount(0)
    }

    return (
        <div>
            <div className="counter">
                
                <button onClick={decrement} className='counter__btn dec'>-</button>
                <button className='counter__text'>Clicked {count} times</button>
                <button onClick={increment} className='counter__btn inc'>+</button>
                <button className='counter__btn refresh' onClick={refresh}>🔄</button>
            </div>
        </div>
    );
};

export default MyBtn;