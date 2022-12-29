import React from "react"
// note

function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    function handleChange(event) {
        const { name, value, type } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
        console.log(formData)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Successfully signed up")
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Join TimTim's newsletter</h2>
                <div className="form-inputs">
                    <input
                        type="text"
                        placeholder="First name"
                        className="form--input"
                        name="firstName"
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        className="form--input"
                        name="lastName"
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="form--input"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    );

}

export default Form;