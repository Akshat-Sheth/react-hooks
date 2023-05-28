// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Context from './components/Context';
import Effect from './components/Effect';
import UseState from './components/UseState';

export const UserContext = React.createContext()

function App() {

  return (
    <div className="App">
      <UserContext.Provider value={'user context value'} >
        <UseState />
        <Effect />
        <Context />
      </UserContext.Provider>
    </div>
  );
} 

export default App;
