import React from 'react'
import './form.css'
import data from '../data'

function Form() {
    const [image, setImage] = React.useState("", []);

    function randomMeme(e) {
        e.preventDefault();
        const memeArray = data.data.memes;
        const randomNumber = Math.floor(Math.random() * (memeArray.length - 1));

        console.log(`[${randomNumber}]`, memeArray[randomNumber].url);
        setImage(memeArray[randomNumber].url);
    }

    return(
        <form onSubmit={randomMeme} name="myform" className="container">
            <div className="field-container">
                <input name="first" type="text" />
                <input name="second" type="text" />
            </div>
            <button id="meme-button" className="submit">Get a new meme image 🖼</button>
            <img className="meme-image" src={image} />
        </form>
    )
}

export default Form