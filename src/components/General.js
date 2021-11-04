import { useState } from "react";
import PhoneImg from '../images/phone.svg';
import EmailImg from '../images/email.svg';
import GitHubImg from '../images/github.png';

function General({ editMode }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [github, setGithub] = useState('');

    // Preview Mode JSX
    const preview = (
        <div id="general">
            <div className="container">
                <div className="text-big">{name}</div>
                <div className="text">{surname}</div>
            </div>

            <div className="container">
                <div className="text-small text-with-icon">
                    <img hidden={phoneNumber.length < 1} className="icon" src={PhoneImg} alt="" />
                    {phoneNumber}
                </div>
                <div className="text-small text-with-icon">
                    <img hidden={email.length < 1} className="icon" src={EmailImg} alt="" />
                    {email}
                </div>
                <div className="text-small text-with-icon">
                    <img hidden={github.length < 1} className="icon" src={GitHubImg} alt="" />
                    {github}
                </div>
            </div>
        </div>
    );

    // Edit Mode JSX
    const edit = (
        <div id="general">
            <div className="container">
                <div className="input-wrap">
                    <label className="label">Name:</label>
                    <input
                        name="name"
                        value={name}
                        placeholder="Your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-wrap">
                    <label className="label">Surname:</label>

                    <input
                        name="surname"
                        value={surname}
                        placeholder="Your surname"
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
            </div>

            <div className="container">
                <div className="input-wrap">
                    <label className="label">Phone:</label>
                    <input
                        name="phone"
                        value={phoneNumber}
                        placeholder="Your phone number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="input-wrap">
                    <label className="label">Email:</label>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Your email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrap">
                    <label className="label">GitHub:</label>
                    <input
                        name="github"
                        value={github}
                        placeholder="Your GitHub username"
                        onChange={(e) => setGithub(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );

    return editMode ? edit : preview;
}

export default General;