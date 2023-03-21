import About from "./About"
import Resume from "./Resume"
import Services from "./Services"
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contacts from './Contacts';
import CustomHelmet from "../components/CustomHelmet";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
    <CustomHelmet title="Portfolio"/>
    {/* about */}
    <About/>
    {/* skills */}
    <Skills/>
    {/* services */}
    <Services/>
    {/* resume */}
    <Resume/>
    {/* Portfolio */}
    <Portfolio/>
    {/* Testimonials */}
    <Testimonials/>
    {/* Contacts */}
    <Contacts/>
    </>
  )
}

export default Home