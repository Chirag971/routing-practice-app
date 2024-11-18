import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate;

  // start city state combo box 

  const stateMap = {
    gujarat: ['surat', 'ahemdabad', 'rajkot'],
    maharastra: ['pune', 'mumbai']
  }
  const [selectedState, setselectState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [City, setIsCity] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setselectState(state);
    setIsCity(stateMap[state] || []);
    setSelectedCity('')
  }

  // end city state combo box 

  // data validation 

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',

  })
  const [error, setError] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isVaild, setIsvalid] = useState(
    {
      name: false,
      email: false,
      password: false
    }
  )

  const [massage, setMassage] = useState("")

  // input change validation 

  const handleonChange = (e) => {

    

    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'name') {
      if (value.length < 6) {
        setError((prev) => ({ ...prev, name: 'Name must be at least 6 characters.' }));
        setIsvalid((prev) => ({ ...prev, name: false }));
      } else {
        setError((prev) => ({ ...prev, name: 'Valid Name' }));
        setIsvalid((prev) => ({ ...prev, name: true }));
      }
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
        setIsvalid((prev) => ({ ...prev, email: false }));
      } else {
        setError((prev) => ({ ...prev, email: 'Valid Email id' }));
        setIsvalid((prev) => ({ ...prev, email: true }));
      }
    }
    if (name === 'password') {
      if (value.length < 6) {
        setError((prev) => ({ ...prev, password: 'Name must be at least 6 characters.' }));
        setIsvalid((prev) => ({ ...prev, password: false }));
      } else {
        setError((prev) => ({ ...prev, password: 'Valid Name' }));
        setIsvalid((prev) => ({ ...prev, password: true }));
      }
    }

    // const value = e.target.value;
    // setUsername(value);

    // // Validate input length
    // if (value.length < 6) {
    //   setError('Please enter at least 6 characters.');
    //   setIsvalid(false)
    // } else {
    //   setError('Looks good!');
    //   setIsvalid(true)
    // }
  };
  // input change validation end 

  // submit form validation 
  const handleRegister = (e) => {

    // e.preventDefault();

    const { name, email } = userData


    if (name < 6) {
      setError((prev) => ({ ...prev, name: "plase enter data 6 char" }))
    }

    //local storege
    const users = JSON.parse(localStorage.getItem("users"))
    users.push({ name, email });
    localStorage.setItem("users", JSON.stringify(users));
    setMassage("data inserted ");

    setTimeout(() => navigate("/about"), 2000);


  };


  // submit form validation end 

  return (
    <center>
      <div style={{ margin: '20px' }}><h1>REGISTRATION FORM</h1></div>
      <div>
        <form onSubmit={handleRegister}>

          {/* username  */}
          USERNAME: <br />
          <input type='text' name='name' value={userData.name} onChange={handleonChange} style={{
            border: `1px solid ${isVaild.name ? 'green' : 'red'}`,
            padding: '8px',
            borderRadius: '4px',
          }}></input>
          <p style={{ color: isVaild.name ? 'green' : 'red' }}>{error.name}</p>

          {/* email  */}
          EMAIL: <br />
          <input type='text' name='email' value={userData.email} onChange={handleonChange} style={{
            border: `1px solid ${isVaild.email ? 'green' : 'red'}`,
            padding: '8px',
            borderRadius: '4px',
          }}></input>
          <p style={{ color: isVaild.email ? 'green' : 'red' }}>{error.email}</p>

          {/* password  */}
          password:
          <input type="text" name="password" id="" value={userData.password} onChange={handleonChange} style={{
            border: `1px solid ${isVaild.email ? 'green' : 'red'}`,
            padding: '8px',
            borderRadius: '4px',
          }} />
          <p style={{ color: isVaild.password ? 'green' : 'red' }}>{error.password}</p>

          {/* dropdown  */}

          {/* state  */}
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">please select state</option>
            {Object.keys(stateMap).map((state) => (
              <option key={state} value={state} >{state}</option>
            ))}
          </select>

          {/* city  */}
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">please select city</option>
            {City.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>


          <button type='submit'>Submit</button>
        </form>
      </div>
    </center>
  )
}

export default Signup