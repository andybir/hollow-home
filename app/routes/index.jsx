import logo from '../../public/images/hollow-logo-lg.png'

export default function Index() {
  return (
    <div className='home-container'>
      <div className='logo-container'>
        <img className='logo-png' src={logo} alt='' srcset='' />
      </div>
      <div className='title-container'>
        <h1>Welcome to</h1>
        <h1 className='the-hollow'>the hollow</h1>
      </div>
      <div className='links-container'>
        <a href='https://sullivankids.org/'>
          <div className='link'>The Preschool</div>
        </a>
        <a href='https://thehollowbk.org/'>
          <div className='link'>The Playspace</div>
        </a>
      </div>
    </div>
  )
}
