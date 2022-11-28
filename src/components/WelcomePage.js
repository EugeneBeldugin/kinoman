import { ButtonsSet } from "./ButtonsSet"
import { Logo } from "./Logo"
import './WelcomePage.css'
import { WelcomeName } from "./WelcomeName.js";

export const WelcomePage = ({auth, name}) => {
    return (
        <div className="welcome-page">
            <h2>Welcome to</h2>
            <Logo fz={'70px'}/>

            {
                auth ?
                <WelcomeName fz={'40px'} name={name} />
                :
                <ButtonsSet isActiveBrowse={true}/>
            }
            
        </div>
    )
}