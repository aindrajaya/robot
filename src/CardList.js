import React from 'react';
import Card from './Card';

const CardList = () => {
    return(
        <div>
            <Card id={Robots[0].id} name={Robots[0].name} email={Robots[0].email}/>
            <Card id={Robots[1].id} name={Robots[1].name} email={Robots[1].email}/>
            <Card id={Robots[2].id} name={Robots[2].name} email={Robots[2].email}/>
        </div>
    );
}