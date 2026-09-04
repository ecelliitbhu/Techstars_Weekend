import React from "react";
import Arpittiwari from "@/public/assets/Images/Arpittiwari.jpg"
import aparna from "@/public/assets/Images/AparnaAgarwal.jpeg"
import akshaykumar from "@/public/assets/Images/Akshay Kumar.jpg"
import rishabh from "@/public/assets/Images/RishabhJaiswal.jpeg"
import divyansh from "@/public/assets/Images/DivyanshRaghuwanshi.jpeg"
import mrityunjaypandey from "@/public/assets/Images/Mrityunjay Pandey.jpg"
import KaranGupta from "@/public/assets/Images/Karan Gupta.jpg"
import Hemant from "@/public/assets/Images/Hemant Singh.png"
import dummy from "@/public/assets/dummy.jpeg"
import Gaurav  from "@/public/assets/Images/Gaurav Mishra.jpg"
import sanjeev  from "@/public/assets/Images/sanjeev kumar.jpg"
import  Mohammad  from "@/public/assets/Images/Mohammad Atif.jpg"


// const Mentor = [
//   { name: 'Dr. Chandra Shekhar Singh', title: 'Management Prof', linkedin: "https://www.linkedin.com/in/dr-chandra-shekhar-singh-3895347a/?originalSubdomain=in" , src: chandra, alt: "Dr. Chandra Shekhar Singh"  },
//   { name: 'Ashish Kumar Babul', title: 'Marketing and distribution', linkedin: "https://www.linkedin.com/in/ashish-kumar-babul-53778a1b4/" , src: dummy, alt: "Ashish Kumar Babul"  },
//   { name: 'Prateek Jaiswal', title: 'FinTech', linkedin: "https://www.linkedin.com/in/pjcprateekjaiswal/" , src: prateek, alt: "Prateek Jaiswal"  },
//   { name: 'Akash Verma', title: 'Alum- Product & Consulting', linkedin: "https://www.linkedin.com/in/akash-verma-08597716b/" , src: akash, alt: "Akash Verma"  },
//   { name: 'Abhinav Patel', title: 'Content & Design', linkedin: "https://www.linkedin.com/in/abhinav-patel-019917300/" , src: abhinav, alt: "Abhinav Patel"  },
//   { name: 'Shubham Jaiswal', title: 'Digital Marketing & Branding', linkedin: "https://www.linkedin.com/in/shubhjj1920/" , src: shubhamjaiswal, alt: "Shubham Jaiswal"  },
//   { name: 'Hemant Singh', title: 'AgriTech', linkedin: "https://www.linkedin.com/in/hemant-singh-725b79bb/" , src: dummy,  alt: "Hemant Singh"  },
//   { name: 'Divyansh Raghuwanshi', title: 'Digital Marketing & Branding', linkedin: "https://www.linkedin.com/in/divyansh-raghuwanshi/" , src: divyansh, alt: "Divyansh Raghuwanshi"},
//   { name: 'Aparna Agarwal', title:'Business Development', linkedin:"https://www.linkedin.com/in/aparna-agarwal-rudrakshahub/", src:aparna,alt:"Aparna Agarwal"},
//   { name: 'Akshay Kumar', title: 'Co-Founder & CEO of ForeTech', linkedin:"https://www.linkedin.com/in/akshaykumar872/?originalSubdomain=in", src: akshaykumar, alt: "Akshay Kumar" },
//   { name: 'Samvet Kumar', title: 'FinTech', linkedin: "https://www.linkedin.com/in/samvet-kumar-475755266/", src: samvet, alt: "Samvet Kumar" },
//   { name: 'Mrityunjay Pandey', title: '', linkedin: "https://www.linkedin.com/in/innovilla/", src: mrityunjaypandey, alt:"Mrityunjay Pandey" },
//   { name: 'Aman', title: 'IND Tech Mark', linkedin: "https://www.linkedin.com/in/amanxthink11/" , src: dummy,  alt: "Aman"  },
//   { name: 'Nadeem', title: '', linkedin: "https://www.linkedin.com/in/nadeem095" , src: dummy, alt: "Nadeem"  },
//   { name: 'Rishabh Jaiswal', title: '', linkedin: "https://www.linkedin.com/in/rishabh-jaiswal-998a4645/?originalSubdomain=in" , src: rishabh, alt: "Rishabh Jaiswal"  },
//   { name: 'Mrityunjay Singh', title: '', linkedin: "https://www.linkedin.com/in/mrityunjay-singh-ceo/" , src: mrityunjaysingh, alt: "Mrityunjay Singh"  },
//   { name: 'Shubham Chaurasia', title: '', linkedin: "" ,src: dummy,  alt: "Shubham Chaurasia"  },
//   { name: 'Sahil Jaiswal', title: '', linkedin: "https://www.linkedin.com/in/shail-jaiswal-ceo-of-promptly-ai?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ,src: dummy, alt: "Sahil Jaiswal"  },
  

