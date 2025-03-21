import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./App.css";
import PageOne from "./components/page1";
import PageTwo from "./components/page2";
import logoImage from "./assets/p-image.png";
import ReferencesPage from "./components/references";

function App() {
  return (
    <Tabs defaultIndex={2}>
      <div className="app-container">
        <aside className="sidebar">
          <div className="top-left-icon" onClick= {() => { window.location.reload() }}>
            <img src={logoImage} alt="Icon" className="icon-image" />
          </div>
          <TabList className="tablist">
            <Tab>References</Tab>
            <Tab>Movie Comparisons</Tab>
            <Tab>General Comparisons</Tab>
          </TabList>
        </aside>

        {/* Main content here */}
        <div className="main-content">
          <TabPanel>
            <ReferencesPage />
          </TabPanel>
          <TabPanel>
            <PageTwo />
          </TabPanel>
          <TabPanel>
            <PageOne />
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
}

export default App;
