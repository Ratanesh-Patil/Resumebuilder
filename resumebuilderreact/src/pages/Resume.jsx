import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Resume({ data }) {
  console.log(data);
  const contentRef = useRef(null);

  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className="flex flex-col items-center">
      {/* Resume Content */}
      {/* {data && ( */}
      <div
        ref={contentRef}
        className="font-sans max-w-4xl mx-auto p-6 leading-relaxed bg-white shadow-md border border-gray-300"
      >
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">
            {data?.personalInfo?.name}
          </h1>
          <p className="text-sm">
            {data?.personalInfo?.location} | {data?.personalInfo?.email} |{" "}
            {data?.personalInfo?.phone} |{" "}
            <a
              href={data?.personalInfo?.linkedin}
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href={data?.personalInfo?.github}
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Portfolio
            </a>
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Summary
          </h2>
          <p className="text-sm">{data?.summary}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <ul className="list-disc pl-5 text-sm">
            <li>
              {data?.skills.map((skillCategory, index) => (
                <div key={index}>
                  <strong>{skillCategory.category}: {" "}</strong>
                  {skillCategory.skills.join(", ")}
                </div>
              ))}
            </li>
            {/* <li>
              <strong>Frameworks and Libraries:</strong> Spring Boot, JDBC,
              Tailwind CSS, Formik, ag-Grid, iText, pdfmake, Axios
            </li>
            <li>
              <strong>Databases and APIs:</strong> PostgreSQL, MySQL, RESTful
              APIs
            </li>
            <li>
              <strong>Tools:</strong> Postman, VsCode, STS, Android Studio,
              GitHub
            </li> */}
          </ul>
        </section>

        <section className="mb-6">
      <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
        Experience
      </h2>
      {data?.experiences.map((experience, index) => (
        <div key={index} className="mb-4">
          {/* Flexbox for title and date alignment */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{experience.designation}</h3>
            <p className="text-sm text-gray-600">
              {experience.startDate} – {experience.endDate}
            </p>
          </div>
          <p className="text-sm italic">{experience.companyName}, Pune</p>
          <p className="text-sm mt-1">Key Responsibilities and Achievements:</p>
          <ul className="list-disc pl-5 text-sm">
            {experience.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          <div className="mb-2">
            <h3 className="text-lg font-semibold">
              Institute for Advanced Computing and Software Development, PG
              Diploma
            </h3>
            <p className="text-sm italic">[Sept, 2022] – [Mar, 2023]</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Savitribai Phule Pune University, Bachelor's Degree
            </h3>
            <p className="text-sm italic">[Sept, 2016] – [Aug, 2019]</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Enterprise Resource Planning (ERP) System
            </h3>
            <p className="text-sm">
              Developed a comprehensive ERP system to streamline and automate
              core business processes.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Hospital Management System (HMS)
            </h3>
            <p className="text-sm">
              Developed a Hospital Management System (HMS) to automate and
              streamline hospital operations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Bike Rental System [C-DAC]
            </h3>
            <p className="text-sm">
              Designed an online Bike Rental System for a company specializing
              in renting bikes.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Certifications and Awards
          </h2>
          <ul className="list-disc pl-5 text-sm">
            <li>Completed Java and SQL certification from HackerRank.</li>
            <li>
              Completed ReactJS and GitHub certification from Great Learning.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Languages
          </h2>
          <p className="text-sm">
            English (Fluent), Hindi (Fluent), Marathi (Native)
          </p>
        </section>
      </div>
      {/* )} */}

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
