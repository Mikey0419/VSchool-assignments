import { useState, useEffect, createContext } from 'react'

const Context = createContext()

const ContextProvider = (props) => {

    const [list, setList] = useState([{
        title: "Test 1",
        description: "Test description",
        imgUrl: "https://www.example.com/img.jpeg"
    }])

    useEffect(() => {
        fetch("https://api.vschool.io/michaelhardin/thing")
            .then(res => res.json())
            .then(data => setList(data.data.memes))
    }, [])

    return(
        <Context.Provider
            value={{
                list
            }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }