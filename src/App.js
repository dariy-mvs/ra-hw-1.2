import ShopItemClass from './ShopItemClass';
import './App.css';
import ItemClass from './ItemClass';

const item = new ItemClass('Tiger of Sweden', 'Leonard coat', 'Minimalistic coat in cotton-blend', 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.', 399, '£');


function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item={item} />
    </div>
  </div>
  );
}

export default App;
