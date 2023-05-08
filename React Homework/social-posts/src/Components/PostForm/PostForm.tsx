import { FormEvent, useState } from "react";
import { Post } from "../../Models/Post";
import "./PostForm.css"



export function PostForm(props: { onSubmitForm: (post: Post) => void, onClose: () => void}) {
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');
    const [isOpen, setIsOpen] = useState(true)

    function handleFormSubmit(e: any) {
        e.preventDefault();
        
        const post = {
            title, thought
        };

        props.onSubmitForm(post)

        props.onClose()
        
    }


    return (
        <div>
            <button className="closeBtn" onClick={() => props.onClose()}>X</button>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="">Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <label htmlFor="">thought</label>
                <textarea value={thought} onChange={e => setThought(e.target.value)}></textarea>
                <button>Add Post</button>
            </form>
        </div>
    )
}