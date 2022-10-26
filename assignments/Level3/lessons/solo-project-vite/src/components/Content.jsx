import './body.css'
import "inter-ui/inter.css";

function Content() {
    return (
        <div className="content-container">
            <h1 className="name">Laura Smith</h1>
            <p className="jobtitle">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
            <div className="button-container">
                <button className="button-email"><span className="envelope icon-envelope"></span> Email</button>
                <button className="button-linkedin"><span className="icon-linkedin"></span> LinkedIn</button>
            </div>
            <div className="aboutDIV">
                <h6 className="about">
                    About
                    <p className="content">
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                </h6>
            </div>
            <div className="interestsDIV">
                <h6 className="interests">
                    Interests
                    <p className="content">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </h6>
            </div>
        </div>
    )
}

export default Content