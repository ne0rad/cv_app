import { useState } from "react";
import PhoneImg from '../images/phone.svg';
import EmailImg from '../images/email.svg';
import GitHubImg from '../images/github.png';

function General({ editMode }) {
    const [name, setName] = useState('Michael');
    const [surname, setSurname] = useState('Jackson');
    const [phoneNumber, setPhoneNumber] = useState('+44 757 1234 123');
    const [email, setEmail] = useState('michael@jackson.com');
    const [github, setGithub] = useState('mich4el');

    const preview = (
        <div id="general">
            <div className="container">
                <div className="text-big">{name}</div>
                <div className="text">{surname}</div>
            </div>

            <div className="container">
                <div className="text-small text-with-icon">
                    <img className="icon" src={PhoneImg} alt="" />
                    {phoneNumber}
                </div>
                <div className="text-small text-with-icon">
                    <img className="icon" src={EmailImg} alt="" />
                    {email}
                </div>
                <div className="text-small text-with-icon">
                    <img className="icon" src={GitHubImg} alt="" />
                    {github}
                </div>
            </div>

            <div className="container">
                <img className="profile-photo" src="https://placeholder.pics/svg/140x140/DEDEDE/555555/" alt="" />
            </div>
        </div>
    );

    const edit = (
        <div id="general">
            <div className="container">
                <div className="input-wrap">
                    <label for="name" className="label">Name:</label>
                    <input
                        name="name"
                        value={name}
                        placeholder="Your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-wrap">
                    <label for="surname" className="label">Surname:</label>

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
                    <label for="phone" className="label">Phone:</label>
                    <input
                        name="phone"
                        value={phoneNumber}
                        placeholder="Your phone number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="input-wrap">
                    <label for="email" className="label">Email:</label>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Your email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrap">
                    <label for="github" className="label">GitHub:</label>
                    <input
                        name="github"
                        type="text"
                        value={github}
                        placeholder="Your GitHub username"
                        onChange={(e) => setGithub(e.target.value)}
                    />
                </div>
            </div>

            <div className="container">
                <img className="profile-photo" src="https://placeholder.pics/svg/140x140/DEDEDE/555555/" alt="" />
            </div>
        </div>
    );

    return editMode ? edit : preview;
}

export default General;