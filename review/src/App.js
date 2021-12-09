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

    return(<div className="component">
        <h2>SubComp1</h2>
        <p>{`${person.name.title} ${person.name.first} ${person.name.last}`}
        <SubComp2 person={person} setPerson={setPerson}/> </p>
    </div>)
}

const SubComp2 = (props) => {
    const { person, setPerson } = props;

    const handleClick = ()=> {
        setPerson({
            ...person,
            location: {
                street: "222 N 22nd street",
                city: "Philadelphia",
                state: "PA"
            }
        });
    }
    return(<div className="component">
        <h2>SubComp2</h2>
        <button onClick={handleClick}>Change our location</button>
        <SubComp3 person={person} setPerson={setPerson}/>
    </div>)
}

const SubComp3 = (props)=> {
    const { person, setPerson } = props;

    return(<div className="component">
        <h2>SubComp3</h2>
        <button onClick={handleClick}>Change our Name</button>
        <p>{`${person.location.street} ${person.location.city}, ${person.location.state}`}</p>
    </div>);
}
export default App;