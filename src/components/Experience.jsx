import { useState } from 'react';
import '../styles/Education.css'
import '../styles/Experience.css'
import ExpandMoreSVG from '../assets/expan-more.svg';
import TrashIcon from '../assets/trash-icon.svg'


// eslint-disable-next-line react/prop-types
function Experience ({experienceArray, setExperienceArray, company, setCompany, job, setJob, jobStartDate, setJobStartDate, jobEndDate, setJobEndDate, jobLocation, setJobLocation, description, setDescription }) {
    const [expanded, setExpanded] = useState(false);
    const [addExperience, setAddExperience] = useState(false);
    const [saved, setSaved] = useState(false);
    const [edit, setEdit] = useState(false);
    const [index, setIndex] = useState('');

    const handleEducationButtonClick = () => {
        setAddExperience(!addExperience);
        const expandMoreImage = document.querySelector('.expand-more-image-experience');
        expandMoreImage.classList.toggle('expanded');
    }

    function resetInputs() {
        setCompany('');
        setJob('');
        setJobStartDate('');
        setJobEndDate('');
        setJobLocation('');
        setDescription('');
    }

    const handleAddEducationClick = () => {
        setAddExperience(false);
        setExpanded(true);
        resetInputs();
        setEdit(false);
    }

    const handleSaveClick = () => {
        setExpanded(false);
        setAddExperience(true);
        setSaved(true);
        if(!edit){
            const newExperienceInfo = {
                company, job, jobStartDate, jobEndDate, jobLocation, description
            }
            setExperienceArray([...experienceArray, newExperienceInfo]);
        }else {
            const updatedExperienceArray= [...experienceArray];
            updatedExperienceArray[index].school = company;
            updatedExperienceArray[index].degree = job;
            updatedExperienceArray[index].startDate = jobStartDate;
            updatedExperienceArray[index].endDate = jobEndDate;
            updatedExperienceArray[index].location = jobLocation;
            updatedExperienceArray[index].description = description;
            setExperienceArray(updatedExperienceArray);
        }
        resetInputs();
    }

    const handleCancelClick = () => {
        setExpanded(false);
        setAddExperience(true);
    }

    const handleDeleteClick = (index) => {
        const updatedExperienceArray = [...experienceArray];
        updatedExperienceArray.splice(index, 1);
        setExperienceArray(updatedExperienceArray);
        resetInputs();
    }

    const handleEditClick = (index) => {
        setAddExperience(false);
        setExpanded(true);
        setEdit(true);
        setIndex(index);

        setCompany(experienceArray[index].company);
        setJob(experienceArray[index].job);
        setJobStartDate(experienceArray[index].jobStartDate);
        setJobEndDate(experienceArray[index].jobEndDate);
        setJobLocation(experienceArray[index].jobLocation);
        setDescription(experienceArray[index].description)
    }

    return( 
        <div>

            <div className='education-container'>

                <button className='expand-education-button' onClick={handleEducationButtonClick}>
                    <h2> <img className='education-logo' src="https://rmathr.github.io/cv-project/b5791876cc5188ae758a.png" alt="bag-pic" />
                        Experience</h2>
                    <img className='expand-more-image-experience' src={ExpandMoreSVG} alt="expand-more" />
                </button>

                {addExperience && saved ? experienceArray.map((entry, index) => (
                <div className='education-name-delete' key={index}>
                    <button  onClick={() => handleEditClick(index)}>{entry.company}</button>
                    <img onClick={() => handleDeleteClick(index)} className='trash-icon' src={TrashIcon} alt="trash-icon"  />
                </div>
                )) : null}

               {addExperience ? <button className='add-education-button' onClick={handleAddEducationClick}><h5>+Experience</h5> </button> : null}

                {!addExperience && expanded ? <div className='education-inputs-container'>
                    <div>
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" 
                            id="company" value={company} placeholder = 'Enter Company'
                            onChange = {(e) => setCompany(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="job">Job Title</label>
                        <input type="text" name="job" 
                            id="job" value={job} placeholder = 'Enter Job Title'
                            onChange = {(e) => setJob(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="jobStartDate">Start Date</label>
                        <input type="text" name="jobStartDate" 
                            id="jobStartDate" value={jobStartDate} placeholder = 'Enter Start Date'
                            onChange = {(e) => setJobStartDate(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="jobEndDate">End Date</label>
                        <input type="text" name="jobEndDate" 
                            id="jobEndDate" value={jobEndDate} placeholder = 'Enter End Date'
                            onChange = {(e) => setJobEndDate(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="jobLocation">Location</label>
                        <input type="text" name="jobLocation" 
                            id="jobLocation" value={jobLocation} placeholder = 'Enter Location'
                            onChange = {(e) => setJobLocation(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" 
                            id="description" value={description} placeholder = 'Enter Description'
                            onChange = {(e) => setDescription(e.target.value)}/>
                    </div>

                </div> : null}

                <div className='save-cancel-container'>
                    {!addExperience && expanded ? <button onClick={handleSaveClick}>Save</button> : null}
                    {!addExperience && expanded ? <button onClick={handleCancelClick}>Cancel</button> : null}
                </div>

            </div>

        </div>
    ) 
}

export default Experience;