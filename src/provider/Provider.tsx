import React, { Component, Children } from "react";
import "./provider.css"

function generateId(length: number = 5): string {
    return `${Math.round(Math.random() * Math.pow(10, length))}`.padStart(length, "0");
}

class SheetManager {
    private _id = generateId();
    id() {
        return `Sheet Manager ${this._id}`;
    }
}

interface SpecifyProps {
    sheetManager: SheetManager
    depth: number,
    id?: string;
}

const SpecifyContext = React.createContext<SpecifyProps>({sheetManager: new SheetManager(), depth: 0, id: undefined});


export class ProviderBase extends Component<SpecifyProps> {
    render() {
        const currentContext = this.props;
        const context: SpecifyProps = {
            sheetManager: currentContext.sheetManager,
            depth: currentContext.depth + 1,
            id: currentContext.id ? (`${currentContext.id}-${generateId(2)}`) : generateId(5)
        };
        return (
            <SpecifyContext.Provider value={context}>
                <div className={"provider"}>
                    Depth: {context.depth} 
                    <br/>
                    Id: {context.id} 
                    <br/>
                    {context.sheetManager.id()}
                    <br/>
                    { this.props.children }
                </div>
            </SpecifyContext.Provider>
        )
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