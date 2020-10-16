import React from 'react';

const newcomp = () => {

    const change=(e)=>{
          alert("clicked")
    }
    return (
        <div>
            <button onClick={change}>click</button>
        </div>
    );
};

export default newcomp;