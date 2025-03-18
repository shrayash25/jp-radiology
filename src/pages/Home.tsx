import React from "react";
import img1 from "../assets/img2ct-removebg-preview.png";
import img2 from "../assets/img1ct-removebg-preview.png";
import img3 from "../assets/img2mri.jpg";
import img4 from "../assets/img1ct-removebg-preview.png";

import icn1 from "../assets/icon1.png";
import icn2 from "../assets/icon2.png";
import icn3 from "../assets/icon3.png";
import icn4 from "../assets/icon4.png";
import directorImg from "../assets/director.jpg";
import radiologistImg from "../assets/radiologist.png";
import pathologistImg from "../assets/pathologist.jpg";

const experts = [
  {
    name: "Dr J N Gupta - Director",
    description:
      "Dr JN Gupta has over 20 years of experience in radiology and healthcare management, ensuring JP Radiology stays at the forefront of medical imaging.",
    image: directorImg,
  },
  {
    name: "Dr Saurav Gupta - Chief Radiologist",
    description:
      "Specializing in CT & MRI diagnostics, Dr Saurav Gupta has a decade of experience in neuroimaging and cardiac MRI scans.",
    image: radiologistImg,
  },
  {
    name: "Dr Monika Gupta - Head Pathologist",
    description:
      "Dr Monika Gupta leads the pathology department with expertise in cancer screening, molecular diagnostics, and blood tests.",
    image: pathologistImg,
  },
];

const machines = [
  {
    name: "GE Revolution Maxima CT Scanner",
    description:
      "AI-Driven Auto Positioning: Features innovative auto-centering technology that streamlines patient setup, enhancing workflow efficiency. ",
    image: img4,
  },
  {
    name: "GE Signa 1.5T MRI Scanner",
    description:
      "Advanced Imaging: Equipped with deep-learning-based applications to deliver high-quality images. \n Patient Comfort: Designed with a patient-friendly approach, incorporating technologies like Silent Scan to reduce noise during imaging.\n Clinical Versatility: Suitable for a wide range of applications, including brain, spine, musculoskeletal, and abdominal imaging.",
    image: img3,
  },
]; 
const Home: React.FC = () => {
  return (
    <div className="bbox">
      {/* Hero Section */}
      <div className="container bluebg">
        <div className="textb">
          <h1>Precision Imaging. Accurate Diagnosis. Better Health.</h1>
          <p>
            Welcome to JP Radiology, where cutting-edge technology meets expert
            care. We specialize in high-quality CT and MRI scans, ensuring
            accurate results for better health decisions.
          </p>
        </div>
        <div className="imgb">
          <img src={img1} alt="CT Scanner" />
          <img src={img2} alt="MRI Scanner" />
        </div>
      </div>

      {/* Services Section */}
<section className="section bluebg2">
  <h2>Our Services</h2>
  <div className="services-container">
    <div className="service-card">
      <h3>Radiology Services</h3>
      <ul>
        <li>CT Scans (Brain, Abdomen, Chest, etc.)</li>
        <li>MRI Scans (Neuro, Cardiac, Musculoskeletal)</li>
        <li>Ultrasound & Doppler Studies</li>
        <li>X-ray Imaging</li>
      </ul>
    </div>

    <div className="service-card">
      <h3>Pathology Services</h3>
      <ul>
        <li>Hematology & Biochemistry</li>
        <li>Histopathology & Cytology</li>
        <li>Cancer Screening</li>
        <li>Genetic & Molecular Testing</li>
      </ul>
    </div>

    <div className="service-card">
      <h3>Health Screening</h3>
      <ul>
        <li>Full Body Checkups</li>
        <li>Cardiac Health Screening</li>
        <li>Diabetes & Thyroid Screening</li>
        <li>Pre-employment & Preventive Tests</li>
      </ul>
    </div>
  </div>
</section>

      {/* About Us */}
      <div className="about">
        <div className="abb">
          <h2>About Us</h2>
          <p>
            At JP Radiology, we are committed to providing fast, reliable, and
            precise diagnostic imaging. Our experienced radiologists and
            advanced equipment help doctors make informed medical decisions.
            Whether it's a routine scan or a specialized test, we ensure a
            comfortable and professional experience for every patient.
          </p>

          <h3 style={{ color: "#123165" }}>Location: Motihari, Bihar, IN</h3>

          <a
            href="https://maps.app.goo.gl/NxWVJajKxNnie5Pm7"
            target="_blank"
            style={{ textDecoration: "none" }}
            >
            <div className="butt">
              <p className="findus">Find Us - Maps</p>
            </div>
          </a>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="advert about bluebg">
      <div className="imgsec">
          <img src={icn1} alt="CT Scan" />
          <img src={icn2} alt="MRI Scan" />
          </div>
        <div className="textsec">
          <ul style={{ listStyle: "none", padding: 0 }}>
            <h2>Why Choose Us?</h2>
            <li>
              <strong>Top-Tier Technology:</strong> The latest and best MRI & CT
              scanners.
            </li>
            <li>
              <strong>Experienced Radiologists:</strong> Our doctors bring 15+
              years of diagnostic excellence.
            </li>
            <li>
              <strong>Fast & Accurate Reports:</strong> Quick turnaround,
              digital access to reports.
            </li>
            <li>
              <strong>Affordable Healthcare:</strong> High-quality scans at
              competitive pricing.
            </li>
            <li>
              <strong>Comprehensive Diagnostics:</strong> MRI, CT, pathology,
              and interventional radiology under one roof.
            </li>
          </ul>
        </div>
        
          <div className="imgsec">
          <img src={icn3} alt="Pathology Lab" />
          <img src={icn4} alt="Expert Doctors" />
        </div>
      </div>

      
  {/* Meet Our Experts - Fixed Alternating Layout */}
  <div className="experts-section">
        <h2>Meet Our Experts</h2>

        {experts.map((expert, index) => (
          <div className="idkw">
          <div className={index % 2 !== 0 ? "expert reverse" : "expert"} key={index}>
            <div className="expert-text">
              <h3>{expert.name}</h3>
              <p>{expert.description}</p>
            </div>
            <div className="expert-image">
              <img src={expert.image} alt={expert.name} />
            </div>
           </div> {index !== experts.length - 1 && <hr className="expert-divider" />}</div>
        ))}
      </div>

      {/* CT & MRI Machine Details - Improved Layout */}
      <div className="machines-section bluebg">
        <h1>Our Advanced Imaging Technology</h1>

        {machines.map((machine, index) => (
          <div key={index}>
            <div className={index % 2 !== 0 ? "machine reverse" : "machine"}>
              <div className="machine-text">
                <h2>{machine.name}</h2>
                <h3>{machine.description}</h3>
              </div>
              <div className="machine-image">
                <img src={machine.image} alt={machine.name} />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
