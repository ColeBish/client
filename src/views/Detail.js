import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, useNavigate } from '@reach/router';

const Detail = (props) => {
    const [author, setAuthor] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => setAuthor({
                ...res.data
            }))
    })

    const deleteAuthor = (authorId) => {
        const { removeFromDom } = props;
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            }, navigate("/authors"))
    }

    return (
        <div>
            <p>Name: {author.name}</p>

            <hr />
            <button onClick={(e) => { deleteAuthor(author._id) }} >delete</button>

        </div >
    )
}
export default Detail;