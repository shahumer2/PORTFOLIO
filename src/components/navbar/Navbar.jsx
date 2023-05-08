import React from 'react'
import { Link } from "react-scroll"
import "./navbar.css"
function navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">UMER MUKHTAR</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 items">


                            <li class="nav-item">
                                <Link class="nav-link" to='Home'>Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to='Services'>Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='Experience'>Experience</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='Portfolio'>Portfolio </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='Testimonials'>Works </Link>
                            </li>


                        </ul>
                        <form class="d-flex" >

                            <Link class="nav-link" to='contact'>
                                <button class="btn btn-outline-warning" id='Contact'>CONTACT ME</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar
