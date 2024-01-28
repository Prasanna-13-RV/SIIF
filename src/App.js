import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/common/navbar/Navbar.component';
import Footer from './components/common/footer/Footer.component';
import "./index.css";
import { AdvisoryBoard } from "./pages/about/AdvisoryBoard";
import { Mentors } from "./pages/about/Mentors";
import { Partners } from "./pages/about/Partners";
import { Startups } from "./pages/about/Startups";
import { Teams } from "./pages/about/Teams";
import { VirtualTour } from "./pages/about/VirtualTour";
import Advisor from "./pages/benefits/Advisor.page";
import Capital from "./pages/benefits/Capital.page";
import Trade from "./pages/benefits/Trade.page";
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
import { Makerspace } from "./pages/initiatives/MakerSpace";
import { PreIncubationProgram } from "./pages/initiatives/PreIncubationProgram";
import { YoungMinds } from "./pages/initiatives/YoungMinds";
import { MobilityTransportation } from "./pages/initiatives/centers/MobilityTransportation";
import { RenewableEnergy } from "./pages/initiatives/centers/RenewableEnergy";
import { AnnualReport } from "./pages/media/AnnualReport";
import { Blog } from "./pages/media/Blog";
import { MediaPresence } from "./pages/media/MediaPresence";

function App() {
	return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				{/* about tab */}
				<Route
					path="/about/advisoryboard"
					element={<AdvisoryBoard />}
				/>
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
				<Route
					path="/initiatives/youngminds"
					element={<YoungMinds />}
				/>
				<Route
					path="/initiatives/preincubationprogram"
					element={<PreIncubationProgram />}
				/>
				<Route
					path="/initiatives/makerspace"
					element={<Makerspace />}
				/>
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

				{/* Centers */}
				<Route
					path="/center/mobilitytransportation"
					element={<MobilityTransportation />}
				/>
				<Route
					path="/center/renewableenergy"
					element={<RenewableEnergy />}
				/>

				{/* Events */}
				<Route
					path="/events/upcomingevents"
					element={<UpcomingEvents />}
				/>
				<Route
					path="/events/previousevents"
					element={<PreviousEvents />}
				/>

				{/* Benefits */}
				<Route
					path="/benefits/capital"
					element={<Capital />}
				/>
				<Route
					path="/benefits/trade"
					element={<Trade />}
				/>
				<Route
					path="/benefits/advisor"
					element={<Advisor />}
				/>


				{/* Media */}
				<Route path="/media/blog" element={<Blog />} />
				<Route path="/media/blog" element={<AnnualReport />} />
				<Route
					path="/media/mediapresence"
					element={<MediaPresence />}
				/>

				{/* Gallery */}
				<Route path="/gallery" element={<Gallery />} />

				{/* Contact */}
				<Route path="/contact" element={<Contact />} />

				{/* Captial Infusion */}
				<Route path="/infusion/investors" element={<SAINInvestors />} />
				<Route path="/infusion/startups" element={<SAINStartups />} />
				<Route path="/infusion/services" element={<Services />} />
			</Routes>
			<Footer/>
		</Router>
	)
}

export default App
