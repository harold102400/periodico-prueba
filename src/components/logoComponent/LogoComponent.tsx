import logo from '../../assets/logo.png'
import './logocomponent.css'

const LogoComponent = () => {
  return (
    <div className='logo-container'>
        <img className='logo' src={logo}/>
    </div>
  )
}

export default LogoComponent