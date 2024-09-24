import backIcon from "../assets/css/images/Vector.svg"; 
import testImage from "../assets/css/images/price.png";
import { Link } from "react-router-dom";


function PricePage () {
    return(
        <section class="mobile-block">
            <Link to={"/categories"} class="back-button">
                <div class="container">
                    <img src={backIcon} alt="Back icon" /> 
                    Назад
                </div>
            </Link>
            <div class="container">
                 <div class="post-detail-block">
                    <h3 class="news-card__title">ПРАЙС И ОПЛАТА</h3>
                    <p class="description">
                        Оплата прозводиться на каспи номер
                        <br />+7 747 904 9895
                        <br />Мерей С.
                    </p>
                    <img src={testImage} alt="name" />
                    <span class="author">Записаться: <strong class="light-success-text">+7 747 904 9895</strong></span>
                    <span class="author">Наш инстаграм: <strong class="light-success-text">@merreiixh</strong></span>
                </div>
           </div>
        </section>
    );
}

export default PricePage;