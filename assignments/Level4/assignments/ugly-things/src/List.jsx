import { useContext } from 'react'
import { Context } from './context'

function List(props) {
    
    const {list} = useContext(Context)
    console.log(list)

    return(
        <p>{list.title}</p>
    )
}

export default List