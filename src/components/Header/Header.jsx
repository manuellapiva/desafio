import './Header.css'
import logo from '../../assets/img/twitch.avif'
function Header () {
  return (
    <>
      <header>
        <img src={logo} />
        <h1>Twitch</h1>
        <form action="/search" method="get">
        <input type="search" name="q" 
        placeholder="Pesquisar no site..."/>
        <button type="submit">Buscar</button>
    </form>
         <ul>
            <li>Sign in</li>
            <li>Log in</li>
         </ul>
      </header>
    </>
      )
}
export default Header 