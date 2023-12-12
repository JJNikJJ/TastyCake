import "../style/style_registrationpage.scss";
import cloud_up from "../media/cloud_up.png";
import phone from "../media/phone.png";
import cloud_down from "../media/cloud_down.png";

const RegistrationPage = () => {
  return (
    <div className="order">
      <img src={cloud_up} alt="Облака сверху" />
      <div className="body_order">
        <img src={phone} alt="Рука с телефоном" />

        <div className="text_header">
          <div className="up_text">Не нашли то что нужно?</div>
          <div className="h1_text">
            Приготовим заказ любой сложности по фото или эскизу
          </div>
          <div className="h2_text">
            Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость
            за 30 минут
          </div>
          <button>Загрузить фотографию</button>
        </div>
      </div>
      <img src={cloud_down} alt="Облака снизу" />
    </div>
  );
};

export default RegistrationPage;
