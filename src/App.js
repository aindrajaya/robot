import React, {Component} from 'react';
import CardList from './CardList';
import {Robots} from './Robots';
import SearchBox from './SearchBox';

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
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) 
    }

    render(){
        const filteredRobots = this.state.Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>MrRobot</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList Robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;