import React, { Component, Children } from "react";
import "./provider.css"

interface SpecifyProps {
    depth: number,
    id?: number;
}

const SpecifyContext = React.createContext<SpecifyProps>({depth: 0, id: undefined});


export class ProviderBase extends Component<SpecifyProps> {
    render() {
        const context: SpecifyProps = {
            depth: this.props.depth + 1,
            id: this.props.id ? this.props.id : this.generateId()
        };
        return (
            <SpecifyContext.Provider value={context}>
                <div className={"provider"}>
                    Depth: {context.depth} Id: {context.id}
                    <br/>
                    { this.props.children }
                </div>
            </SpecifyContext.Provider>
        )
    }

    private generateId(): number {
        return Math.round(Math.random() * 10000);
    }
}

export const SpecifyProvider: React.FC = (props) => {
    return (
        <SpecifyContext.Consumer>
            { (context) => (
                <ProviderBase {...context}>
                    {props.children}
                </ProviderBase>
            )}
        </SpecifyContext.Consumer>
    )
};