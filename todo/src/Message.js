import React, { Component } from "react";
import { ActionButton } from "./ActionButton";

export class Message extends Component {

    componentDidMount() {
        console.log("componentDidMount Message Component");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate Message Component");
    }

    render () {
        console.log(`Render Message Component`);
        return (
            <div>
                <ActionButton theme="primary" {...this.props}/>
                <div className="h5 text-center p-2">{this.props.message}</div>
            </div>
        )
    }
}