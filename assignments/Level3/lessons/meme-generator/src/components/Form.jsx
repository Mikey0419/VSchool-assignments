import './form.css'

function Form() {
    return(
        <div className="container">
            <div className="field-container">
                <input type="text" />
                <input type="text" />
            </div>
            <button className="submit">Get a new meme image 🖼</button>
            <img className="meme-image" src="" />
        </div>
    )
}

export default Form