import './Hire.Component.css'
import imgcool from '../images/imgcool1.jpg'
import { Link } from 'react-router-dom'
export const Hire = () => {
    return (
        <>
            <div className="card">
                <img src={imgcool} alt="John" style={{ width: "100%" }}></img>
                <h1>full stack developer</h1>
                <p className="title">9861******</p>
                <p>nepalkushal74@gmail.com</p>
                <Link href="/#"><i className="fa fa-dribbble"></i></Link>
                <Link href="/#"><i className="fa fa-twitter"></i></Link>
                <Link href="/#"><i className="fa fa-linkedin"></i></Link>
                <Link href="/#"><i className="fa fa-facebook"></i></Link>
                <Link to="/contact">
                    <p>
                        <button>Contact</button>
                    </p>
                </Link>
            </div>

        </>
    )
}
