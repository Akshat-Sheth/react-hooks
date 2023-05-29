import React, {useState} from 'react'
import { useMemo } from 'react';

const Memo = () => {

    const [number,setNumber] = useState(0);
    const [theme,setTheme] = useState(false);


    const doubleNumber = useMemo(()=>{
        return slowFunction(number)
    },[number])

    function slowFunction() {
        console.log('calling slow function ..')
        for(let i=0;i<1000000000;i++){}
        return number * 2
    }

    function changeTheme() {
        console.log('calling change theme ..')
        setTheme(prev => !prev)
    }


  return (
    <div>
        <input type="number"  onChange={(e)=>{
            setNumber(e.target.value)
        }} />{doubleNumber}
        <button onClick={changeTheme} >Change theme</button>
        {
            theme ? 'true':'false'
        }
    </div>
  )
}

export default Memo