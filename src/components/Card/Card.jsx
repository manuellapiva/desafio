import './Card.css'

function Card ({capa, titulo, genero, preco, promocao}) {
    const onSale = promocao ? '🟢PROMOÇÃO' : '🔴SEM PROMOÇÃO'

    return (
        
 <section className="card">
            <img src={capa} alt={`${titulo}`}/>
            <h2>
                {titulo}           
            </h2>
            <p>{genero}</p>
             <p>{preco}</p>
            <small>{onSale}</small>
             </section>
    )
}

export default Card