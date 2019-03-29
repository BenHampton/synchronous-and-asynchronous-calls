import React, { Component } from 'react';
import FetchView from "./FetchView";

class FetchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            synchronousResponse: [],
            asynchronousResponse: [],
            asynchronousRequest: false
        };
        this.startSynchronousCall = this.startSynchronousCall.bind(this);
        this.getSynchronousFetch = this.getSynchronousFetch.bind(this);
        this.startAsynchronousCall = this.startAsynchronousCall.bind(this);
        this.getAsynchronousFetch = this.getAsynchronousFetch.bind(this);
    }

    async startSynchronousCall(){
        this.hideConsoleLogForAsynchronous();
        console.log('starting Synchronous fetch call');

        await this.getSynchronousFetch();
        console.log(this.state.synchronousResponse);

        console.log('ending Synchronous fetch call');
    }

    async getSynchronousFetch(){

        let response = await fetch('https://jsonplaceholder.typicode.com/users');

        let result = await response.json();
        this.setState({ synchronousResponse: result})

    };

    startAsynchronousCall(){
        this.setState({ asynchronousRequest: true });
        console.log('starting Asynchronous fetch call');

        this.getAsynchronousFetch();
        console.log(this.state.asynchronousResponse);

        console.log('ending Asynchronous fetch call');

        console.log(this.state.asynchronousResponse);
    }

    getAsynchronousFetch() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({ asynchronousResponse: json })
            })
    }
    hideConsoleLogForAsynchronous(){
        this.setState({ asynchronousRequest: false });
    }

    render() {

        if (this.state.asynchronousRequest){
            console.log(this.state.asynchronousResponse);
        }

        return (
            <FetchView synchronousCall={this.startSynchronousCall}
                       asynchronousCall={this.startAsynchronousCall}/>
        )
    }
}
export default FetchComponent;
