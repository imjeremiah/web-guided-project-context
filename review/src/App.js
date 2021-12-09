import React from 'react';

const App = ()=> {
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1/>
    </div>);
};

const SubComp1 = () => {
    return(<div className="component">
        <h2>SubComp1</h2>
        <SubComp2/>
    </div>)
}

const SubComp2 = () => {
    return(<div className="component">
        <h2>SubComp2</h2>
        <SubComp3/>
    </div>)
}

const SubComp3 = ()=> {
    return(<div className="component">
        <h2>SubComp3</h2>
    </div>);
}
export default App;