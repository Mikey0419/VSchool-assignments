import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Badge from './Badge'
import './App.css'

function App() {

  const [color, setColor] = useState("red")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthPlace: "",
    phone: "",
    favoriteFood: "",
    about: "",
  })

  const [badge, setBadge] = useState([
    {
      id: 0,
      first: "",
      last: "",
      email: "",
      birth: "",
      phone: "",
      food: "",
      about: ""
    }
  ])

function handleChange(e) {
  const {name, value} = e.target;

  setFormData(prev => (
    {
      ...prev,
      [name]: value
    }
  ))
}

function validatePhone(num) {
  let str = num;
  let regEx = /^[0-9]{10}$/g;
  let valid = str.match(regEx);

  return (valid === null) ? false : true;
}

function whichButton() {
  let button
  for(const item in formData) {
    button = `${formData[item]}` === "" ? (<button disabled>Submit</button>) : (<button>Submit</button>)
  }

  return button
}

const elButton = whichButton()

function handleSubmit(e) {
  e.preventDefault();

  const resetData = {
    firstName: "",
    lastName: "",
    email: "",
    birthPlace: "",
    phone: "",
    favoriteFood: "",
    about: "",
  }


  let isValid = validatePhone(formData.phone)

  if(isValid) {

    const newBadge = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      birthPlace: formData.birthPlace,
      phone: formData.phone,
      favoriteFood: formData.favoriteFood,
      about: formData.about,
      badgeColor: color
    }

    setBadge(prev => [...prev, newBadge])
    setFormData(resetData)

    myform.phone.placeholder = "Phone: 999999999"
    myform.firstName.focus()

    color === "red" ? setColor("blue") : setColor("red")

  } else {
    myform.phone.value = "";
    myform.phone.placeholder = "Please enter a valid phone number: 9999999999";
    myform.phone.focus()
  }
}

  return (
    <div>
      <form name="myform" className="container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Place of birth"
          name="birthPlace"
          value={formData.birthPlace}
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Phone: 999999999"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Favorite food"
          name="favoriteFood"
          value={formData.favoriteFood}
          onChange={handleChange}
        />
        <textarea 
          value={formData.about}
          placeholder="Tell us about yourself ..."
          onChange={handleChange}
          name="about"
        />
        {elButton}
      </form>
      {badge.map((item, index) => {
        if(index > 0) {
          return (
            <Badge item={item} key={index}/>
          )}
        })
      }
    </div>
  )
}

export default App
