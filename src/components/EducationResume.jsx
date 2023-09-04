import React from "react";
import '../styles/Resume.css'
// eslint-disable-next-line react/prop-types
function EducationResume({educationArray}) {
    return(
        <div className="education-resume-container">
            <h4>Education</h4>
            {educationArray.map((educationInfo, index) => (
                <div className="education-resume-details" key={index}>
                    <p>{educationInfo.startDate} - {educationInfo.endDate}</p>
                    <p className="school-name-paragraph">{educationInfo.school}</p>
                    <p>{educationInfo.location}</p>
                    <p>{educationInfo.degree}</p>
                </div>
            ))}
        </div>
    )

}

export default EducationResume;