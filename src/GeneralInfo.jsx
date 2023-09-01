import './styles/GeneralInfoStyles.css'

// eslint-disable-next-line react/prop-types
function GeneralInfo({ fullName, setFullName, mail, setMail, phoneNumber, setPhoneNumber, address, setAddress }) {
    
    return (
        <div className="general-info-input">
            <div>
                <h2>Personal Details</h2>
                <label htmlFor="fullName">Full name</label>
                <input type="text" name="fullName" 
                    id="fullName" value={fullName} placeholder = 'Enter your full name here'
                    onChange = {(e) => setFullName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="mail">Email</label>
                <input type="text" name="mail" 
                    id="mail" value={mail} placeholder = 'Enter your mail here'
                    onChange = {(e) => setMail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="mail">Phone Number</label>
                <input type="text" name="phoneNumber" 
                    id="phoneNumber" value={phoneNumber} placeholder = 'Enter your phone number here'
                    onChange = {(e) => setPhoneNumber(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="mail">Address</label>
                <input type="text" name="address" 
                    id="address" value={address} placeholder = 'Enter your address here'
                    onChange = {(e) => setAddress(e.target.value)}/>
            </div>
        </div>
    )
}

export default GeneralInfo