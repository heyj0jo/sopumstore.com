import React from 'react'

function Login(loged){
    return(
        <div className={!loged ? "login-container active" : "login-container"}>
            <div className='home-red-obj'></div>
            <div className='home-purple-obj'></div>
            <div className='home-green-obj'></div>
            
            <h1>Login</h1>
            <form className='login-inputs'>
                <label>ID<input type="text" /></label>
                <label>Password<input type="text" /></label>

                <button>Login</button>
            </form>
            
            
            <button id='join-btn'>Join</button>
            
            <div className='login-forgot'>
                <a href="#">forgot your password?</a>
                <a href="#">forgot your ID?</a>
            </div>
            <a href="/"><i class="fa-solid fa-house-chimney" /></a>
        </div>
    )
}

export default Login