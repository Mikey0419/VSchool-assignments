import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const Context = createContext()

const ContextProvider = (props) => {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get("https://api.vschool.io/michaelhardin/thing")
            .then(res => {
                console.log(res.data)
                setList(res.data)
            })
    }, [])

    function addItem(itemTitle, desc, url) {

        const newItem = {
            title: itemTitle,
            description: desc,
            imgUrl: url
        }

        axios.post("https://api.vschool.io/michaelhardin/thing", newItem)
            .then(res => {
                console.log(res.data)
                setList(prev => [...prev, res.data])
            })
    }

    function deleteItem(itemId) {
        /* setList(
            list.filter(i => i._id !== itemId)
        ) */

        axios.delete(`https://api.vschool.io/michaelhardin/thing/${itemId}`)
            .then(res => {
                console.log(res.data)
                setList(list.filter(i => i._id !== itemId))
            })
    }

    function updateItem(itemId, index, itemTitle, desc, url) {

        const updatedItem = {
            title: itemTitle,
            description: desc,
            imgUrl: url
        }

        axios.put(`https://api.vschool.io/michaelhardin/thing/${itemId}`, updatedItem)
            .then(res => {
                console.log(res.data)
                let newArr = [...list]

                newArr[index].title = itemTitle;
                newArr[index].description = desc;
                newArr[index].imgUrl = url;

                setList(newArr);
            })
    }

    return(
        <Context.Provider
            value={{
                list,
                addItem,
                deleteItem,
                updateItem
            }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }