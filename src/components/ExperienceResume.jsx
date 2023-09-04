import React from "react";
import '../styles/Resume.css'
// eslint-disable-next-line react/prop-types
function ExperienceResume({experienceArray}) {
    return(
        <div className="experience-resume-container">
            <h4>Experience</h4>
            {experienceArray.map((experienceInfo, index) => (
                <div className="experience-resume-details" key={index}>
                    <p>{experienceInfo.jobStartDate} - {experienceInfo.jobEndDate}</p>
                    <p className="company-name-paragraph">{experienceInfo.company}</p>
                    <p>{experienceInfo.jobLocation}</p>
                    <p>{experienceInfo.job}</p>
                    <p className="description-paragraph">{experienceInfo.description}</p>
                </div>
            ))}
        </div>
    )

}

export default ExperienceResume;