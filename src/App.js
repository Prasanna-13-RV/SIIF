import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css";
import { HomePage } from "./pages/home/HomePage"
import { AdvisoryBoard } from "./pages/about/AdvisoryBoard"
import { Startups } from "./pages/about/Startups"
import { Teams } from "./pages/about/Teams"
import { Partners } from "./pages/about/Partners"
import { Mentors } from "./pages/about/Mentors"
import { VirtualTour } from "./pages/about/VirtualTour"
import { IpSupport } from "./pages/initiatives/IpSupport"
import { CoworkingSpace } from "./pages/initiatives/CoworkingSpace"
import { MobilityTransportation } from "./pages/initiatives/centers/MobilityTransportation"
import { RenewableEnergy } from "./pages/initiatives/centers/RenewableEnergy"
import { IncubationAcceleration } from "./pages/initiatives/IncubationAcceleration"
import { IncubationCollaboration } from "./pages/initiatives/IndustrialCollaboration"
import { YoungMinds } from "./pages/initiatives/YoungMinds"
import { UpcomingEvents } from "./pages/events/UpcomingEvents"
import { PreviousEvents } from "./pages/events/PreviousEvents"
import { Blog } from "./pages/media/Blog"
import { AnnualReport } from "./pages/media/AnnualReport"
import { MediaPresence } from "./pages/media/MediaPresence"
import { Gallery } from "./pages/gallery/Gallery"
import { SAINInvestors } from "./pages/captialInfusion/SAINInvestors"
import { SAINStartups } from "./pages/captialInfusion/SAINStartups"
import { Services } from "./pages/captialInfusion/Services"
import { Entrepreneurship } from "./pages/initiatives/Entrepreneurship"
import { PreIncubationProgram } from "./pages/initiatives/PreIncubationProgram"
import { IncubationProgram } from "./pages/initiatives/IncubationProgram"
import { MakerSpace } from "./pages/initiatives/MakerSpace"
import { Contact } from "./pages/contact/Contact"
import Index from "./pages/captialInfusion/Index";

function App() {
	return (
		<Router>
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
					element={<MakerSpace />}
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
					path="/centers/upcomingevents"
					element={<UpcomingEvents />}
				/>
				<Route
					path="/centers/previousevents"
					element={<PreviousEvents />}
				/>

				{/* Media */}
				<Route path="/media/blog" element={<Blog />} />
				<Route path="/media/annualreport" element={<AnnualReport />} />
				<Route
					path="/media/mediapresence"
					element={<MediaPresence />}
				/>

				{/* Gallery */}
				<Route path="/gallery" element={<Gallery />} />

				{/* Contact */}
				<Route path="/contact" element={<Contact />} />

				{/* Captial Infusion */}
				<Route path="/infusion" element={<Index />} />
				<Route path="/infusion/investors" element={<SAINInvestors />} />
				<Route path="/infusion/startups" element={<SAINStartups />} />
				<Route path="/infusion/services" element={<Services />} />
			</Routes>
		</Router>
	)
}

export default App
