import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

const Home = () => {
    const [chores, setChores] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/dashboard")
            .then((response) => {
                console.log(response.data)
                setChores(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="container">

            <div class="signup-section">
                <header>Welcome to Chore Tracker!</header>

                <div class="seperator">
                    <div class="line"></div>
                    <p>LIST</p>
                    <div class="line"></div>
                </div>

            </div>
            {/* Start Table */}
            <div className="chore_table">
                <table>
                    <tr>
                        <th>Job</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                    {chores.map((item) => {
                        return (
                            <tr key={item}>
                                <td>{item.title}</td>
                                <td>{item.location}</td>
                                <td>
                                    <button onClick={() => navigate(`/view/${item._id}`)}>Details</button> <br />
                                    <button onClick={() => navigate(`/edit/${item._id}`)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <div class="social-buttons">
                <button onClick={() => navigate('/addJob')}><i class="bx bxl-google"></i> Add Chore</button>
                <button><i class="bx bxl-google"></i> Logout</button>
            </div>
        </div>
    )
}

export default Home