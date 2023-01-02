import blogFetch from '../axios/config';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import './NewPost.css';

const NewPost = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [body, setBody] = useState()

    const createPost = async (e) => {
        e.preventDefault();

        const post = { title, body, userId: 1 }

        await blogFetch.post('/posts', {
            body: post,
        });

        navigate('/');
    }

    return (
        <div className='new_post'>
            <h2>Inserir novo Post:</h2>
            <form onSubmit={(e) => createPost(e)}>
                <div className='form_control'>
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        id='title'
                        name='title'
                        placeholder='Digite o título'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='form_control'>
                    <label htmlFor="body">Conteúdo:</label>
                    <textarea
                        name="body"
                        id="body"
                        placeholder='Digite o conteúdo'
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value='Criar Post' className='btn' />
            </form>
        </div>
    )
}

export default NewPost