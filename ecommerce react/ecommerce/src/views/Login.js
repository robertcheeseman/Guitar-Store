import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

export default class Login extends Component {

  sendLoginInfo = async (event) => {
    event.preventDefault() 
    const response = await fetch('http://127.0.0.1:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value
      })
    })
    const data = await response.json()
    console.log(data)
  

    if (data.status === 'ok') {
      return this.props.logMeIn(data.data)
    }
  }

  render() {
    return (
      <div>
        <section className="vh-100">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                <form onSubmit={(event) => {this.sendLoginInfo(event)}}>
                <div className="card-body p-5 text-center">
                    <h3 className="mb-5" style={{color: 'black'}}>Client Login</h3>
                    <div className="form-outline mb-4">
                    <input type="text" id="username" name="username" className="form-control form-control-lg" placeholder='Username'/>
                    </div>
                    <div className="form-outline mb-4">
                    <input type="password" id="password" name="password" className="form-control form-control-lg" placeholder='Password'/>
                    </div>
                    <button className="btn btn-secondary btn-lg btn-block" type="submit">Login</button>
                </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
