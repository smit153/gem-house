import Header from './sections/Header'
import Breadcrumbs from './sections/Breadcrumbs'
import HeroBanner from './sections/HeroBanner'
import TabNav from './sections/TabNav'
import FourCsHeading from './sections/FourCsHeading'
import FourCs from './sections/FourCs'
import Certificate from './sections/Certificate'
import ShapeWheel from './sections/ShapeWheel'
import GemHouseQuality from './sections/GemHouseQuality'
import LuxuryBackedByValues from './sections/LuxuryBackedByValues'
import ReadyToMeet from './sections/ReadyToMeet'
import WhatsNext from './sections/WhatsNext'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main>
        <HeroBanner />
        <TabNav />
        <FourCsHeading />
        <FourCs />
        <Certificate />
        <ShapeWheel />
        <GemHouseQuality />
        <LuxuryBackedByValues />
        <ReadyToMeet />
        <WhatsNext />
      </main>
      <Footer />
    </>
  )
}
