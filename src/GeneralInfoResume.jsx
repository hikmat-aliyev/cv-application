import './styles/GeneralInfoStyles.css'

// eslint-disable-next-line react/prop-types
function GeneralInfoResume ({fullName = 'hey', mail, phoneNumber, address}) {
    return (
        <div className="general-info-resume">
            <h2>{fullName}</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <p>{mail}</p>
                <p>{phoneNumber}</p>
                <p>{address}</p>
            </div>
        </div>
    )
}

export default GeneralInfoResume;