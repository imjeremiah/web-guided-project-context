import React, { useState } from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson] = useState(data);

    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComp1 = (props) => {
    const { person, setPerson } = props;

    handleClick = ()=> {
        setPerson({
            ...person,
            
        });
    }

    return(<div className="component">
        <h2>SubComp1</h2>
        <p>{`${person.name.title} ${person.name.first} ${person.name.last}`}
        <button onClick={handleClick}>Change our location</button>
        <SubComp2 person={person}/> </p>
    </div>)
}

const SubComp2 = (props) => {
    const { person } = props;
    return(<div className="component">
        <h2>SubComp2</h2>
        <SubComp3 person={person}/>
    </div>)
}

const SubComp3 = (props)=> {
    const { person } = props;

    return(<div className="component">
        <h2>SubComp3</h2>
        <p>{`${person.location.street} ${person.location.city}, ${person.location.state}`}</p>
    </div>);
}
export default App;