import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "./Error";

function PostList() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() =>{
        async function fetchPosts(){
            try {
                setIsLoading(true)
                const responce = await axios.get('https://73df5ed6499ae03d.mokky.dev/post');
                setPosts(responce.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            }finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (isError){
        return <Error />
    }

    return(
        <div className="all-news-block">
            {isLoading ? (<LoadingPost />):(
                <>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
                </>
            )}
        </div>
    );
}

export default PostList;