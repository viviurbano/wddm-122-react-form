import { useState } from 'react';
import './app.css';
import FormInput from './components/FormInput';
import Header from './components/Header';

const App = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username should contain min-3 | max-16 characters and shouldn't include any special character",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Please, enter a valid email',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should contain min-3 | max-16 characters and do not include any special character',
      label: 'Password',
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Passwords do not match',
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = e => {
    e.preventDefault();
  };

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {/* <h1>Register</h1> */}
        <Header></Header>

        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="formStyle">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
