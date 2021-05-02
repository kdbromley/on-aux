import { Link } from 'react-router-dom';
import { useState } from 'react';
import ValidationError from '../ValidationError';
import './Login.css';

export default function Login(props) {
  const [usernameVal, setUsernameVal] = useState('')
  const [passVal, setPassVal] = useState('');
  const [isUsernameTouched, setIsUserTouched] = useState('');
  const [isPassTouched, setIsPassTouched] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    if (!username.value) {
      console.log('Username required')
    } else if (!password.value) {
      console.log('Password required')
    }
    //validation of if email exists => registration
    props.handleSubmit(username.value, password.value)
    props.history.push('/welcome')
  }

  const handleUpdateUsername = (username) => {
    setIsUserTouched(true);
    setUsernameVal(username);
}

  const handleUpdatePass = (pass) => {
      setIsPassTouched(true);
      setPassVal(pass);
  }

  const validateUsername = () => {
      const user = usernameVal.trim();
      const touched = isUsernameTouched;
      if (touched && (user.length === 0 || user === ' ')) {
          return 'Username is required'
      }
  }

  const validatePass = () => {
      const pass = passVal.trim();
      const touched = isPassTouched;
      if (touched === true && (pass.length === 0 || pass === ' ')) {
        return 'Password is required'
      }
  }

    return (
      <div className='Login__container'>
          <h3>Login</h3>
        <form className='Login__form'
          onSubmit={(e) => handleSubmitForm(e)}>
            <label htmlFor='username'>
                Username: 
                <input id='username' name='username' type='text' required
                 onChange={e => handleUpdateUsername(e.target.value)} />
            </label>
            <ValidationError message={validateUsername()} />
            <label htmlFor='password'>
                Password: 
                <input id='password' name='password' type='password'
                  minLength={8} required 
                  onChange={e => handleUpdatePass(e.target.value)} />
            </label>
            <ValidationError message={validatePass()} />

            <button type='submit'>Submit</button>
        </form>

        <Link to='/register'>Need to create an account? Register <span aria-hidden='true'>&#10239;</span></Link>
      </div>
    )
}

//pass entered email to verification, so email can be passed to Register component if email not recognized