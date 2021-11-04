import Education from "./Education";
import Experience from "./Experience";
import General from "./General";

function Page({editMode}) {

    return (
        <div id="page">
            <General editMode={editMode} />
            <Education editMode={editMode}/>
            <Experience editMode={editMode}/>
        </div>
    );
}

export default Page;