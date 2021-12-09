import React, { useReducer, createContext, useContext } from 'react';
import  { reducer, initialState} from './reducer';
import { setName, setLocation }  from './reducer';

const PersonContext = createContext();
const DogContext = createContext();

const App = ()=> {
    // const [person, setPerson] = useState(data);
    const [person, dispatch] = useReducer(reducer, initialState);

    return(
        <div className="App component">
            <h1>Main App</h1>
            <PersonContext.Provider value={{person, dispatch}}>
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
    const {dispatch} = useContext(PersonContext);

    const handleClick = ()=> {
        dispatch(setLocation({
            street: "222 N 22nd Street",
            city: "Philadelphia",
            state: "PA"
        }));
    }

    return(<div className="component">
        <h2>SubComp2</h2>
        <button onClick={handleClick}>Change our location</button>
        {/* <SubComp3 /> */}
    </div>)
}

const SubComp3 = ()=> {
    const { person, setPerson } = useContext(PersonContext);

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