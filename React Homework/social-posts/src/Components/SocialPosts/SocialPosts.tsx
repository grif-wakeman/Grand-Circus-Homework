import "./SocialPosts.css"
import { PostInList } from "../PostInList/PostInList"
import { PostForm } from "../PostForm/PostForm"
import { useState } from "react";
import { Post } from "../../Models/Post";
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export function SocialPosts() {

    const [modalIsOpen, setIsOpen] = useState(false)

    const [posts, setPosts] = useState<Post[]>([
        {
            title: "Hello there",
            thought: "Check 1 2"
        }
    ])

    function closeModal() {
        setIsOpen(false);
      }


    return (
        <div>
            <h1>My Thoughts</h1>
            <button onClick={() => setIsOpen(true)}>New Thought</button>

            <div className="postList">
                {
                    posts.map(post => <PostInList post={post} />)
                }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <PostForm onSubmitForm={(newPost: Post) => setPosts([...posts, newPost])} onClose={closeModal} />
            </Modal>
            
        </div>
    )
}