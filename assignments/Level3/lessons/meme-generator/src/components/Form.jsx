import React from 'react'
import './form.css'
import data from '../data'

function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImg: "http://i.imgflip.com/1bij.jpg"
    })

    function randomMeme(e) {
        e.preventDefault();
        const memeArray = data.data.memes;
        const randomNumber = Math.floor(Math.random() * (memeArray.length - 1));
        const url = memeArray[randomNumber].url;

        console.log(`[${randomNumber}]`, memeArray[randomNumber].url);


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
    )
}

export default Form