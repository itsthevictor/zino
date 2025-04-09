import { Form, Link, redirect } from 'react-router-dom';

import { mainFetch } from '../utils/customFetch.js';
import { toast } from 'react-toastify';
import Logo from '../components/Logo.jsx';

export async function loginAction({ request }) {
  console.log('login action started');
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await mainFetch.post('/auth/login', data);
    toast.success('Signed in', { position: 'top-center' });
    return redirect('/');
  } catch (error) {
    toast.error(error?.response?.data?.msg, { position: 'top-center' });
    return error;
  }
}

const Login = () => {
  return (
    <div className='container'>
      <div className='form-container'>
        <Form method='post'>
          <h3>
            {' '}
            <Logo />
          </h3>

          <div className='input-item'>
            <label htmlFor='email'>email</label>
            <input type='email' id='email' name='email' />
          </div>
          <div className='input-item'>
            <label htmlFor='password'>Parola</label>
            <input
              type='password '
              id='password'
              // placeholder="parola"
              name='password'
            />
            <p>
              <Link to='reset-password'>Ai uitat parola?</Link>
            </p>
          </div>
          <button type='submit' className='submit-btn'>
            Continuă
          </button>
          <p>
            {' '}
            Nu ai cont? <Link to='/signup'>Înregistrează-te</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};
export default Login;
