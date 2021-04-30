import './Login.css';

export default function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    if (!username.value) {
      console.log('Username required')
    } else if (!password.value) {
      console.log('Password required')
    }
    //validation of if email exists => registration
    props.onSubmitLogin(username.value, password.value)
    props.history.push('/welcome')
  }
    return (
      <div className='Login__container'>
          <h3>Login</h3>
        <form className='Login__form'
          onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='username'>
                Username: 
                <input id='username' name='username' type='text' />
            </label>
            <label htmlFor='password'>
                Password: 
                <input id='password' name='password' type='password'
                  minLength={8} required />
            </label>

            <button type='submit'>Submit</button>
        </form>
      </div>
    )
}

//pass entered email to verification, so email can be passed to Register component if email not recognized