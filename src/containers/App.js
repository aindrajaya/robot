import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {Robots} from '../components/Robots'; //using robot local

class App extends Component {
    //it declares two states: robot and searchfield
    //all of the component in this app syntax that has state can use constructor function to use this.state
    constructor(){
        super()
        this.state = { //this states is what changes in an app
            Robots: Robots,
            searchfield: '' //searchfield is always empty
        }
    }
    
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => this.setState({Robots: users}));
        this.setState({Robots: Robots})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) 
    }

    render(){
        const {Robots, searchfield} = this.state;
        const filteredRobots = Robots.filter(Robot => {
            return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !Robots.length ?
        <h1>Loading...</h1>:
        (
            <div className='tc'>
                 <h1 className='f1'>MrRobot</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList Robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;