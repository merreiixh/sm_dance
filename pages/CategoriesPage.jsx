import { useEffect, useState } from "react";
import homeIcon from "../assets/css/images/news.svg"
import { Link } from "react-router-dom";
import LoadingRow from "../components/LoadingRow";
import axios from "axios";
import Error from "../components/Error";

function CategoriesPage() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    useEffect (() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://73df5ed6499ae03d.mokky.dev/category');
                setCategories (response.data);
            } catch(e) {
                console.log(e);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);

    if (isError){
        return <Error />
    }


    return (
        <section class="mobile-block">
            <div class="mobile-block__header is-warning">
                Категории
            </div>
            {isLoading ? (<LoadingRow />) : (
                <div className="container">
                    <div className="category-row">
                        <Link to={"/"} class="category-item">
                            <img src={homeIcon} alt="Home" className="category-item__img" />
                            <span className="category-item__title">Вся информация</span>
                        </Link>
                        {categories.map((category) => (
                            <Link to={`/category/posts/${category.id}`} class="category-item">
                                <img src={category.imageUrl} alt={category.name} className="category-item__img" />
                                <span className="category-item__title">{category.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default CategoriesPage;