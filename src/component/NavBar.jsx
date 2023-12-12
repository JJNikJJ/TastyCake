import "./style_component/style_navbar.scss";
import geo from "../media/geoicon.png";
const NavBar = () => {
  return (
    <div className="NavBar">
      <button className="candy_chest">Сладкий сундук</button>
      <div className="adress">
        <img src={geo} alt="Геометка" />
        <div className="adress_city">г. Санкт Петербург, ул. Куйбышева 31</div>
      </div>
      <div className="phone">
        <div className="numder">8 (812) 844-95-49</div>
        <div className="txt_number">Ежедневно с 9:00 до 20:00</div>
      </div>
    </div>
  );
};

export default NavBar;
