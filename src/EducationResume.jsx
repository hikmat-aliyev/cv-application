
function EducationResume () {
    return (
        <div className="general-info-resume">
            <h2>Education</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <p>{mail}</p>
                <p>{phoneNumber}</p>
                <p>{address}</p>
            </div>
        </div>
    )
}

export default EducationResume;