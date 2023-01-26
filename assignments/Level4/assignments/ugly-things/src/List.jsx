import { useContext } from 'react'
import { Context } from './context'
import './list.css'

const testImg = 'https://media.istockphoto.com/id/479669772/photo/small-town-lights.webp?s=2048x2048&w=is&k=20&c=PDn3jq5Qh6SOhmVybmesNDOiX1YbF0Vm2JQEmgHF6Mo='

function List(props) {
    
    const {list, addItem, deleteItem} = useContext(Context)

    const el = list.map((item, index) => {
        return(
            <div key={index}>
                <p><b>{item.title}</b></p>
                <p><i>{item.description}</i></p>
                {item._id && <button onClick={() => deleteItem(item._id)}>Delete</button>}
                <img width="175px" height="175px" src={item.imgUrl} />
            </div>
        )
    })

    return(
        <>
            {el}
            <button onClick={() => addItem('test', 'test test test', testImg)}>Add</button>
        </>
    )
}

export default List