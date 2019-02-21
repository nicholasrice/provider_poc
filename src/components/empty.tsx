import React, {Component} from "react";
import "./empty.css"

export class Empty extends Component {
    render() {
        return (
            <div className={"empty"}>
                Empty Component
                <br/>
                { this.props.children }
            </div>
        )
    }
}