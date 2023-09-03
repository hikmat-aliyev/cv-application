import '../styles/PersonalInfoStyles.css'
import LocationSVG from '../assets/location.svg'

// eslint-disable-next-line react/prop-types
function PersonalInfoResume ({fullName = 'hey', mail, phoneNumber, address}) {
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

export default PersonalInfoResume;