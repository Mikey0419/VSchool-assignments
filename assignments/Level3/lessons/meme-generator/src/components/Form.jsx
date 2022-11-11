import './form.css'

function Form() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log(myform.first.value, myform.second.value);
        myform.first.value = ''; myform.second.value = '';
        myform.first.focus();
    }

    return(
        <form name="myform" onSubmit={handleSubmit} className="container">
            <div className="field-container">
                <input name="first" type="text" />
                <input name="second" type="text" />
            </div>
            <button id="meme-button" className="submit">Get a new meme image 🖼</button>
            <img className="meme-image" src="" />
        </form>
    )
}

export default Form