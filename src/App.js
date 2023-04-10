import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'

const App = () => {
  return (
    <>  
      <SectionWrapper
        title='You own the market of NFTs. Start selling and growing.'
        description='Buy, store and collect NFTs earning cryptos.'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper
        title='Smart user interface Marketplace.'
        description='Experience an amazing UI of NFTs Marketplace. Completely fluent and smooth design'
        showBtn={false}
        mockupImg={assets.homeCards}
        reverse
      />
    </>
  );
};

export default App;
