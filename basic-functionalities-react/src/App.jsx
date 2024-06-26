import "./App.css";
import Accordion from "./components/accordion";
import ModalTest from "./components/modalPopup/modalMain";
import Tab from "./components/tabs/tabs";
import FeatureFlags from "./components/featurFlag";
import FeatureFlagGlobalState from "./components/featureFlag/context";
import GithubProfileFinder from "./components/githubProfileFinder";
import ImageSlider from "./components/imageSlider";
import LightDarkMode from "./components/darkMode";
import LoadMoreData from "./components/loadMoreData";
import QRCodeGenerator from "./components/qrCodeGenerator";
import RandomColor from "./components/randomColor";
import ScrollIndicator from "./components/scrollIndicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scrollToTopAndBottom/scrollToSection";
import SearchAutocomplete from "./components/searchAutocomplete";
import StarRating from "./components/starRating";
import TicTacToe from "./components/ticTacToe";
import TreeView from "./components/treeView";
import menus from "./components/treeView/data";
import UseFetchHookTest from "./components/useFetch/test";
import UseOnclickOutsideTest from "./components/useOutsideClick/test";
import UseWindowResizeTest from "./components/useWindowResize/test";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordion/>
      {/* Random color component */}
      <RandomColor/>

      {/* Star rating component */}
      <StarRating starNo={10}/>

      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      {/* Load more products component */}
      <LoadMoreData/>

      {/* Tree view component/menu UI component / recursive navigation menu */}
      <TreeView menus={menus} />

      {/* QR code generator */}
      <QRCodeGenerator/>

      {/* light and dark theme switch */}
      <LightDarkMode/>

      {/* Scroll indicator component */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />

      {/* Custom tabs component */}
      <Tab />

      {/* Custom Modal Component */}
      <ModalTest/>

      {/* Github profile finder */}
      <GithubProfileFinder/>

      {/* Search Autocomplete */}
      <SearchAutocomplete/>

      {/* Tic tac toe */}
      <TicTacToe/>

      {/* Feature Flag IMplementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>

      {/* useFetch - Custom Hook Test*/}
      <UseFetchHookTest/>

      {/* Use Onclick Outside Hook Test */}
      <UseOnclickOutsideTest/>

      {/* Use Window Resize Hook Test */}
      <UseWindowResizeTest/>

      {/* Scroll to Top and Bottom */}
      <ScrollToTopAndBottom/>

      {/* Scroll to a Particular Section */}
      <ScrollToSection/>
    </div>
  );
}

export default App;