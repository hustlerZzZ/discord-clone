import Header from "./Header.tsx";
import InviteSection from "./InviteSection.tsx";
import VoiceSection from "./VoiceSection.tsx";
import FandomSection from "./FandomSection.tsx";
import ChillinSection from "./ChillinSection.tsx";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <InviteSection />
            <VoiceSection />
            <FandomSection />
            <ChillinSection />
            <Footer />
        </>
    );
}

export default Home;
