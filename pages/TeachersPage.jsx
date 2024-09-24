import backIcon from "../assets/css/images/Vector.svg"; 
import teacher1 from "../assets/css/images/teacherss/teacher1.png";
import teacher2 from "../assets/css/images/teacherss/teacher2.png";
import teacher3 from "../assets/css/images/teacherss/teacher3.png";
import teacher4 from "../assets/css/images/teacherss/teacher4.png";
import teacher5 from "../assets/css/images/teacherss/teacher5.png";
import teacher6 from "../assets/css/images/teacherss/teacher6.png";
import teacher7 from "../assets/css/images/teacherss/teacher7.png";
import { Link } from "react-router-dom";



function TeachersPage () {
    return (
        <section class="mobile-block">
            <Link to={"/categories"} class="back-button">
                <div class="container">
                    <img src={backIcon} alt="Back icon" /> 
                    Назад
                </div>
            </Link>
            <div class="container">
                 <div class="post-detail-block">
                    <h3 class="news-card__title">Преподаватели</h3>
                    <p class="description">
                        Айгуль Маратовна
                    </p>
                    <img src={teacher1} alt="name" />
                    <p class="description">
                        София Андреевна
                    </p>
                    <img src={teacher2} alt="name" />
                    <p class="description">
                        Айгерим Нурданова
                    </p>
                    <img src={teacher3} alt="name" />
                    <p class="description">
                        Екатерина Белова
                    </p>
                    <img src={teacher4} alt="name" />
                    <p class="description">
                        Амир Пак
                    </p>
                    <img src={teacher6} alt="name" />
                    <p class="description">
                        Николай Волков
                    </p>
                    <img src={teacher5} alt="name" />
                    <p class="description">
                        Анна Исакова
                    </p>
                    <img src={teacher7} alt="name" />
                    <span class="author">Записаться: <strong class="light-success-text">+7 747 904 9895</strong></span>
                    <span class="author">Наш инстаграм: <strong class="light-success-text">@merreiixh</strong></span>
                </div>
           </div>
        </section>
    );
}
export default TeachersPage;