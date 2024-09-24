import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPost from "../components/LoadingPost";
import axios from "axios";
import PostCard from "../components/PostCard";
import Error from "../components/Error";

function PostByCategoryPage() {
    const {id} = useParams();
    const [category, setCategory] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() =>{
        async function fetchCategory(){
            try {
                const response = await axios.get(`https://73df5ed6499ae03d.mokky.dev/category/${id}`);
                setCategory(response.data);
            } catch(e) {
                console.log(e);
            }finally {
                setIsLoading(false);
            }
        }


        async function fetchPosts(){
            try {
                setIsLoading(true)
                const responce = await axios.get('https://73df5ed6499ae03d.mokky.dev/category');
                setPosts(responce.data);
            } catch(error) {
                console.log(error);
                setIsError(true);
            }finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
        fetchCategory()
    }, [id]);

    if (isError){
        return <Error />
    }

    return(
        <section class="mobile-block">
            <div class="mobile-block__header is-success">
                {category.name}
            </div>
            <div class="all-news-block">
                {isLoading ? (<LoadingPost />):(
                    <>
                        {posts.map((post) => {
                            return post.category === category.name ? (
                                <PostCard key={post.id} post={post} />
                            ) :null
                        })}
                    </>
                )}
            </div>
        </section>
    );
}

export default PostByCategoryPage;