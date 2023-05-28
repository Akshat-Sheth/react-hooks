import React, { useState } from 'react'
import { useEffect } from 'react'

const Effect = () => {
    const [val,setVal] = useState(0)

    const tick = () => {
        setVal(val + 1)
    }

    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    },[val])


  return (
    <>
        <button>get data</button>
        {val}
    </>
  )
}

export default Effect