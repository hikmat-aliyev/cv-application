import { useState } from 'react';
import '../styles/Education.css'
import ExpandMoreSVG from '../assets/expan-more.svg';
import TrashIcon from '../assets/trash-icon.svg'


// eslint-disable-next-line react/prop-types
function Education ({educationArray, setEducationArray, school, setSchool, degree, setDegree, startDate, setStartDate, endDate, setEndDate, location, setLocation }) {
    const [expanded, setExpanded] = useState(false);
    const [addEducation, setAddEducation] = useState(false);
    const [saved, setSaved] = useState(false);
    const [edit, setEdit] = useState(false);
    const [index, setIndex] = useState('');

    const handleEducationButtonClick = () => {
        setAddEducation(!addEducation);
        const expandMoreImage = document.querySelector('.expand-more-image');
        expandMoreImage.classList.toggle('expanded');
    }

    function resetInputs() {
        setSchool('');
        setDegree('');
        setStartDate('');
        setEndDate('');
        setLocation('');
    }

    const handleAddEducationClick = () => {
        setAddEducation(false);
        setExpanded(true);
        resetInputs();
        setEdit(false);
    }

    const handleSaveClick = () => {
        setExpanded(false);
        setAddEducation(true);
        setSaved(true);
        if(!edit){
            const newEducationInfo = {
                school, degree, startDate, endDate, location
            }
            setEducationArray([...educationArray, newEducationInfo]);
        }else {
            const updatedEducationArray = [...educationArray];
            updatedEducationArray[index].school = school;
            updatedEducationArray[index].degree = degree;
            updatedEducationArray[index].startDate = startDate;
            updatedEducationArray[index].endDate = endDate;
            updatedEducationArray[index].location = location;
            setEducationArray(updatedEducationArray);
        }
        resetInputs();
    }

    const handleCancelClick = () => {
        setExpanded(false);
        setAddEducation(true);
    }

    const handleDeleteClick = (index) => {
        const updatedEducationArray = [...educationArray];
        updatedEducationArray.splice(index, 1);
        setEducationArray(updatedEducationArray);
        resetInputs();
    }

    const handleEditClick = (index) => {
        setAddEducation(false);
        setExpanded(true);
        setEdit(true);
        setIndex(index);

        setSchool(educationArray[index].school);
        setDegree(educationArray[index].degree);
        setStartDate(educationArray[index].startDate);
        setEndDate(educationArray[index].endDate);
        setLocation(educationArray[index].location);
    }

    return( 
        <div>

            <div className='education-container'>

                <button className='expand-education-button' onClick={handleEducationButtonClick}>
                    <h2> <img className='education-logo' src="https://rmathr.github.io/cv-project/462edf5f6d5ba03edebc.png" alt="" />
                        Education</h2>
                    <img className='expand-more-image' src={ExpandMoreSVG} alt="expand-more" />
                </button>

                {addEducation && saved ? educationArray.map((entry, index) => (
                <div className='education-name-delete' key={index}>
                    <button  onClick={() => handleEditClick(index)}>{entry.school}</button>
                    <img onClick={() => handleDeleteClick(index)} className='trash-icon' src={TrashIcon} alt="trash-icon"  />
                </div>
                )) : null}

               {addEducation ? <button onClick={handleAddEducationClick}>+ Education </button> : null}

                {!addEducation && expanded ? <div className='education-inputs-container'>
                    <div>
                        <label htmlFor="school">School</label>
                        <input type="text" name="school" 
                            id="school" value={school} placeholder = 'Enter School / University'
                            onChange = {(e) => setSchool(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="degree">Degree</label>
                        <input type="text" name="degree" 
                            id="degree" value={degree} placeholder = 'Enter Degree / Field of Study'
                            onChange = {(e) => setDegree(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="startDate">Start Date</label>
                        <input type="text" name="startDate" 
                            id="startDate" value={startDate} placeholder = 'Enter Start Date'
                            onChange = {(e) => setStartDate(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="endDate">End Date</label>
                        <input type="text" name="endDate" 
                            id="endDate" value={endDate} placeholder = 'Enter End Date'
                            onChange = {(e) => setEndDate(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" 
                            id="location" value={location} placeholder = 'Enter Location'
                            onChange = {(e) => setLocation(e.target.value)}/>
                    </div>
                </div> : null}

                <div>
                    {!addEducation && expanded ? <button onClick={handleSaveClick}>Save</button> : null}
                    {!addEducation && expanded ? <button onClick={handleCancelClick}>Cancel</button> : null}
                </div>

            </div>

        </div>
    ) 
}

export default Education;