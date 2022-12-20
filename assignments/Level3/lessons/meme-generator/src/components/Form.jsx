import React from 'react'
import Navbar from './Navbar'
import './form.css'

function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImg: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])
    const [savedMemes, setSavedMemes] = React.useState([{
        uuid: 0,
        topText: "",
        bottomText: "",
        memeImg: ""
    }])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function addMemeToList(topText, bottomText, url) {

        let tempID = Math.floor(Math.random() * 10)

        const tempMeme = {
            uuid: tempID,
            topText: topText,
            bottomText: bottomText,
            memeImg: url
        }

        setSavedMemes(prev => ({
            ...prev,
            tempMeme
        }))

        console.log(savedMemes)
    }

    function randomMeme(e) {
        e.preventDefault();
        const memeArray = [...allMemes]
        const randomNumber = Math.floor(Math.random() * (memeArray.length - 1));
        const url = memeArray[randomNumber].url;

        console.log(`[${randomNumber}] ${memeArray[randomNumber].url} <${memeArray[randomNumber].id}>`);


        setMeme(prev => ({
                ...prev,
                memeImg: url
            })
        )
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <div className="screen">
            <div className="sidebar"></div>
            <div className="meme-container">
                <Navbar />
                <form onSubmit={randomMeme} name="myform" className="container">
                    <div className="field-container">
                        <input
                            name="topText"
                            type="text"
                            value={meme.topText}
                            onChange={handleChange}
                        />
                        <input
                            name="bottomText"
                            type="text"
                            value={meme.bottomText}
                            onChange={handleChange}
                        />
                    </div>
                    <button id="meme-button" className="submit">Get a new meme image 🖼</button>
                    <div className="meme">
                        <img className="meme-image" src={meme.memeImg} />
                        <h2 className="meme--text top">{meme.topText}</h2>
                        <h2 className="meme--text bottom">{meme.bottomText}</h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form