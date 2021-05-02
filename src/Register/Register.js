import { useState } from 'react';
import { Link } from 'react-router-dom'
import ValidationError from '../ValidationError';
import './Register.css';

export default function Register(props) {
    const [error, setError] = useState('')
    const [usernameVal, setUsernameVal] = useState('')
    const [passVal, setPassVal] = useState('');
    const [matchVal, setMatchVal] = useState('');
    const [isUsernameTouched, setIsUserTouched] = useState('');
    const [isPassTouched, setIsPassTouched] = useState(false);
    const [isMatchTouched, setIsMatchTouched] = useState(false);
  

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const { username, pass } = e.target;
        console.log(username.value, pass.value)
        if (!username.value || !pass.value) {
            setError('Username and Password are required');
        }
        props.history.push('/welcome')
        props.handleSubmitRegistration(username.value, pass.value);
    }

    const handleUpdateUsername = (username) => {
        setIsUserTouched(true);
        setUsernameVal(username);
    }

    const handleUpdatePass = (pass) => {
        setIsPassTouched(true);
        setPassVal(pass);
    }

    const handleUpdateMatch = (matchPass) => {
        setIsMatchTouched(true);
        setMatchVal(matchPass);
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
    const validateMatch = () => {
        const pass = passVal.trim();
        const matchPass = matchVal.trim();
        const touched = isMatchTouched;
        if (touched && (matchPass.length === 0 || matchPass === ' ')) {
            return 'Please confirm password'
        } else if (isMatchTouched && (pass !== matchPass)) {
            return 'Passwords do not match';
        } 
    }
    //validation of username ->  exists alert to login
    return (
      <div className='Register__container'>
          <h3>Register</h3>
        <form className='Register__form'
          onSubmit={e => handleSubmitForm(e)}>
              <ValidationError message={error} />
            <label htmlFor='username'>
                Username: 
                <input id='username' name='username' type='text' required 
                 onChange={e => handleUpdateUsername(e.target.value)} />
            </label>
            <ValidationError message={validateUsername()} />
            <label htmlFor='pass'>
                Password: 
                <input id='pass' name='password' type='password'
                  minLength={8} required 
                  onChange={e => handleUpdatePass(e.target.value)}/>
            </label>
             <ValidationError message={validatePass()} />
            <label htmlFor='confirm-pass'>
                Confirm Password: 
                <input id='confirm-pass' name='password' type='password'
                  minLength={8} required 
                  onChange={e => handleUpdateMatch(e.target.value)}/>
            </label>
                    <ValidationError message={validateMatch()} />

            <button type='submit'>Submit</button>
        </form>

        <Link to='/Login'>Already have an account? Login <span aria-hidden='true'>&#10239;</span></Link>
      </div>
    )
}
