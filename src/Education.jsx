import React, { useState } from 'react';
import './styles/Education.css'
import ExpandMoreSVG from './assets/expan-more.svg';


// eslint-disable-next-line react/prop-types
function Education ({school, setSchool, degree, setDegree, startDate, setStartDate, endDate, setEndDate, location, setLocation }) {
    const [expanded, setExpanded] = useState(false);
    const [addEducation, setAddEducation] = useState(false);

    const handleEducationButtonClick = () => {
        setAddEducation(!addEducation);
        const expandMoreImage = document.querySelector('.expand-more-image');
        expandMoreImage.classList.toggle('expanded');
    }

    const handleAddEducationClick = () => {
        setAddEducation(false);
        setExpanded(true);
    }

    const handleSaveClick = () => {
        setExpanded(false);
        setAddEducation(true);
    }

    const handleCancelClick = () => {
        setExpanded(false);
        setAddEducation(true);
    }

    const university = document.getElementById('school').value;

    return( 
        <div>

            <div className='education-container'>

                <button className='expand-education-button' onClick={handleEducationButtonClick}>
                    <h2> <img className='education-logo' src="https://rmathr.github.io/cv-project/462edf5f6d5ba03edebc.png" alt="" />
                        Education</h2>
                    <img className='expand-more-image' src={ExpandMoreSVG} alt="" />
                </button>

                <div>
                    <p>{university}</p>
                </div>

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