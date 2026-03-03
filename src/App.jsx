import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Elden from './assets/img/elden.jfif'
import Lol from './assets/img/lol.webp'
import Minecraft from './assets/img/minecraft.png'
import Valorant from './assets/img/valorant.jpg'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <section class="cards">
      <Card
        titulo="Elden Ring"
        genero="Jogador"
        preco={"R$90.00"}
        capa={Elden}
        promocao={false}
        />
        <Card
        titulo="League of Legends"
        genero="Jogador"
        preco={"R$95.00"}
        capa={Lol}
        promocao={false}
        />
        <Card
        titulo="Minecraft"
        genero="Jogador"
        preco={"R$80.00"}
        capa={Minecraft}
        promocao={true}
        />
        <Card
        titulo="Valorant"
        genero="Jogador"
        preco={"R$100.00"}
        capa={Valorant}
        promocao={false}
        />
        </section>
        <Footer/>
    </>
  )
}

export default App
