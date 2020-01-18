import React from 'react';
import CardList from './CardList';
import {Robots} from './Robots';
import SearchBox from './SearchBox';

const App = () => {
    return(
        <div className='tc'>
            <h1>MrRobot</h1>
            <SearchBox />
            <CardList Robots={Robots}/>
        </div>
    );
}

export default App;