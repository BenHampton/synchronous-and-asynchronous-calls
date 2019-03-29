import React from 'react';

const FetchView = (props) => {
    return(
        <div>
            <div style={{color: 'white'}}>
                Press F12 and navigate to 'Console' to view the console.logs and show the Synchronous and Asynchronous calls
                being made by using FETCH
            </div>
            <br/>
            <br/>
            <button onClick={props.synchronousCall}>Synchronous Fetch Call</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={props.asynchronousCall}>Asynchronous Fetch Call</button>
        </div>
    )
};
export default FetchView;
