import React from 'react';

const AjaxView = (props) => {
    return(
        <div>
            <div style={{color: 'white'}}>
                Press F12 and navigate to 'Console' to view the console.logs and show the Synchronous and Asynchronous calls
                being made by using Ajax
                <br/>
                <br/>
                <div>
                    -Ajax will show a warning when making a Synchronous call:
                </div>
                <div>
                    Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience
                </div>
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
export default AjaxView;
