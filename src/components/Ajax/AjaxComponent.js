import React, { Component } from 'react';
import jQuery from 'jquery';
import AjaxView from "./AjaxView";

class AjaxComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: 'https://jsonplaceholder.typicode.com/users'
        };
        this.startSynchronousCall = this.startSynchronousCall.bind(this);
        this.getSynchronousAjax = this.getSynchronousAjax.bind(this);
        this.startAsynchronousCall = this.startAsynchronousCall.bind(this);
        this.getAsynchronousAjax = this.getAsynchronousAjax.bind(this);
    }

    startSynchronousCall(){

        console.log('starting Synchronous Ajax call');

        this.getSynchronousAjax();

        console.log('ending Synchronous Ajax call');
    }

    getSynchronousAjax(){

        jQuery.ajax({
            url: this.state.url,
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {
                console.log(data);
                return data;
            },
            error: function( data, textStatus, jqXHR ) {
                console.log('error')
            }
        });

    };

    startAsynchronousCall(){

        console.log('starting Asynchronous Ajax call');

        this.getAsynchronousAjax();

        console.log('ending Asynchronous Ajax call');
    }

    getAsynchronousAjax() {

        jQuery.ajax({
            url: this.state.url,
            type: "GET",
            async: true,
            dataType: "json",
            success: function (data) {
                console.log(data)
            },
            error: function( data, textStatus, jqXHR ) {
                console.log('error')
            }
        });
    }

    render() {

        return (
            <AjaxView synchronousCall={this.startSynchronousCall}
                       asynchronousCall={this.startAsynchronousCall}/>
        )
    }
}
export default AjaxComponent;
