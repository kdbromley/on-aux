import './Login.css';

export default function Login(props) {
    return (
      <div className='Login__container'>
          <h3>Login</h3>
        <form className='Login__form'
          onSubmit={(e) => props.onSubmitLogin(e)}>
            <label htmlFor='username'>
                Username: 
                <input id='username' name='username' type='text' />
            </label>
            <label htmlFor='password'>
                Password: 
                <input id='password' name='password' type='text'
                  minLength={8} required />
            </label>

            <button type='submit'>Submit</button>
        </form>
      </div>
    )
}

//pass entered email to verification, so email can be passed to Register component if email not recognized