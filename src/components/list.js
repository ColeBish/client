import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

const AuthorList = (props) => {
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }
    return (
        <div>
            {props.author.map((author, idx) => {
                return <p key={idx}>
                    <Link to={`/authors/${author._id}`}>{author.name}</Link>,
                    <Link to={"/authors/" + author._id + "/edit"}>
                        Edit
                    </Link>
                    <button onClick={(e) => { deleteAuthor(author._id) }}>delete</button>
                </p>
            })}
        </div>
    )
}
export default AuthorList;