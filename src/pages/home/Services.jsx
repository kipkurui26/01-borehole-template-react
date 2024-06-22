import './Home.css'
import { Link } from "react-router-dom";
import Title from "../../components/title-heading/Title";
import { FaArrowRight } from "react-icons/fa";
import ImagePreview from '../../assets/imgs/bannerImage.jpg'

const Services = () => {
    const serviceList = [
        {
            id: 1,
            serviceTitle: "Borehole Drilling Services",
            serviceDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
              quaerat itaque adipisci culpa ipsum, debitis vero quas placeat
              iusto aperiam in incidunt ullam, recusandae pariatur nesciunt
              voluptatibus inventore illum similique eaque consequuntur. Sequi
              perferendis rerum officiis.`,
            serviceImage: ImagePreview,
            serviceLink: "/borehile-drilling"
        },
        {
            id: 2,
            serviceTitle: "Hydro-Geological Survey Services",
            serviceDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
              quaerat itaque adipisci culpa ipsum, debitis vero quas placeat
              iusto aperiam in incidunt ullam, recusandae pariatur nesciunt
              voluptatibus inventore illum similique eaque consequuntur. Sequi
              perferendis rerum officiis.`,
            serviceImage: ImagePreview,
            serviceLink: "hydrogeological-survey"
        },
        {
            id: 3,
            serviceTitle: "Borehole Test Pumping Services",
            serviceDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
              quaerat itaque adipisci culpa ipsum, debitis vero quas placeat
              iusto aperiam in incidunt ullam, recusandae pariatur nesciunt
              voluptatibus inventore illum similique eaque consequuntur. Sequi
              perferendis rerum officiis.`,
            serviceImage: ImagePreview,
            serviceLink: "/test-pumping"
        },
    ]
  return (
    <section className="services">
      <Title
        titleOverview={"Our Services"}
        titleDescription={"Explore Our Comprehensive Borehole Solutions."}
        isSpan={true}
      />
      <div className="services__container">
        {serviceList.map(({id, serviceTitle, serviceDescription, serviceImage, serviceLink})=>(
            <div className="services__service" key={id}>
            <figure className="services__image">
                <img src={serviceImage} alt={serviceTitle} className="services--img"/>
            </figure>
            <div className="services__description">
                <h2 className="services__title">{serviceTitle}</h2>
                <p className='services__text'>{serviceDescription}</p>
                <div className="services__button">
                    <Link to={`${serviceLink}`} className='services--btn'>Explore Service <FaArrowRight /></Link>
                </div>
            </div>
            </div>

        ))}
      </div>
    </section>
  );
};

export default Services;
