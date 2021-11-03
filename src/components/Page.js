import Education from "./Education";
import Experience from "./Experience";
import General from "./General";

function Page() {
    return(
        <div id="page">
            <General />
            <Education />
            <Experience />
        </div>
    );
}

export default Page;