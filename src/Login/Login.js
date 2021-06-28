import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import ValidationError from '../ValidationError';
import './Login.css';
import UsersContext from '../UsersContext';

export default function Login(props) {
  const [usernameVal, setUsernameVal] = useState('')
  const [passVal, setPassVal] = useState('');
  const [isUsernameTouched, setIsUserTouched] = useState('');
  const [isPassTouched, setIsPassTouched] = useState(false);

  const users = useContext(UsersContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { username, pass } = e.target;
    if (!username.value) {
      console.log('Username required')
    } else if (!pass.value) {
      console.log('Password required')
    }
    const promise = new Promise(function(resolve, reject) {
     const userResult = users.validateUser(username.value)
      resolve(userResult)
    })
      .then(user => {
        console.log(user)
        if(user.password !== pass.value) throw new Error(`Password incorrect`)
      })
      .then(() => {
        props.handleSubmitLogin(username.value, pass.value);
        props.history.push('/accounts/my-account');
      })
      .catch((err) => {
        console.error(err)
      });
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
                <input id='pass' name='password' type='password'
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