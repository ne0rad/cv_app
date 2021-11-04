import { useState } from "react";

function ExperienceItem({ editMode, id, removeItem }) {
    const [place, setPlace] = useState('');
    const [yearStart, setYearStart] = useState('');
    const [yearEnd, setYearEnd] = useState('');
    const [subject, setSubject] = useState('');

    function remove(id) {
        removeItem(id);
    }

    const preview = (
        <div className="container">
            <div className="text-bold">{place}</div>
            <div hidden={yearStart.length < 1 || yearEnd.length < 1} className="text-small">{yearStart} - {yearEnd}</div>
            <div className="text">{subject}</div>
        </div>
    )

    const edit = (
        <div className="container">
            <div className="input-wrap">
                <label className="label">Place:</label>
                <input
                    name="place"
                    value={place}
                    placeholder="Workplace name"
                    onChange={(e) => setPlace(e.target.value)}
                />
            </div>
            <div className="input-wrap">
                <label className="label">Start date:</label>
                <input
                    name="yearStart"
                    type="date"
                    value={yearStart}
                    placeholder="Starting date"
                    onChange={(e) => setYearStart(e.target.value)}
                />
            </div>
            <div className="input-wrap">
                <label className="label">End date:</label>
                <input
                    name="yearEnd"
                    type="date"
                    value={yearEnd}
                    placeholder="Ending date"
                    onChange={(e) => setYearEnd(e.target.value)}
                />
            </div>
            <div className="input-wrap">
                <label className="label">Job Description:</label>
                <input
                    name="subject"
                    value={subject}
                    placeholder="Job description"
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>
            <button className="delete-btn" onClick={() => remove(id)}>Remove</button>
            <hr />
        </div>
    )

    return editMode ? edit : preview;
}

export default ExperienceItem;
