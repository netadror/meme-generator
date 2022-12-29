import bearLogo from '../images/logo192.png';


function Header() {
  return (
    <div className="Header">
      <div className='logo-container'>
        <img src={bearLogo} className="small-logo" alt="logo" />
        <h3 className='logo-text'>TimTim the bear<span>.</span></h3>
      </div>
      <div className='menu-container'>
        <ul className='menu-items'>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
