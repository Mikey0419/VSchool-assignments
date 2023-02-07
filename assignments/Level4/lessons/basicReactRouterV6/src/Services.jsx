import Wrench from './assets/wrench.png'

export default function Services() {
    return(
        <div className="home-container">
            <div className="card-container">
                <div className="card">
                    <img className="wrench" src={Wrench} />
                    <p>Services 1</p>
                    <p>This is the Services section.</p>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <img className="wrench" src={Wrench} />
                    <p>Services 1</p>
                    <p>This is the Services section.</p>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <img className="wrench" src={Wrench} />
                    <p>Services 1</p>
                    <p>This is the Services section.</p>
                </div>
            </div>
        </div>
    )
}