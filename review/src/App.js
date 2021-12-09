import React, { useState, createContext, useContext } from 'react';
import data from './data';

const PersonContext = createContext();
console.log(PersonContext);

const App = ()=> {
    const [person, setPerson] = useState(data);

    return(
        <div className="App component">
            <h1>Main App</h1>
            <PersonContext.Provider value={{person, setPerson}}>
                <SubComp1/>
            </PersonContext.Provider>
        </div>);
};

const SubComp1 = () => {
    const { person } = useContext(PersonContext);

    return(<div className="component">
        <h2>SubComp1</h2>
        <p>{`${person.name.title} ${person.name.first} ${person.name.last}`}</p>
        <SubComp2/>
    </div>)
}

const SubComp2 = () => {
    const {person, setPerson} = useContext(PersonContext);

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

    const handleClick = ()=> {
        setPerson({
            ...person,
            name: {
                title: "Mx",
                first: "First",
                last: "Last"
            }
        });
    }

    return(<div className="component">
        <h2>SubComp3</h2>
        <button onClick={handleClick}>Change our Name</button>
        <p>{`${person.location.street} ${person.location.city}, ${person.location.state}`}</p>
    </div>);
}
export default App;