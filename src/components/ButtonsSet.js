import './ButtonsSet.css'
import { Link } from "react-router-dom";

export const ButtonsSet = ({isActiveBrowse}) => {
    return (
        <div>
            <Link to='/sign-in'>
                <button className="btn">Sign In</button>
            </Link>
            <Link to='/sign-up'>
                <button className="btn">Sign Up</button>
            </Link>
            {
                isActiveBrowse && 
                <Link to='/home'>
                    <button className="btn">Browse</button>
                </Link>
            }
        </div >
    )
}