import React, {useState} from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Ref = () => {

    const [name, setName] = useState('')
    const renderCount = useRef(1)

    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })

  return (
    <div>
        <input type="text"  onChange={(e)=>{
            setName(e.target.value)
        }} />
        <p>my name - {name}</p>
        <div>i rendered my conponent {renderCount.current} times</div>
    </div>
  )
}

export default Ref