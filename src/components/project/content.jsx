
import hospital from "../../assets/hospital.png";
import hotel from "../../assets/hotel.png"
import employee from "../../assets/employee.png"

const projects = [
    {
      name: "Hotel Web App",
      description:
        "Web-based platform that enables users to effortlessly search, book, and manage hotel accommodations, offering a seamless experience for travelers. The application integrates various features, including real-time availability, secure payment processing, and user-friendly management tools, ensuring a convenient and efficient solution for all lodging needs.",
      tags: [
        {
          name: "react",
          color: "red",
        },
        {
          name: "MySql",
          color: "green",
        },
        {
          name: "Boostrap",
          color: "gray",
        },
        {
          name: "Spring Boot",
          color: "royalblue",
        },
      ],
      image: hotel,
      source_code_link: "https://github.com/",
    },
    {
      name: "Health Care Appointment System",
      description:
       "Web-based platform designed to streamline the process of booking and managing medical appointments, allowing patients to easily schedule visits with healthcare providers. The system features user-friendly interfaces for both patients and doctors, real-time availability checks, secure appointment confirmations, and automated reminders.",
      tags: [
        {
          name: "Java",
          color: "blue",
        },
        {
          name: "JSP, JavaScript",
          color: "green",
        },
        {
          name: "MySql",
          color: "red",
        },
      ],
      image: hospital,
      source_code_link: "https://github.com/",
    },
    {
      name: "Employee Management System",
      description:
        "Comprehensive web-based application that simplifies the management of employee records, including onboarding, performance tracking, and attendance monitoring. The system enables HR personnel to efficiently manage employee data, streamline communication, and facilitate performance evaluations,",
      tags: [
        {
          name: "Java",
          color: "blue",
        },
        {
          name: "MySql",
          color: "black",
        },
        {
          name: "Netbeans",
          color: "red",
        },
      ],
      image: employee,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { projects };
  