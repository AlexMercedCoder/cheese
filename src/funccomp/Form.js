import React from "react"

const Form = (props) => {

  const [formData, setFormData] = React.useState({
    name: "",
    age: 0
  })

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    setFormData({
      name: "",
      age: 0
    })
  }

  return (<form onSubmit={handleSubmit}>
    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
    <input type="number" name="age" value={formData.age} onChange={handleChange}/>
    <input type="submit" value="submit"/>
    </form>)
}

export default Form