import React from 'react';
import Card from './Card';

const CardList = ({Robots}) => {
    return(
        <div>
            {
                Robots.map((i) => { //delete user which can call api
                    return (
                        <Card 
                            key={i} 
                            id={Robots[i].id} 
                            name={Robots[i].name} 
                            email={Robots[i].email}
                        />
                    );
                }) 
            }
        </div>
    );
}

export default CardList;