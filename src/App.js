import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/common/footer/Footer.component";
import Navbar from "./components/common/navbar/Navbar.component";
import "./index.css";
import { AdvisoryBoard } from "./pages/about/AdvisoryBoard";
import { Mentors } from "./pages/about/Mentors";
import { Partners } from "./pages/about/Partners";
import { Startups } from "./pages/about/Startups";
import { Teams } from "./pages/about/Teams";
import { VirtualTour } from "./pages/about/VirtualTour";
import { CentralFunding } from "./pages/benefits/advisor/governmentFunding/CentralFunding";
import { StateFunding } from "./pages/benefits/advisor/governmentFunding/StateFunding";
import { AngelInvestors } from "./pages/benefits/advisor/privateFunding/AngelInvestors";
import { VentureCapitalist } from "./pages/benefits/advisor/privateFunding/VentureCapitalist";
import Clinic from "./pages/benefits/capital/Clinic";
import { Connect } from "./pages/benefits/capital/Connect";
import { DemoDay } from "./pages/benefits/trade/DemoDay";
import { GlobalMarketConnect } from "./pages/benefits/trade/GlobalMarketConnect";
import { LaunchPad } from "./pages/benefits/trade/LaunchPad";
import { StartupTools } from "./pages/benefits/trade/StartupTools";
import Index from "./pages/captialInfusion/Index";
import { SAINInvestors } from "./pages/captialInfusion/SAINInvestors";
import { SAINStartups } from "./pages/captialInfusion/SAINStartups";
import { Services } from "./pages/captialInfusion/Services";
import { Contact } from "./pages/contact/Contact";
import { PreviousEvents } from "./pages/events/PreviousEvents";
import { UpcomingEvents } from "./pages/events/UpcomingEvents";
import { Gallery } from "./pages/gallery/Gallery";
import { HomePage } from "./pages/home/HomePage";
import { CoworkingSpace } from "./pages/initiatives/CoworkingSpace";
import { Entrepreneurship } from "./pages/initiatives/Entrepreneurship";
import { IncubationAcceleration } from "./pages/initiatives/IncubationAcceleration";
import { IncubationProgram } from "./pages/initiatives/IncubationProgram";
import { IncubationCollaboration } from "./pages/initiatives/IndustrialCollaboration";
import { IpSupport } from "./pages/initiatives/IpSupport";
import { MakerSpace } from "./pages/initiatives/MakerSpace";
import { PreIncubationProgram } from "./pages/initiatives/PreIncubationProgram";
import { YoungMinds } from "./pages/initiatives/YoungMinds";
import { MobilityTransportation } from "./pages/initiatives/centers/MobilityTransportation";
import { RenewableEnergy } from "./pages/initiatives/centers/RenewableEnergy";
import { AnnualReport } from "./pages/media/AnnualReport";
import { Blog } from "./pages/media/Blog";
import { MediaPresence } from "./pages/media/MediaPresence";
import Student from "./pages/apply/Student";
import Faculty from "./pages/apply/Faculty";
import Technopreneur from "./pages/apply/Technopreneur";
import Mentor from "./pages/apply/Mentor";
import { Page404 } from "./components/common/extra/Page404";
import { ComingSoon } from "./components/common/extra/ComingSoon";
import { MentorDhaba } from "./pages/benefits/advisor/mentorDhaba/MentorDhaba";
import { UnveilingExpo } from "./pages/benefits/trade/UnveilingExpo";
import Printing from "./pages/initiatives/centers/Printing";
import CAE from "./pages/initiatives/centers/CAE";
import IndustrialRobotics from "./pages/initiatives/centers/IndustrialRobotics";
import NDT from "./pages/initiatives/centers/NDT";
import EmbeddedIot from "./pages/initiatives/centers/EmbeddedIot";
import UavDrone from "./pages/initiatives/centers/UavDrone";
import BotRpa from "./pages/initiatives/centers/BotRpa";
import Cisco from "./pages/initiatives/centers/Cisco";
import Gaming from "./pages/initiatives/centers/Gaming";
import ArVr from "./pages/initiatives/centers/ArVr";
import AIML from "./pages/initiatives/centers/AIML";
import BlockchainTechnology from "./pages/initiatives/centers/BlockchainTechnology";
import MobileandWebApplication from "./pages/initiatives/centers/MobileandWebApplication";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* about tab */}
          <Route path="/about/advisoryboard" element={<AdvisoryBoard />} />
          <Route path="/about/startups" element={<Startups />} />
          <Route path="/about/teams" element={<Teams />} />
          <Route path="/about/partners" element={<Partners />} />
          <Route path="/about/mentors" element={<Mentors />} />
          <Route path="/about/virtualtour" element={<VirtualTour />} />

          {/* initiatives */}
          <Route path="/initiatives/ipsupport" element={<IpSupport />} />
          <Route
            path="/initiatives/entrepreneurship"
            element={<Entrepreneurship />}
          />
          <Route path="/initiatives/youngminds" element={<YoungMinds />} />
          <Route
            path="/initiatives/preincubationprogram"
            element={<PreIncubationProgram />}
          />
          <Route path="/initiatives/makerspace" element={<MakerSpace />} />
          <Route
            path="/initiatives/incubationprogram"
            element={<IncubationProgram />}
          />
          <Route
            path="/initiatives/coworkingspace"
            element={<CoworkingSpace />}
          />
          <Route
            path="/initiatives/incubationacceleration"
            element={<IncubationAcceleration />}
          />
          <Route
            path="/initiatives/incubationcollaboration"
            element={<IncubationCollaboration />}
          />

          {/* Events */}
          <Route path="/events/upcomingevents" element={<UpcomingEvents />} />
          <Route path="/events/previousevents" element={<PreviousEvents />} />

          {/* Centers */}
          <Route
            path="/center/mobilitytransportation"
            element={<MobilityTransportation />}
          />
          <Route path="/center/renewableenergy" element={<RenewableEnergy />} />
          <Route path="/center/3dprinting" element={<Printing />} />
          <Route path="/center/CAE" element={<CAE />} />
          <Route
            path="/center/industrialrobotics"
            element={<IndustrialRobotics />}
          />
          <Route path="/center/ndt" element={<NDT />} />
          <Route path="/center/iot" element={<EmbeddedIot />} />
          <Route path="/center/uav" element={<UavDrone />} />
          <Route path="/center/bot&rpa" element={<BotRpa />} />
          <Route path="/center/cisco" element={<Cisco />} />
          <Route path="/center/gaming" element={<Gaming />} />
          <Route path="/center/ar&vr" element={<ArVr />} />
          <Route path="/center/ai&ml" element={<AIML />} />
          <Route
            path="/center/renewableenergy"
            element={<BlockchainTechnology />}
          />
          <Route
            path="/center/mobile&web"
            element={<MobileandWebApplication />}
          />

          {/* Media */}
          <Route path="/media/blog" element={<Blog />} />
          <Route path="/media/annualreport" element={<AnnualReport />} />
          <Route path="/media/mediapresence" element={<MediaPresence />} />

          {/* Gallery */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Captial Infusion */}
          <Route path="/infusion" element={<Index />} />
          <Route path="/infusion/investors" element={<SAINInvestors />} />
          <Route path="/infusion/startups" element={<SAINStartups />} />
          {/* <Route path="/infusion/services" element={<Services />} /> */}

          {/* Benefits Captial */}
          <Route path="/benefits/clinic" element={<Clinic />} />
          <Route path="/benefits/connect" element={<Connect />} />

          {/* Benefits Advisior */}
          <Route
            path="/benefits/governmentfunding/state"
            element={<StateFunding />}
          />
          <Route
            path="/benefits/governmentfunding/central"
            element={<CentralFunding />}
          />
          <Route
            path="/benefits/governmentfunding/angelinvestors"
            element={<AngelInvestors />}
          />
          <Route
            path="/benefits/governmentfunding/venturecapitalist"
            element={<VentureCapitalist />}
          />

          <Route
            path="/benefits/advisior/mentordhaba"
            element={<MentorDhaba />}
          />

          {/* Benefits Global Market Connect */}
          <Route
            path="/benefits/trade/unveilingexpo"
            element={<UnveilingExpo />}
          />
          <Route
            path="/benefits/trade/globalconnect"
            element={<GlobalMarketConnect />}
          />
          <Route path="/benefits/trade/demoday" element={<DemoDay />} />
          <Route path="/benefits/trade/launchpad" element={<LaunchPad />} />
          <Route
            path="/benefits/trade/startuptools"
            element={<StartupTools />}
          />

          {/* apply */}
          <Route path="/apply/student" element={<Student />} />
          {/* <Route path="/apply/faculty" element={<Faculty />} />
					<Route
						path="/apply/technopreneur"
						element={<Technopreneur />}
					/> */}
          <Route path="/apply/mentor" element={<Mentor />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
