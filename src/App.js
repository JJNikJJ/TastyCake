import "./App.css";
import HeaderPage from "./page/HeaderPage";
import NavBar from "./component/NavBar";
import ImgOrderPage from "./page/ImgOrderPage";
import OrderPage from "./page/OrderPage";
import InfoChiefPage from "./page/InfoChiefPage";
import ReviewsPage from "./page/ReviewsPage";
import FooterPage from "./page/FooterPage";
import RegistrarionPage from "./page/RegistrarionPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderPage />
      <RegistrarionPage />
      <OrderPage />
      <InfoChiefPage />
      <ReviewsPage />
      <ImgOrderPage />
      <FooterPage />
    </div>
  );
}

export default App;
