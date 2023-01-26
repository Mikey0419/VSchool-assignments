import { useContext } from 'react'
import { Context } from './context'

function List(props) {
    
    const {list} = useContext(Context)

    console.log(list)

    return(
        <>
        </>
    )
}

export default List