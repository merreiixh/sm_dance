import backIcon from "../assets/css/images/Vector.svg"; 
import { Link } from "react-router-dom";

function MapPage() {
    return (
        <section className="mobile-block">
            <Link to="/categories" className="back-button">
                <div className="container">
                    <img src={backIcon} alt="Back icon" /> 
                    Назад
                </div>
            </Link>
            <div className="container">
                <div className="post-detail-block">
                    <h3 className="news-card__title">Наши филиалы</h3>
                    <p className="description">
                        Алмата:
                        <br />1. Гоголя 84а
                        <br />2. Егизбаева 7/5
                        <br />3. Назарбаева 301
                        <br />Астана:
                        <br />1. Сауран 15/3
                        <br />2. Туран 22/1
                        <br />Актау:
                        <br />1. 17-й микрорайон, 50
                        <br />Павлодар:
                        <br />1. Бекмаханова 115/1
                        <br />Атырау:
                        <br />1. ул. Академика Жарбосынова 89а
                        <br />2. Гинаят Абдрахманов 27
                        <br />Семей:
                        <br />1. Абая 73
                        <br />2. Шакарима 14
                        <br />3. Глинки 47г
                        <br />Караганда:
                        <br />1. Степной-2 ст62/1
                    </p>
                    <span className="author">Записаться: <strong className="light-success-text">+7 747 904 9895</strong></span>
                    <span className="author">Наш инстаграм: <strong className="light-success-text">@merreiixh</strong></span>
                </div>
            </div>
        </section>
    );
}

export default MapPage;
