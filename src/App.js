// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Context from './components/Context';
import Effect from './components/Effect';
import Memo from './components/Memo';
import UseState from './components/UseState';

export const UserContext = React.createContext()

function App() {

  return (
    <div className="App">
      <UserContext.Provider value={'user context value'} >
        {/* <UseState />
        <Effect />
        <Context /> */}
        <Memo />
      </UserContext.Provider>
    </div>
  );
} 

export default App;