// ];
const Mentor = [
  { name: 'Arpit tiwari', title: 'Senior Analyst – Revenue Operations & CRM Strategy @Doceree', linkedin: "https://www.linkedin.com/in/arpit-tiwari-a40349212/" , src: Arpittiwari, alt: "Arpittiwari"  },
  { name: 'Mrityunjay Pandey', title: 'Founder & CEO at Innovilla PvtLt', linkedin: "" , src: mrityunjaypandey , alt: "Mrityunjay Pandey"  },
  { name: 'Rishabh Jaiswal', title: 'Co-founder at Rudrakshahub', linkedin: "https://www.linkedin.com/in/rishabh-jaiswal-998a4645/" , src:rishabh, alt: "Rishabh Jaiswal"  },
  { name: 'Aparna Agarwal', title: ' Co-founder at Rudrakshahub', linkedin: "https://www.linkedin.com/in/aparna-agarwal-rudrakshahub/" , src: aparna, alt: "Aparna Agarwal"  },
  { name: 'Divyansh Raghuwanshi', title: 'Founder at Media FleetBlue', linkedin: "https://www.linkedin.com/in/divyansh-raghuwanshi/" , src:divyansh, alt: "Divyansh Raghuwanshi"  },
  { name: 'Karan Gupta', title: 'Founder & CEO at MilkJatt, a DPIIT-recognized AgriTech startup', linkedin: "https://www.linkedin.com/in/karanguptaonline1/" , src: KaranGupta, alt: "Karan Gupta"  },
  { name: 'Hemant Singh', title: 'Founder & CEO at Agrichikitsa', linkedin: "https://www.linkedin.com/in/hemant-singh-725b79bb/" , src:Hemant ,  alt: "Hemant Singh"  },
  { name: 'Dr. Niraj Jha', title: 'Winner of Bihar Startup Award 2024, 7000+ patients served through ambulance services', linkedin: "https://www.linkedin.com/in/drnirajjha/" , src: dummy, alt: "Dr. Niraj Jha"},
  { name: 'Gaurav Mishra', title:'Founder, Kuda Bazar , Environmentalist', linkedin:"https://www.linkedin.com/in/gaurav-mishra-b8b641191/", src:Gaurav,alt:"Gaurav Mishra"},
  { name: 'Akshay Kumar', title: 'founder talentgraphos.com', linkedin:"https://www.linkedin.com/in/akshaykumar872/?originalSubdomain=in", src:akshaykumar, alt: "Akshay Kumar" },
  { name: 'sanjeev kumar', title: 'Founder, Conwerz AI & Techpath', linkedin: "https://www.linkedin.com/in/sanjeev-kumar-0953a3198/", src:sanjeev , alt:"sanjeev kumar" },
  { name: 'Mohammad Atif', title: 'MCA| Founder| Leading Innovative Tech Solutions| weproztech | Clozety', linkedin: "https://www.linkedin.com/in/mohammad-atif-4885391b8/" , src:Mohammad ,  alt: "Mohammad Atif"  },
  { name: 'Akshay Shukla', title: 'Angel Investor | AI, SaaS & Emerging Tech', linkedin: "https://www.linkedin.com/in/akshay-shuklaa/" , src:  dummy, alt: "Akshay Shukla"  },
  { name: 'Mohan Lal Keshri', title: 'Founder @Moha Lifecare | Healthcare & Pharmaceuticals', linkedin: "https://www.linkedin.com/in/mohan-lal-keshari-10863091/" , src:  dummy, alt: "Mohan Lal Keshri"  },

];
export default Mentor