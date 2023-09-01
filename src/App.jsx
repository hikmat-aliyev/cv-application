import { useState } from 'react'
import './styles/App.css'
import GeneralInfo from './GeneralInfo'
import GeneralInfoResume from './GeneralInfoResume';
import Education from './Education';

function App() {
  const [fullName, setFullName] = useState('');
  const [mail, setMail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className='container'>
      <div className='input-container'>
        <GeneralInfo fullName={fullName} setFullName ={setFullName} 
                      mail={mail} setMail={setMail}
                      phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                      address={address} setAddress ={setAddress} />
          
        <Education school={school} setSchool= {setSchool} degree={degree} setDegree={setDegree}
        startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} location={location} setLocation={setLocation} />
      </div>

      <div className='resume-container'>
        <GeneralInfoResume fullName={fullName} mail ={mail} phoneNumber={phoneNumber} address={address}/>
      </div>

    </div>
  )
}

export default App
