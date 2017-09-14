import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circles: [],
            textCont: '',
            textSize: '20',
            fontType: 'Avenir',
            color: '#ED6E46'
        };

        this.addCircle = this.addCircle.bind(this);
        this.renderCircles = this.renderCircles.bind(this);
        this.renderText = this.renderText.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.setTextSize = this.setTextSize.bind(this);
        this.setFontType = this.setFontType.bind(this);
        this.setColor = this.setColor.bind(this);
    }

    addCircle(e) {
        const circles = this.state.circles.slice();
        const { offsetX, offsetY } = e.nativeEvent;
        circles.push({offsetX, offsetY});
        this.setState({
            circles
        });
    }

    renderText(t, size, font, color) {
      return (
          <text x="50" y="300" fill={color} fontSize={size} fontFamily={font}>{t}</text>
      )
    }

    onInputChange(event) {
      this.setState({textCont: event.target.value})
    }

    setTextSize(event) {
      this.setState({textSize: event.target.value})
    }

    setFontType(event) {
      this.setState({fontType: event.target.value})
    }

    setColor(event) {
      this.setState({color: event.target.value})
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
              <p>Content: <input onChange={this.onInputChange} /></p>
              <p>Size: <input onChange={this.setTextSize} /></p>
              <p>Font: <input onChange={this.setFontType} /></p>
              <p>Color: <input onChange={this.setColor} /></p>
              <svg width="1000" height="1000">
                {this.renderText(this.state.textCont, this.state.textSize, this.state.fontType, this.state.color)}
              </svg>
            </div>
        );
    }
}

export default App;
