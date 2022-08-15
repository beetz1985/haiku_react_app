

function Haikus({title, author, haiku}) {



    return (
        <section className="haiku-item">
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{haiku}</p>
        </section>
    )
}

export default Haikus