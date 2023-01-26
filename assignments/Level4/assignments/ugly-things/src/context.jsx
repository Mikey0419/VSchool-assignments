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
    }, [list])

    function addItem(itemTitle, desc, url) {

        const newItem = {
            title: itemTitle,
            description: desc,
            imgUrl: url
        }


        axios.post("https://api.vschool.io/michaelhardin/thing", newItem)
            .then(res => {
                console.log(res.data)
                setList(prev => [...prev, newItem])
            })
    }

    function deleteItem(itemId) {
        axios.delete(`https://api.vschool.io/michaelhardin/thing/${itemId}`)
            .then(res => {
                console.log(res.data)
                setList(
                    list.filter(i => i.id === itemId)
                )
            })
    }

    return(
        <Context.Provider
            value={{
                list,
                addItem,
                deleteItem
            }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }