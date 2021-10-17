import axios from "axios";
import React, { useState } from "react";



const Form = () => {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAuthor = {
            name,
        };
        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then((Response) => console.log(Response))
            .catch((Error) => console.log(Error));

    }
    return (
        <div>
            <h2>Authors</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Name </p>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    >
                    </input>
                </div>
                <button type="submit">
                    Create
                </button>
            </form>

        </div>
    );
}

export default Form;