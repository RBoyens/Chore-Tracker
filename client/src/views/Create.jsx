import {React, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()

    const [chore, setChore] = useState({
        title: "",
        description: "",
        location: ""
    })

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addJob', chore)
            .then((response) => {
                console.log(response)
                navigate("/dashboard")
            })
            .catch((error) =>{
                console.log(error.response.data.errors)
                setErrors(error.response.data.errors)
            })
    }

    const handleChange = (e) => {
        setChore({...chore, [e.target.name]:e.target.value})
        if(e.target.name == 'title' && e.target.value.length <= 2){
            setErrors({...errors, [e.target.name]:""})
        }
        else {
            setErrors({...errors, [e.target.name]: ""})
        }
    }

    return(
    <div class="container">

        <div class="signup-section">
            <header>Add a Chore</header>

            <form onSubmit={handleSubmit}>
                <input type="text" name='title' value={chore.title} onChange={handleChange} placeholder="Job"></input>
                {errors.title&& <p>{errors.title.message}</p>}
                
                <input type="text" name='description' value={chore.description} onChange={handleChange} placeholder="Description"></input>
                {errors.description&& <p>{errors.description.message}</p>}
                
                <input type="text" name='location' value={chore.location} onChange={handleChange} placeholder="Location"></input>
                {errors.location&& <p>{errors.location.message}</p>}

                <button type="submit" class="btn">Create</button>
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

        {/* <div class="login-section">
            <header>Nav</header>

            <div class="social-buttons">
                <button><i class="bx bxl-google"></i> Use Google</button>
                <button><i class="bx bxl-google"></i> Use Apple</button>
            </div>

            <div class="seperator">
                <div class="line"></div>
                <p>Or</p>
                <div class="line"></div>
            </div>

            <form action="#">
                <input type="email" placeholder="Email Address" required></input>
                <input type="password" placeholder="Passowrd" required></input>
                <a href="#"> Forgot Password</a>
                <button type="submit" class="btn">Login</button>
            </form>
        </div> */}
    </div>
    )
}

export default Create