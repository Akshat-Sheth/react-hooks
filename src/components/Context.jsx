import React, {useContext} from 'react'
import { UserContext } from '../App'

const Context = () => {

    const user = useContext(UserContext)

  return (
    <>
        <div>{user}</div>
    </>
  )
}

export default Context