import {React, useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Details = () => {
    const navigate = useNavigate ()
    const {id} = useParams ()
    const [chore, setChore] = useState({})

    useEffect (()=> {
        axios.get(`http://localhost:8000/api/view/${id}`)
            .then(response => {
                console.log(response)
                setChore(response.data)
            })
            .catch (error => {
                console.log(error)
            })
    },[])

    const handleDelete = (e) => {
        axios.delete(`http://localhost:8000/api/view/${id}`)
            .then(response => {
                console.log(response)
                navigate("/dashboard") 
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div class='details_container'>
            <div class="signup-section">
                <header>--{chore.title}--</header>
            </div>
            <div class="seperator">
                    <div class="line"></div>
                    <p>DETAILS</p>
                    <div class="line"></div>
            </div>
            <div>
                <p>Location: {chore.location}</p>
                <p>Description: {chore.description}</p>
            </div>

            <div class="social-buttons">
                <button onClick={handleDelete}><i class="bx bxl-google"></i> Finished Chore</button>
            </div>
            
            <div class="seperator">
                    <div class="line"></div>
                    <p>NAV</p>
                    <div class="line"></div>
            </div>
            
            <div class="social-buttons">
                    <button onClick={() => navigate('/dashboard')}><i class="bx bxl-google"></i> Home</button>
                    <button><i class="bx bxl-google"></i> Logout</button>
            </div>
        </div>
    )
}

export default Details