import Header from '../components/Header/Header';
import OurProducts from '../components/OurProducts/OurProducts';
import Inspirations from '../components/Inspirations/Inspirations';
import TipsTricks from '../components/TipsTricks/TipsTricks';

export default function Home() {
  return (
    <div>
      <Header />
      <OurProducts />
      <Inspirations />
      <TipsTricks />
    </div>
  );
}