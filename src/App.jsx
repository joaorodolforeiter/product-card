import "./App.css";
import ProductCard from "./components/ProductCard";
import sofa360 from "./assets/sofa360.gif";
import sofa from "./assets/sofa.png";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <ProductCard
        title="Sofá Margot II - Rosé"
        price="R$ 4.000"
        code="42404"
        itemImg={sofa}
        itemImg360={sofa360}
      />
    </div>
  );
}

export default App;
