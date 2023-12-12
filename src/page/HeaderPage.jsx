import "../style/style_headerpage.scss";

const HeaderPage = () => {
  return (
    <div className="header_base">
      <div className="text_header">
        <div className="up_text">Вкуснейшие</div>
        <div className="h1_text">
          Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу
        </div>
        <div className="h2_text">
          Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.
        </div>
        <div className="button">
          <button>Перейти в каталог</button>
          <div className="txt_button">9 различных видов на выбор</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
