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
    const [saved, setSaved] = React.useState([{
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

    function create_UUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });

        return uuid;
    }

    function addMemeToList(topText, bottomText, url) {

        let tempID = create_UUID();

        const tempMeme = {
            uuid: tempID,
            topText: topText,
            bottomText: bottomText,
            memeImg: url
        }

        setSaved(prev => [...prev, tempMeme])

        console.log(saved)
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
            <div className="sidebar">
                {saved.map((item, index) => {
                    if(index !== 0) {
                        return (
                            <img
                            style={{height: "100px", width: "300px", padding: "5px"}}
                            onClick={() => {
                                setMeme({
                                    topText: item.topText,
                                    bottomText: item.bottomText,
                                    memeImg: item.memeImg
                                })
                            
                                console.log(item.uuid)}
                            }
                            key={index}
                            src={item.memeImg}
                            />
                        )
                        }
                })}
            </div>
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
            <button
            className="saveButton"
            onClick={() => {
                addMemeToList(meme.topText, meme.bottomText, meme.memeImg)
            }}>
                Save
            </button>
        </div>
    )
}

export default Form