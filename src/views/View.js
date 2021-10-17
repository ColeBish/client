import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/form';
import AuthorList from '../components/list';
const Main = () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            });
    }, [])
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId));
    }
    return (
        <div>
            <Form />
            <hr />
            <h2>All Authors</h2>
            {loaded && <AuthorList author={author} removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;