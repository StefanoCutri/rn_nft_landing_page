import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own the market of NFTs. Start selling and growing."
        description="Buy, store and collect NFTs earning cryptos."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart user interface Marketplace."
        description="Experience an amazing UI of NFTs Marketplace. Completely fluent and smooth design"
        showBtn={false}
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description={`This app was built using Expo CLI, which runs natively on all users devices. Get your app into all users's hands`}
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Amazing way to show the NFTs store"
        description="The first screen lists all the NFTs while the second one shows a specific NFT in detail"
        showBtn={false}
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by {""}
          <span className="bold">Stefano Cutri ❤️</span>
        </p>
      </div>
    </>
  );
};

export default App;
