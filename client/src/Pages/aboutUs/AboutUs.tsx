import React from "react";
import './about.css'
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header/Header";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer/Footer";

const AboutUs = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Career Fair UCSC" />
      <Container fluid={true}>
        <div className="about">
          The UCSC Career fair is a vital student activity conducted annually by fourth-year undergraduates in collaboration with the Professional Development Center (PDC) of University of Colombo School of Computing.
          The Professional Development Centre (PDC) is one of the centers at UCSC, established to keep a close liaison with the IT industry to improve the academic activities through industry-academia partnership. The mission of the Professional Development Center is to produce socially responsible professionals with entrepreneurial skills, leadership qualities, and integrity. The center facilitates training programs to improve the professional skills of both the academic staff and the undergraduates. The PDC invites the IT industry to conduct awareness programs such as current trends in the IT industry, industrial practices, career paths in various disciplines, and, thus, creating value addition to enhance overall graduate quality and employability.
        </div>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}

export default AboutUs;