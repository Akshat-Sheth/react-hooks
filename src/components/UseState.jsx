import React, {useState} from 'react'

const UseState = () => {

    const [count, setCount] = useState(0)

    const plusOne = () => {
        setCount(count + 1)
    }

    const minusOne = () => {
        setCount(count - 1)
    }

    const plusFive = () => {
        setCount(count + 5)
    }

    const minusFive = () => {
        setCount(count - 5)
    }

  return (
    <div>
        <button onClick={plusOne}>+</button>
        <button onClick={plusFive} >+5</button>
        {count}
        <button onClick={minusFive}>-5</button>
        <button onClick={minusOne}>-</button>
    </div>
  )
}

export default UseState