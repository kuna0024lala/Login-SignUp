import { useState, useEffect } from "react";
import "./LoginSignup.css";

export const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        const savedFormData = localStorage.getItem("formData");
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); //check value of formData
        localStorage.setItem("formData", JSON.stringify(formData));
        alert(`${action} successful!`);
        setFormData({
            username:"",
            email:"",
            password:""
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="header">
                        <div className="text">{action}</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        {action === "Login" ? (
                            <div></div>
                        ) : (
                            <div className="input">
                                <img src="person.png" alt="" />
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="input">
                            <img src="email.png" alt="" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Id"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input">
                            <img src="password.png" alt="" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    {action === "Sign Up" ? (
                        <div></div>
                    ) : (
                        <div className="forgot-password">
                            Forgot Password? <span>Click Here</span>
                        </div>
                    )}
                    <div className="submit-container">
                        <button
                            type="submit"
                            className={action === "Login" ? "submit gray" : "submit"}
                            onClick={() => setAction("Sign Up")}
                        >
                            Sign Up
                        </button>
                        <button
                            type="submit"
                            className={action === "Sign Up" ? "submit gray" : "submit"}
                            onClick={() => setAction("Login")}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};
