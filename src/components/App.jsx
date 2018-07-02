import React from 'react';
import { Button } from 'react-bootstrap';

export default class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="container-item">
                   <h1>Setup Inventory</h1>
                   <label htmlFor="format">
                        Format
                    <Button bsStyle="primary" bsSize="large" active>Primary</Button>
                    <Button bsStyle="success">Success</Button>
                    <Button bsStyle="info">Info</Button>
                    </label>
                </div>
                <div className="container-item">
                fghjkl
                </div>
            </div>
        );
    }
}
