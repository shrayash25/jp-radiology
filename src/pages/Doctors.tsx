import React from "react";
import "../index.css"; // Ensure global styles are applied

// Import doctor images
import doctor1Image from "../assets/director.jpg";
import doctor2Image from "../assets/radiologist.png";
import doctor3Image from "../assets/pathologist.jpg";
import team1Image from "../assets/employee/chiefrad.jpeg";
import team2Image from "../assets/employee/seniorrad.jpeg";
import team3Image from "../assets/employee/rad.jpeg";
import team4Image from "../assets/employee/seniorass.jpeg";
import team5Image from "../assets/employee/seniorass2.jpeg";
import team6Image from "../assets/employee/seniortech.jpeg";
import team7Image from "../assets/employee/chiefpath.jpeg";
import team8Image from "../assets/employee/seniorphleb.jpeg";
import team9Image from "../assets/employee/seniorpubrel.jpeg";
import team10Image from "../assets/employee/cheifrad2.jpeg";

const doctors = [
  {
    name: "Dr J N Gupta, Director",

    image: doctor1Image,
    qualifications: "MBBS, MD (Medicine)",
    experience:
      "40+ years of experience in internal medicine, clinical pathology, histopathology, and molecular diagnostics.",
    specialties: [
      "Internal Medicine & Preventive Care",
      "Cardiology & Pulmonology",
      "Endocrinology & Metabolic Disorders",
      "Gastroenterology & Hepatology",
      "Geriatrics & Chronic Disease Management",
      "Infectious Diseases & Immunology",
      "Nephrology & Rheumatology",
    ],
    affiliations: ["Director of JP Radiology"],
  },
  {
    name: "Dr. Saurav Gupta, Head Radiologist",

    image: doctor2Image,
    qualifications:
      "MBBS (MAMC, Delhi), FRCR (London), MMED (Singapore), FRANZCR (Australia/New Zealand)",
    experience: [
      "Over 20 years of experience in diagnostic radiology. Previously served as Associate Program Director and Senior Faculty at National University Hospital, Singapore. Deputy Chair, Radiation safety Committee, NTFGH. Member Morbidity and mortality and PRL & QAC. ",
      " BMJ Case Reports 2014; Doi:10.1136/Bcr-2014-206870; Perforation Of Left Innominate Vein During Dialysis Catheter Placement; Diagn Interv Radiol. 2018 Mar; 24(2): 83–88. Published online 2018 Feb 21. doi:  10.5152/dir.2018.14319",
      "	The pancreatic and extrapancreatic manifestations of IgG4-related disease",
      "	A 29-Year-Old Male Construction Worker from India Who Presented with Left Sided Abdominal Pain Due to Isolated Superior Mesenteric Vein Thrombosis Associated with SARS-CoV-2 Infection; American Journal of Case reports; © AmJ Case Rep, 2020;21: e926785 ",
      "	Ultrasound of testicular lesions in paediatric population (ANZSPR, 2010).",
      "	Ultrasound of cystic neck masses in paediatric population (ESPR, 2011)",
      "	Devil’s in the details: Small field of view MRI of laryngeal tumours (RSNA, 2014; Awarded certificated of merit)",
      "	Classification of acetabular fractures: ECR: 2014",
      "	Soft tissue lesions around the elbow joint: KCR: 2017 ",
      "	Incidental cardiac findings on non-gated CT thorax: ECR: 2018",
      "	Dementia: ISMRM, Paris: 2018",
    ],
    specialties: [
      "Advanced CT & MRI Imaging",
      "Neuroimaging & Stroke Diagnostics",
      "Cardiac & Vascular Imaging",
    ],
    affiliations: [
      "Consultant at JP Radiology, Panchmandir Road, Motihari",
      "Consultant at Crawfurd Medical Center, Singapore",
      "Director, JP Radiology Pte Ltd, Singapore",
    ],
  },

  {
    name: "Dr Monika Gupta, Head Pathologist",

    image: doctor3Image,
    qualifications: "MBBS (JNMC, Bhagalpur), PG  Clinical Pathology (JJMMC, Devangere)",
    experience: [
      "Expert in histopathology, hematology, cytology, microbiology, and blood bank procedures, with experience in teaching, department presentations, lab reporting, and clinical case discussions.", "Karnataka Chapter of Indian association of pathologists and microbiologists, Bengaluru, 41st Conference, Bengaluru, India, 2014","CME on Oncology and organ transplantation, Davangere, India 2014","Musculoskeletal Workshop on Haemophilia, Davangere, India 2015","Karnataka Chapter of Indian association of pathologists and microbiologists, Mangaluru, India, 2015 (Fibrosarcomatous transformation of dermatofibrosarcoma protuberans: a report of two cases)","International CME in pathology, histopathology and Cytopathology, Goa, Feb 2016 (Pancytopenia: A clinic haematological study)"
    ],
    specialties: [
      "Histopathology: Grossing, preliminary reporting",
      "Haematology: peripheral smear staining and reporting",
      "Cytology: FNA, staining and preliminary reporty",
      "Blood bank: Cross matching",
      "Microbiology: culture, staining and preliminary reporting",
    ],
    affiliations: ["Consultant Radiologist, JP Radiology","Indian Medical Council Karnataka Chapter of Indian Association of Pathologists and Microbiologists"],
  },
];

