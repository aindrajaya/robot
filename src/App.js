import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    //it declares two states: robot and searchfield
    //all of the component in this app syntax that has state can use constructor function to use this.state
    constructor(){
        super()
        this.state = { //this states is what changes in an app
            Robots: [],
            searchfield: '' //searchfield is always empty
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({Robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) 
    }

    render(){
        const filteredRobots = this.state.Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.Robots.length === 0){
            return <h1>Loading...</h1>
        }else{
            return(
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
}

export default App;