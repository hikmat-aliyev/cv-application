// eslint-disable-next-line react/prop-types
function Resume ({fullName, mail, phoneNumber}) {
    return (
        <div>
            <h1>{fullName}</h1>
            <p>{mail}</p>
            <p>{phoneNumber}</p>
        </div>

    )
}

export default Resume;