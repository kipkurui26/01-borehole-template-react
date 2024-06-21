import Banner from "../../components/banner/Banner"
import bannerImage from '../../assets/imgs/bannerImage.jpg'

const Home = () => {
  return (
    <section className="home">
        <Banner 
            bannerSpan={"Overview"}
            bannerTitle={"Pure Water from Deep Beneath: Reliable Borehole Drilling Services"}
            bannerDescription={"Contact us today to unlock a sustainable and dependable water source for your property!"}
            bannerButton={"Get Quotation"}
            bannerImage={bannerImage}
        />
    </section>
  )
}

export default Home