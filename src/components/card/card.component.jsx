import './card.style.css'

const Card = (props) => {
    const {id,name,email}= props
    return (
        <>
            <div className="card-container">
                <img alt='monsterImage' src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </>
    )
}

export default Card