import { useContext, useState } from 'react'
import { Context } from './context'
import './list.css'

const defaultImage = "https://i0.wp.com/shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png?w=1738&ssl=1";

function List(props) {
    
    const {list, addItem, deleteItem, updateItem} = useContext(Context)

    const [itemIndex, setItemIndex] = useState({
        i: 0,
        id: 0
    })

    const [formData, setFormData] = useState(
        {
            title: '',
            description: '',
            url: ''
        }
    )

    const [edit, setEdit] = useState(false)

    const el = list.map((item, index) => {
        return(
            <div className="item" key={index}>
                <p><b>{item.title}</b></p>
                <img width="250px" height="175px" src={item.imgUrl} />
                <p className="description"><i>{item.description}</i></p>
                <div className="button-row">
                    <button className='delete' onClick={() => {
                        deleteItem(item._id);
                        setEdit(false)
                        clearForm();
                    }}>Delete
                    </button>
                    <button className='edit' onClick={() => {
                        const whichItem = {
                            i: index,
                            id: item._id
                        }
                        setItemIndex(whichItem)

                        setFormData({
                            title: item.title,
                            description: item.description,
                            url: item.imgUrl
                        })
                        setEdit(true)
                    }
                    }>Edit</button>
                </div>
            </div>
        )
    })

    function clearForm() {
        let data = {
            title: '',
            description: '',
            url: ''
        }

        setFormData(data);
    }

    function handleChange(event) {
        event.preventDefault();

        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return(
        <div className="container">
            <div className="row">
                {el.length > 0 && el}
            </div>
            <br />
            <form className="form">
                <input
                    type="text"
                    placeholder="Title"
                    onChange={handleChange}
                    name="title"
                    value={formData.title}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    onChange={handleChange}
                    name="url"
                    value={formData.url}
                />
                <button
                    className="create"
                    onClick={(e) => {
                        
                        e.preventDefault();

                        if(edit === false) {
                            addItem(formData.title === '' ? 'Title' : formData.title, formData.description === '' ? 'Description' : formData.description, formData.url === '' ? defaultImage : formData.url);
                            clearForm();
                        } else {
                            console.log("Updated!");
                            updateItem(itemIndex.id, itemIndex.i, formData.title, formData.description, formData.url);
                            clearForm();
                            setEdit(false);
                        }
                    }}>
                        {edit ? "save" : "add"}
                </button>
            </form>
        </div>
    )
}

export default List