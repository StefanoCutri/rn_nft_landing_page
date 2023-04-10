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
    </>
  );
};

export default App;
