import React, { Component } from 'react'

export default class Signup extends Component {

    sendSignUpInfo = async (event) => {
        event.preventDefault()
        if (event.target.password.value !== event.target.confirmPassword.value) {
            return
        }
        const response = await fetch('http://127.0.0.1:5000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password: event.target.password.value
            })
        })
        const data = await response.json()
        console.log(data)
    }

  render() {
    return (
      <div>
        <section className="vh-100">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100" >
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                        <div className="card-body p-5 text-center">
                            <h3 className="mb-5" style={{color: 'black'}}>Client Sign Up</h3>
                            <form onSubmit={(event) => {this.sendSignUpInfo(event)}}>
                                <div className="form-outline mb-4">
                                <input type="text" id="username" name="username" className="form-control form-control-lg" placeholder='Username'/>
                                </div>
                                <div className="form-outline mb-4">
                                <input type="email" id="email" name="email" className="form-control form-control-lg" placeholder='E-mail'/>
                                </div>
                                <div className="form-outline mb-4">
                                <input type="password" id="password" name="password" className="form-control form-control-lg" placeholder='Password'/>
                                </div>
                                <div className="form-outline mb-4">
                                <input type="password" id="confirmpassword" name="confirmPassword" className="form-control form-control-lg" placeholder='Confirm Password'/>
                                </div>
                                <button className="btn btn-secondary btn-lg btn-block" type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