const teamMembers = [
  {
    name: "Abhishek Lakara, BMRDIT",
    image: team1Image,
    role: "Chief Radiographer",
    experience: ["More than 17 years"],
  },
  {
    name: "Danish Anwar",
    image: team2Image,
    role: "Senior Radiographer",
    experience: ["More than 6 Years"],
  },
  {
    name: "Fahimullah, BMIT",
    image: team3Image,
    role: "Radiographer ",
    experience: ["More than 6 Years"],
  },
  {
    name: "MD Arbaz Khan",
    image: team4Image,
    role: "Senior Assistant ",
    experience: ["More than 5 Years"],
  },
  {
    name: "Arun Pandey",
    image: team5Image,
    role: "Senior Assistant ",
    experience: ["More than 20 Years"],
  },
  {
    name: "MD Khalid Reza, BMLT",
    image: team6Image,
    role: "Senior Technician",
    experience: ["More than 5 Years"],
  },
  {
    name: "Priya Ranjan Kumar Tiwari",
    image: team7Image,
    role: "Chief Pathology",
    experience: ["More than 10 Years"],
  },
  {
    name: "Rajnish Kumar",
    image: team8Image,
    role: "Senior Phlebotomist",
    experience: ["More than 10 Years"],
  },
  {
    name: "Suraj Kumar",
    image: team9Image,
    role: "Senior Public Relationship Officer",
    experience: ["More than 10 Years"],
  },
  {
    name: "Akshay Kumar",
    image: team10Image,
    role: "Chief Radiograph",
    experience: ["More then 7 years"],
  },
];

const Doctors: React.FC = () => {
  return (
    <div className="doctors-page">
      {/* Hero Section */}
      <section className="hero4">
        <div className="hero-overlay">
          <h1>Meet Our Expert Team</h1>
          <p>Highly Experienced Specialists in Radiology & Pathology</p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section">
        <h2>Our Doctors</h2>
        {doctors.map((doctor, index) => (
          <div
            className={`expert ${index % 2 === 0 ? "" : "reverse"}`}
            key={doctor.name}
          >
            <div className="expert-image">
              <img src={doctor.image} alt={doctor.name} />
            </div>
            <div className="expert-text">
              <h3>{doctor.name}</h3>
              <p>
                <strong>Qualifications:</strong> {doctor.qualifications}
              </p>
              <p><strong>Experience:</strong></p>
  {typeof doctor.experience === "string" ? (
    <p>{doctor.experience}</p>
  ) : (
    <ul>
      {doctor.experience.map((item: string, i: number) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )}
              <p>
                <strong>Specialties:</strong>
              </p>
              <ul>
                {doctor.specialties.map((specialty, i) => (
                  <li key={i}>{specialty}</li>
                ))}
              </ul>
              <p>
                <strong>Affiliations:</strong>
              </p>
              <ul>
                {doctor.affiliations.map((affiliation, i) => (
                  <li key={i}>{affiliation}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Meet Our Team Section */}
      <section className="section bluebg">
        <h2>Meet Our Team</h2>
        {teamMembers.map((member) => (
          <div className="expert2" key={member.name}>
            <div className="expert-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="expert-text">
              <h3>{member.name}</h3>
              <p>
                <strong>Role:</strong> {member.role}
              </p>
              <p>
                <strong>Experience:</strong> {member.experience}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Doctors;
