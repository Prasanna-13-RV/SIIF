import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Footer from './components/common/footer/Footer.component'
import Navbar from './components/common/navbar/Navbar.component'
import "./index.css"
import { AdvisoryBoard } from "./pages/about/AdvisoryBoard"
import { Mentors } from "./pages/about/Mentors"
import { Partners } from "./pages/about/Partners"
import { Startups } from "./pages/about/Startups"
import { Teams } from "./pages/about/Teams"
import { VirtualTour } from "./pages/about/VirtualTour"
import { CentralFunding } from "./pages/benefits/advisor/governmentFunding/CentralFunding"
import { StateFunding } from "./pages/benefits/advisor/governmentFunding/StateFunding"
import { AngelInvestors } from "./pages/benefits/advisor/privateFunding/AngelInvestors"
import { VentureCapitalist } from "./pages/benefits/advisor/privateFunding/VentureCapitalist"
import Clinic from "./pages/benefits/capital/Clinic"
import { Connect } from "./pages/benefits/capital/Connect"
import { DemoDay } from "./pages/benefits/trade/DemoDay"
import { GlobalMarketConnect } from "./pages/benefits/trade/GlobalMarketConnect"
import { LaunchPad } from "./pages/benefits/trade/LaunchPad"
import { StartupTools } from "./pages/benefits/trade/StartupTools"
import Index from "./pages/captialInfusion/Index"
import { SAINInvestors } from "./pages/captialInfusion/SAINInvestors"
import { SAINStartups } from "./pages/captialInfusion/SAINStartups"
import { Services } from "./pages/captialInfusion/Services"
import { Contact } from "./pages/contact/Contact"
import { PreviousEvents } from "./pages/events/PreviousEvents"
import { UpcomingEvents } from "./pages/events/UpcomingEvents"
import { Gallery } from "./pages/gallery/Gallery"
import { HomePage } from "./pages/home/HomePage"
import { CoworkingSpace } from "./pages/initiatives/CoworkingSpace"
import { Entrepreneurship } from "./pages/initiatives/Entrepreneurship"
import { IncubationAcceleration } from "./pages/initiatives/IncubationAcceleration"
import { IncubationProgram } from "./pages/initiatives/IncubationProgram"
import { IncubationCollaboration } from "./pages/initiatives/IndustrialCollaboration"
import { IpSupport } from "./pages/initiatives/IpSupport"
import { MakerSpace } from "./pages/initiatives/MakerSpace"
import { PreIncubationProgram } from "./pages/initiatives/PreIncubationProgram"
import { YoungMinds } from "./pages/initiatives/YoungMinds"
import { MobilityTransportation } from "./pages/initiatives/centers/MobilityTransportation"
import { RenewableEnergy } from "./pages/initiatives/centers/RenewableEnergy"
import { AnnualReport } from "./pages/media/AnnualReport"
import { Blog } from "./pages/media/Blog"
import { MediaPresence } from "./pages/media/MediaPresence"
import Student from "./pages/apply/Student"
import Faculty from "./pages/apply/Faculty"
import Technopreneur from "./pages/apply/Technopreneur"
import Mentor from "./pages/apply/Mentor"

function App() {
	return (
		<div className='mt-36'>

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
					<Route path="/infusion/services" element={<Services />} />

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

							{/* Benefits Global Market Connect */}
				<Route
					path="/benefits/trade/globalconnect"
					element={<GlobalMarketConnect />}
				/>
				<Route path="/benefits/trade/demoday" element={<DemoDay />} />
				<Route
					path="/benefits/trade/launchpad"
					element={<LaunchPad />}
				/>
				<Route
					path="/benefits/trade/startuptools"
					element={<StartupTools />}
				/>


        {/* apply */}
        <Route
					path="/apply/student"
					element={<Student />}
				/>
             <Route
					path="/apply/faculty"
					element={<Faculty />}
				/>
               <Route
					path="/apply/technopreneur"
					element={<Technopreneur />}
				/>
           <Route
					path="/apply/mentor"
					element={<Mentor />}
				/>
				</Routes>
				<Footer />
			</Router>
		</div>


  );

}

export default App;
