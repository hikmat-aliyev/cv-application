import { useState } from 'react'
import '../styles/App.css'
import PersonalInfo from './PersonalInfo'
import PersonalInfoResume from './PersonalInfoResume';
import Education from './Education';
import EducationResume from './EducationResume';

function App() {
  const [educationArray, setEducationArray] = useState([]);
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
        <PersonalInfo fullName={fullName} setFullName ={setFullName} 
                      mail={mail} setMail={setMail}
                      phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                      address={address} setAddress ={setAddress} />
          
        <Education educationArray={educationArray} setEducationArray={setEducationArray} school={school} setSchool= {setSchool} degree={degree} setDegree={setDegree}
        startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} location={location} setLocation={setLocation} />
      </div>

      <div className='resume-container'>
        <PersonalInfoResume fullName={fullName} mail ={mail} phoneNumber={phoneNumber} address={address}/>
        <EducationResume educationArray={educationArray}/>
      </div>

    </div>
  )
}

export default App;