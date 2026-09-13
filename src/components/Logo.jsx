import logoText from '../assets/logo-text.png'

function Logo() {
  return (
    <a href="#home" className="inline-flex items-center">
      <img src={logoText} alt="Dev Stack" className="h-8 w-auto object-contain" />
    </a>
  )
}

export default Logo
