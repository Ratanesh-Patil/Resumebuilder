import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Resume({ data }) {
  console.log(data);
  const contentRef = useRef(null);

  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className="flex flex-col items-center">
      {/* Resume Content */}
      <div ref={contentRef} className="font-sans max-w-4xl mx-auto p-6 leading-relaxed bg-white shadow-md border border-gray-300">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Ratnesh Patil</h1>
          <p className="text-sm">
            Pune | patil.ratnesh1997@gmail.com | 7350402226 |{" "}
            <a href="#" className="text-blue-600 hover:underline">LinkedIn</a> |{" "}
            <a href="#" className="text-blue-600 hover:underline">GitHub</a> |{" "}
            <a href="#" className="text-blue-600 hover:underline">Portfolio</a>
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Summary</h2>
          <p className="text-sm">
            Full-Stack Developer with experience in Java, React, and PostgreSQL. Proficient in building scalable web applications, RESTful APIs, and database management. Experienced in Agile development and delivery of secure, high-performance solutions to enhance business operations and efficiency.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Skills</h2>
          <ul className="list-disc pl-5 text-sm">
            <li><strong>Programming Languages:</strong> Java, JavaScript, SQL, HTML/CSS, ReactJS, React Native</li>
            <li><strong>Frameworks and Libraries:</strong> Spring Boot, JDBC, Tailwind CSS, Formik, ag-Grid, iText, pdfmake, Axios</li>
            <li><strong>Databases and APIs:</strong> PostgreSQL, MySQL, RESTful APIs</li>
            <li><strong>Tools:</strong> Postman, VsCode, STS, Android Studio, GitHub</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Full-Stack Software Developer</h3>
            <p className="text-sm italic">PurpleGrad, Pune [Sept, 2023 – Present]</p>
            <p className="text-sm mt-1">Key Responsibilities and Achievements:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Developed high-performance web applications using Java (backend) and React (frontend).</li>
              <li>Designed and optimized PostgreSQL databases, ensuring data integrity and scalability.</li>
              <li>Created RESTful APIs for efficient client-server communication and third-party integration.</li>
              <li>Implemented Agile practices and version control (Git) for effective collaboration.</li>
              <li>Conducted testing and debugging to ensure the stability and performance of the application.</li>
              <li>Enhanced security with role-based access control, encryption, and secure authentication.</li>
              <li>Led the development of an ERP system, improving operational efficiency by 30%.</li>
              <li>Contributed to the development of a Hospital Management System, boosting operational efficiency by 20%.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Education</h2>
          <div className="mb-2">
            <h3 className="text-lg font-semibold">Institute for Advanced Computing and Software Development, PG Diploma</h3>
            <p className="text-sm italic">[Sept, 2022] – [Mar, 2023]</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Savitribai Phule Pune University, Bachelor's Degree</h3>
            <p className="text-sm italic">[Sept, 2016] – [Aug, 2019]</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Projects</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Enterprise Resource Planning (ERP) System</h3>
            <p className="text-sm">
              Developed a comprehensive ERP system to streamline and automate core business processes.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Hospital Management System (HMS)</h3>
            <p className="text-sm">
              Developed a Hospital Management System (HMS) to automate and streamline hospital operations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Bike Rental System [C-DAC]</h3>
            <p className="text-sm">
              Designed an online Bike Rental System for a company specializing in renting bikes.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Certifications and Awards</h2>
          <ul className="list-disc pl-5 text-sm">
            <li>Completed Java and SQL certification from HackerRank.</li>
            <li>Completed ReactJS and GitHub certification from Great Learning.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Languages</h2>
          <p className="text-sm">English (Fluent), Hindi (Fluent), Marathi (Native)</p>
        </section>
      </div>

      {/* Print Button */}
      <button
        onClick={() => reactToPrintFn()}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
      >
        Print / Save as PDF
      </button>
    </div>
  );
}
