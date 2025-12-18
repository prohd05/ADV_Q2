import { useState } from "react"
function BookCard({idf, ti, au, gen, desc, av}){
    const [id, setID] = useState(idf);
    const [title, setTitle] = useState(ti);
    const [author, setAuthor] = useState(au);
    const [genre, setGenre] = useState(gen);
    const [description, setDescription] = useState(desc);
    const [available, setAvailable] = useState(av);
    return(
        <>
        </>
    )
}

export default BookCard