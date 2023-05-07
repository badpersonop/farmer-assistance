import Layout from "../../layout/Layout";
import Container from "../../components/UI/Container/Container";
import heroImage from "../../assets/home/hero.jpg";
import "./Home.css";
import Button from "../../components/UI/Button/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <section className="hero-section">
        <Container className="hero grid grid--items-center grid--gap">
          <div className="hero__text-content grid flow">
            <h1 className="hero__heading">
              A new way of using technologies and crop methods
            </h1>
            <p className="hero__description">
              Indian Farmers are lagging behind in the use of Technologies and
              new advancement. This website will assist farmers to get
              information about various crops technique to grow, crop's rates,
              government schemes for farmers and weather forecasting.
            </p>
            <Link className="hero__btn btn btn--green" to="/tutorial">
              Watch Tutorial
            </Link>
          </div>
          <div className="hero__image-wrapper">
            <img src={heroImage} alt="Hero" />
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
