import React, { useState } from 'react'

function Signup() {

  const stateMap = {
    gujarat:['surat','ahemdabad','rajkot'],
    maharastra:['pune','mumbai']
  }
  const [selectedState ,setselectState] = useState('');
  const [selectedCity , setSelectedCity] = useState('');
  const [City, setIsCity] = useState([]);

  const handleStateChange = (e) =>{
    const state = e.target.value;
    setselectState(state);
    setIsCity(stateMap[state] || []);
    setSelectedCity('')
  }

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
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

  const handleonChange = (e) => {

    const {name, value} = e.target;
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
    if(name === 'password')
    {

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

  return (
    <center>
      <div style={{margin:'20px'}}><h1>REGISTRATION FORM</h1></div>
    <div>
        <form>
          USERNAME: <br />
          <input type='text' name='name'  value={userData.name} onChange={handleonChange} style={{  border: `1px solid ${isVaild.name ? 'green' : 'red'}`,
            padding: '8px',
            borderRadius: '4px',}}></input>
           <p style={{color: isVaild.name ? 'green' : 'red'}}>{error.name}</p>
           EMAIL: <br />
           <input type='text' name='email'  value={userData.email} onChange={handleonChange} style={{  border: `1px solid ${isVaild.email ? 'green' : 'red'}`,
            padding: '8px',
            borderRadius: '4px',}}></input>
           <p style={{color: isVaild.email ? 'green' : 'red'}}>{error.email}</p>
           <select value={selectedState} onChange={handleStateChange}>
            <option value="">please select state</option>
            {Object.keys(stateMap).map((state)=>(
              <option key={state} value={state} >{state}</option>
            ))}
           </select>
           <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
  <option value="">please select city</option>
  {City.map((city) => (
    <option key={city} value={city}>{city}</option>
  ))}
</select>

        </form>
    </div>
    </center>
  )
}

export default Signup