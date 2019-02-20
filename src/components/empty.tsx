import React, {Component} from "react";

export class Empty extends Component {
    render() {
        return (
            <div>
                Empty Component
                <br/>
                { this.props.children }
            </div>
        )
    }
}