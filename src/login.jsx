import react from 'react'
import './login.css'
const login = (props) => {
    const {
        email,
      setEmail,
      password,
      setPassword,
      handleLogin,
      handleSignUp,
      hasAccount,
      setHasAccount,
      emailError,
      passwordError
    }  = props

    return (
        <section className="login" >
                <div className="loginWrapper">

              <div className="loginRight">
                    <form className="loginBox"></form>
                        <input placeholder="Email" type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 className="loginInput"/>
                  <p className="errormessage">
                    {emailError}
                </p>
                        <input placeholder="password"
                         type="password"
                         required
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         required minLength="6"  className="loginPassword"/>
                           <p className="errormsg">{passwordError}</p>
                           <button className="btnContainer">
                  {hasAccount ? (
                      <>
                      <button onClick={handleLogin}>Sign in</button>
                      <p>don't have an account ? <span onClick={(e) => setHasAccount(!hasAccount)}> Sign up</span></p>
                      </>
                  ) : 
                      (
                        <>
                        <button onClick={handleSignUp}>Sign Up</button>
                        <p> have an account ? <span onClick={(e) => setHasAccount(!hasAccount)} >Sign in</span></p>
                        </>
                      )         
                  }

                </button>
              </div>
          </div>
        </section>
    )
}

export default login;