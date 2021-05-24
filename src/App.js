//import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import fire from './fire';
import Login from './login'
import Welcome from './welcome'
function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
   const handleLogin = () => {
     fire
     .auth()
     .signInWithEmailAndPassword(email, password)
     .catch((err) => {
       switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled": 
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message)
          break;

       }
     });
   };

   const handleSignUp = () => {
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
       case "auth/email-already-in-use":
       case "auth/invalid-email":
         setEmailError(err.message);
         break;
       case "auth/wrong-password":
         setPasswordError(err.message)
         break;

      }
    });
  };
  const handleLogout = () => {
    fire
    .auth()
    .signOut()
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        setUser(user)
      }
      else {
        setUser('')
      }
    });
  };

  useEffect(() => {
    authListener();
  },[])

  return (
    <div className="App">
      { user ? (
        <Welcome handleLogout={handleLogout}/>
      ) :
      (
        <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        
        />
      )}
     
      
    </div>
  );
}

export default App;
