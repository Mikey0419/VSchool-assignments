import { useContext, useState } from 'react'
import { Context } from './context'
import './list.css'

const defaultImage = "https://i0.wp.com/shahpourpouyan.com/wp-content/uploads/2018/10/orionthemes-placeholder-image-1.png?w=1738&ssl=1";

function List(props) {
    
    const {list, addItem, deleteItem} = useContext(Context)

    const [formData, setFormData] = useState(
        {
            title: '',
            description: '',
            url: ''
        }
    )

    const el = list.map((item, index) => {
        return(
            <div key={index}>
                <p><b>{item.title}</b></p>
                <p><i>{item.description}</i></p>
                <p><u>{item._id}</u></p>
                <img width="250px" height="175px" src={item.imgUrl} />
                <br />
                <button className='delete' onClick={() => deleteItem(item._id)}>Delete</button>
            </div>
        )
    })

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

    function clearForm() {
        let data = {
            title: '',
            description: '',
            url: ''
        }

        setFormData(data);
    }

    return(
        <>
            {el.length > 0 && el}
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
                        addItem(formData.title === '' ? 'Title' : formData.title, formData.description === '' ? 'Description' : formData.description, formData.url === '' ? defaultImage : formData.url);
                        clearForm();
                    }}>
                        Add
                </button>
            </form>
        </>
    )
}

export default List