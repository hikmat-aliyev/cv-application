import React, { useState } from 'react';
import '../styles/App.css'
import PersonalInfo from './PersonalInfo'
import PersonalInfoResume from './PersonalInfoResume';
import Education from './Education';
import EducationResume from './EducationResume';
import Experience from './Experience';
import ExperienceResume from './ExperienceResume';

function App() {
  const [educationArray, setEducationArray] = useState([]);
  const [experienceArray, setExperienceArray] = useState([]);
  const [fullName, setFullName] = useState('');
  const [mail, setMail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('');

  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  const [company, setCompany] = useState('');
  const [job, setJob] = useState('');
  const [jobStartDate, setJobStartDate] = useState('');
  const [jobEndDate, setJobEndDate] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [description, setDescription] = useState('');


  return (
    <div className='container'>

      <div className='input-container'>
        <PersonalInfo fullName={fullName} setFullName ={setFullName} 
                      mail={mail} setMail={setMail}
                      phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                      address={address} setAddress ={setAddress} />
          
        <Education educationArray={educationArray} setEducationArray={setEducationArray} school={school} setSchool= {setSchool} degree={degree} setDegree={setDegree}
        startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} location={location} setLocation={setLocation} />

      <Experience experienceArray={experienceArray} setExperienceArray={setExperienceArray} company={company} setCompany= {setCompany} job={job} setJob={setJob}
              jobStartDate={jobStartDate} setJobStartDate={setJobStartDate} jobEndDate={jobEndDate} setJobEndDate={setJobEndDate} jobLocation={jobLocation} setJobLocation={setJobLocation} description={description} setDescription={setDescription} />
      </div>

      <div className='resume-container'>
        <PersonalInfoResume fullName={fullName} mail ={mail} phoneNumber={phoneNumber} address={address}/>
        <EducationResume educationArray={educationArray}/>
        <ExperienceResume experienceArray={experienceArray}/>
      </div>

    </div>
  )
}

export default App;