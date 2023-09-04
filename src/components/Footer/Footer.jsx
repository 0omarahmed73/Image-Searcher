import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      All copy rights reserved for &copy; Omar Ahmed {year}
    </footer>
  )
}

export default Footer