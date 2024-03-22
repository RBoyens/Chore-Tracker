import {React, useState, useEffect} from "react"
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"

const Update = () => {
    const navigate = useNavigate ()
    const {id} = useParams ()

    const [chore, setChore] = useState({
        title: "",
        description: "",
        location: ""
    })

    const [errors, setErrors] = useState({})

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/edit/${id}`)
            .then(response => {
                console.log (response.data)
                setChore(response.data)
            })
            .catch (error=>{
                console.log(error)
                setErrors(error.response.data.errors)
            })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault ()
        axios.put(`http://localhost:8000/api/edit/${id}`, chore)
            .then ((response)=> {
                console.log(response)
                navigate("/dashboard")
            })
            .catch(error => {
                console.log(error)
                setErrors(error.response.data.errors)
            })
    }

    const handleChange = (e) => {
        setChore({...chore, [e.target.name]: e.target.value})
    }

    return(
        <div class="container">

            <div class="signup-section">
                <header>Update Chore</header>

                <form onSubmit={handleSubmit}>
                    <input type="text" name='title' value={chore.title} onChange={handleChange} placeholder="Job"></input>
                    {errors.title&& <p>{errors.title.message}</p>}
                    
                    <input type="text" name='description' value={chore.description} onChange={handleChange} placeholder="Description"></input>
                    {errors.description&& <p>{errors.description.message}</p>}
                    
                    <input type="text" name='location' value={chore.location} onChange={handleChange} placeholder="Location"></input>
                    {errors.location&& <p>{errors.location.message}</p>}

                    <button type="submit" class="btn">Update</button>
                </form>

                <div class="seperator">
                    <div class="line"></div>
                    <p>Or</p>
                    <div class="line"></div>
                </div>
                
                <div class="social-buttons">
                    <button onClick={() => navigate('/dashboard')}><i class="bx bxl-google"></i> Back</button>
                    <button><i class="bx bxl-google"></i> Logout</button>
                </div>

            </div>
        </div>
        )
}

export default Update