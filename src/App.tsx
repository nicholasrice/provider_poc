import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SpecifyProvider } from "./provider/Provider";
import { Empty } from "./components/empty";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpecifyProvider>
          <Empty>
            <SpecifyProvider>
              <Empty>
                <Empty>
                  <Empty>
                    <SpecifyProvider>
                      <Empty></Empty>
                    </SpecifyProvider>
                  </Empty>
                </Empty>
              </Empty>
            </SpecifyProvider>
          </Empty>
        </SpecifyProvider>
      </div>
    );
  }
}

export default App;
