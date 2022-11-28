import './WelcomeName.css'

export const WelcomeName = ({name, fz}) => {
    return (
            <p className="welcome-name" style={{fontSize: fz}}>Welcome {name}</p>
    )
}