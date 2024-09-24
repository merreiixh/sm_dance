import { useEffect, useState } from "react";
import backIcon from "../assets/css/images/Vector.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";

function SM_DANCEPage() {
    const { id } = useParams();
    const [post, setPosts] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        async function fetchPosts() {
            try {
              setIsLoading(true);
                const response = await axios.get(`https://73df5ed6499ae03d.mokky.dev/post/${id}`);
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, [id]);

    return (
        <section className="mobile-block">
            <Link to="/categories" className="back-button">
                <div className="container">
                    <img src={backIcon} alt="Vector icon" /> 
                    Назад
                </div>
            </Link>
            {isLoading ? (<LoadingDetail /> ) : (
                <div className="container">
                    <div className="post-detail-block">
                        <h3 className="news-card__title">{post.title}</h3>
                        <p className="description">
                            {post.description}
                        </p>
                        <img src={post.imageUrl} alt={post.title} />
                        <span className="author">
                            Записаться: <strong className="light-success-text">{post.contact?.phone}</strong>
                        </span>
                        <span className="author">
                            Наш инстаграм: <strong className="light-success-text">{post.contact?.instagram}</strong>
                        </span>
                     </div>
                </div>
            )}
       </section>
   );
}

export default SM_DANCEPage; 
