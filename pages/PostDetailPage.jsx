import { useEffect, useState } from "react";
import backIcon from "../assets/css/images/Vector.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";
import Error from "../components/Error";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPosts] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://73df5ed6499ae03d.mokky.dev/post/${id}`);
                setPosts (response.data);
            } catch (error) {
                console.log(error);
                setIsError(true);
            }finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, [id]);

    if (isError){
        return <Error />
    }


    return(
        <section class="mobile-block">
            <Link to={"/"} class="back-button">
                <div class="container">
                    <img src={backIcon} alt="Back icon" /> 
                    Назад
                </div>
            </Link>
            {isLoading ? (<LoadingDetail />) : (
                <div class="container">
                    <div class="post-detail-block">
                        <h3 class="news-card__title">{post.title}</h3>
                        <p class="description">
                            {post.description}
                        </p>
                        <img src={post.imageUrl} alt={post.title} />
                        <span class="author">Записаться: <strong class="light-success-text">{post.contact?.phone}</strong></span>
                        <span class="author">Наш инстаграм: <strong class="light-success-text">{post.contact?.instagram}</strong></span>
                        <button class="tag-button">{post.category}</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default PostDetailPage;