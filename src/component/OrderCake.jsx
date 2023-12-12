import "./style_component/style_order_cake.scss";

const OrderCake = () => {
  return (
    <div className="OrderCake">
        <img src={} alt = "Фото торта"/>
        <div className="h1_txt">Кремовый замок</div>
        <div className="h2_txt">Нежный крем любого цвета на выбор, вафельная основа</div>
        <div className="price_cake">150 р/шт</div>
        <button className="order_cake">Заказать</button>
    </div>
  );
};

export default OrderCake;
