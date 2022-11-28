import './Header.css';
import { Logo } from './Logo';
import { ButtonsSet } from './ButtonsSet';
import { WelcomeName } from './WelcomeName';
import { BiLogOut } from 'react-icons/bi'

export const Header = ({auth, name, logOut}) => {
    return (
        <header className="header">
            <Logo />
            {
                auth ?
                <div className='welcome-wrapper'>
                    <WelcomeName fz={'20px'} name={name} />
                    <BiLogOut className='log-out-btn' onClick={logOut} />
                </div>
                :
                <ButtonsSet />
            }
        </header>
    )
}