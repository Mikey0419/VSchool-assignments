import './footer.css'

function Footer() {
    return(
        <div className="footer">
            <div className="icon-container">
                <ul className="list-icons">
                    <li><span className="icon icon-twitter"></span></li>
                    <li><span className="icon icon-facebook"></span></li>
                    <li><span className="icon icon-github"></span></li>
                </ul>
                <p className="copyright">Copyright © Your Website 2022</p>
            </div>
        </div>
    )
}

export default Footer