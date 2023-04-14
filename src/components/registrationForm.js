import React, {useState} from 'react';
import './style.css'


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber:'',
    password: '',
    confirmPassword: '',
    dob: '',
    gender:'',
    country:'',
    state:'',
    city:'',
    address:'',
    qualification:'',
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber:'',
    password: '',
    confirmPassword: '',
    dob: '',
    gender:'',
    country:'',
    state:'',
    city:'',
    address:'',
    qualification:'',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.firstname) {
      newErrors.firstname = 'firstname is required';
      isValid = false;
    }

    if (!formData.lastname) {
        newErrors.lastname = 'lastname is required';
        isValid = false;
      }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phoneNumber) {
        newErrors.phoneNumber = 'Phone Number is required';
        isValid = false;
      } else if (!/^(\+?\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Phone Number is invalid';
        isValid = false;
      }
  

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Confirm Password must match Password';
      isValid = false;
    }

    if (!formData.dob) {
        newErrors.dob = 'Date of Birth is required';
        isValid = false;
      }

    setErrors(newErrors);

    // If form data is valid, submit the form
    if (isValid) {
      console.log('Form is valid:', formData);
      // Reset form data
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber:'',
        password: '',
        confirmPassword: '',
        dob: '',
        gender:'',
        country:'',
        state:'',
        city:'',
        address:'',
        qualification:'',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">First name:</label>
        <input
        className='form__label'
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        <div>
        <label htmlFor="lastname">Last name:</label>
        <input
        className='form__label'
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        <div className="error">{errors.lastname}</div>
      </div>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
         className='form__label'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="error">{errors.email}</div>
      </div>
      <div>
        
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
         className='form__label'
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        </div>
      <div>
        
        <label htmlFor="password">Password:</label>
        <input
        className='form__label'
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="error">{errors.password}</div>
      </div>
      <div>
        
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
        className='form__label'
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className="error">{errors.confirmPassword}</div>
        
        <label htmlFor="dob">Date of Birth</label>
        <input
        className='form__label'
          type="date"
          id="dob"
          name="dob"
          value={formData.username}
          onChange={handleChange}
        />
        <div className="error">{errors.dob}</div>

        
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
