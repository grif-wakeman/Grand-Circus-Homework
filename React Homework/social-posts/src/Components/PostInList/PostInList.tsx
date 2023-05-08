import { Post } from "../../Models/Post"

export function PostInList(props: { post: Post}) {


    return (
        <div className="post">
            <h3>{props.post.title}</h3>
            
            <p>{props.post.thought}</p>
        </div>
    )

}