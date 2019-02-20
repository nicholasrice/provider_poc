import React, { Component, Children } from "react";

interface SpecifyProps {
    depth?: number,
    id?: number;
}

const SpecifyContext = React.createContext(0);


export class ProviderBase extends Component<SpecifyProps> {
    render() {
        const parentContext = this.props.depth || 0;
        return (
            <SpecifyContext.Provider value={parentContext + 1}>
                Depth: {parentContext}
                <br/>
                { this.props.children }
            </SpecifyContext.Provider>
        )
    }
}

export const SpecifyProvider: React.FC = (props) => {
    return (
        <SpecifyContext.Consumer>
            { (depth) => (
                <ProviderBase depth={depth}>
                    {props.children}
                </ProviderBase>
            )}
        </SpecifyContext.Consumer>
    )
};