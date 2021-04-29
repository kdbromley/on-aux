import './Register.css';

export default function Register(props) {
    return (
      <div className='Register__container'>
          <h3>Register</h3>
        <form className='Register__form'
          onSubmit={(e) => props.onSubmitRegistration(e)}>
            <label htmlFor='username'>
                Username: 
                <input id='username' name='username' type='text' required />
            </label>
            <label htmlFor='pass'>
                Password: 
                <input id='pass' name='password' type='text'
                  minLength={8} required />
            </label>
            <label htmlFor='confirm-pass'>
                Confirm Password: 
                <input id='confirm-pass' name='password' type='text'
                  minLength={8} required />
            </label>

            <button type='submit'>Submit</button>
        </form>
      </div>
    )
}
