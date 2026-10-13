import Header from '../components/Header/Header';
import OurProducts from '../components/OurProducts/OurProducts';
import Inspirations from '../components/Inspirations/Inspirations';
import TipsTricks from '../components/TipsTricks/TipsTricks';
import FuniroFurniture from '../components/FuniroFurniture/FuniroFurniture';

export default function Home() {
  return (
    <div>
      <Header />
      <OurProducts />
      <Inspirations />
      <TipsTricks />
      <FuniroFurniture />
    </div>
  );
}