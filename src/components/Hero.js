import React from 'react'

const Hero = () => {
    return (
        <div className="bg-hero">
            <div className="hero container">
                <div className="hero-paragraph">
                    <h1>Lorem Ipsum is simply dummy text of the printing</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only
                        five centuries
                    </p>
                </div>
                <div className="hero-form">
                    <h2>Sign up for a free account</h2>
                    <form>
                        <div>
                            <input type="text" id="name" name="name"
                                   placeholder="Name"/>
                            <input type="text" id="surname" name="surname"
                                   placeholder="Surname"/>
                        </div>
                        <input type="text" placeholder="Enter Email" name="email"
                               required />
                            <input type="password" placeholder="Password"
                                   name="psw" required />
                            <button className="btn-primary">Register </button>
                    </form>
                </div>
            </div>
        </div>
)
}

export default Hero