import Layout from "../../layout/Layout";
import Container from "../../components/UI/Container/Container";
import "./Tutorial.css";

function Tutorial() {
  return (
    <Layout>
      <Container>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/hwNWx1GTSKo"
          title="8K HDR | The Mirror Dimension (Spider-Man: No Way Home) | Dolby 5.1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Container>
    </Layout>
  );
}

export default Tutorial;
