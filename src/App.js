import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Footer from "./components/Footer";
import rawArray from "./images.json";
import shuffle from 'shuffle-array'




class App extends React.Component{
    state = {
        players: [],
        score : 0,
        topScore: 0,
        correct: "",
        shake: ""
       

    };
    componentDidMount() {
        this.setState({ players: shuffle(this.clickedZero(rawArray), { copy: true }) })
    };
    clickedZero = (array) => array.map(function (item) {
            let o = Object.assign({},item)
            o.beenClicked = false 
            return o
    });
    handleClick = (player, index) => {
        console.log(player.beenClicked);
        if(player.beenClicked)
            this.reset();
        else
            this.increment(index);
    };
    increment = (i) => {
        let updatedPlayers = this.state.players.slice();
        updatedPlayers[i].beenClicked = true;
        let newScore = this.state.score + 1
        let topScore = newScore > this.state.topScore ? newScore : this.state.topScore;
        this.setState({
            players:  shuffle(updatedPlayers, {copy: true}),
            score: newScore,
            topScore,
            correct: "correct"
        });
        this.clearAnimation();
        
    };
    clearAnimation = () => {
        setTimeout(() => this.setState({correct:"", shake: ""}),500);
    };
    reset = () => {
        this.setState({
            players: this.clickedZero(this.state.players),
            score: 0,
            correct: "incorrect",
            shake: "shake"
        });
        this.clearAnimation();
    };
    render() {
        return (
            <div className="App">
                <Navbar score={this.state.score} topScore={this.state.topScore} indicator={this.state.correct}/>
                <Header/>
                <div className="playerContainer">
                    {this.state.players.map((info, i) => 
                    <Player 
                        indicator={this.state.shake}
                        key={info.id}
                        info={info}
                        index={i}
                        handleClick={this.handleClick}                        
                    />
                    )};
                </div>
                <Footer/>
            </div>
        );
    };
}

export default App;
