import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circles: []
        };

        this.addCircle = this.addCircle.bind(this);
        this.renderCircles = this.renderCircles.bind(this);
    }

    addCircle(e) {
        const circles = this.state.circles.slice();
        const { offsetX, offsetY } = e.nativeEvent;
        circles.push({offsetX, offsetY});
        this.setState({
            circles
        });
    }

    renderCircles() {
        console.log(this.state.circles);
        return this.state.circles.map(function(circle, i) {
            return (
                <div className="circle" style={{left: circle.offsetX, top: circle.offsetY}} key={i} />
            )
        });
    }
    
    render() {
        return (
            <div className="App" onClick={this.addCircle}>
                {this.renderCircles()}
            </div>
        );
    }
}

export default App;
