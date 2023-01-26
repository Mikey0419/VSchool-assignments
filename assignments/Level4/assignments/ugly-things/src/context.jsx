import { useState, useEffect, createContext } from 'react'

const Context = createContext()

const ContextProvider = (props) => {

    const [list, setList] = useState([
        {
            title: "Test 1",
            description: "Test description 1",
            imgUrl: "https://www.example.com/img1.jpeg"
        },
        {
            title: "Test 2",
            description: "Test description 2",
            imgUrl: "https://www.example.com/img2.jpeg"
        }
    ])

    useEffect(() => {
        fetch("https://api.vschool.io/michaelhardin/thing")
            .then(res => res.json())
            .then(data => setList(data.data))
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