import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

const ResumeForm = ({ setdata }) => {
  const validationSchema = Yup.object({
    personalInfo: Yup.object({
      name: Yup.string().required("Name is required"),
      location: Yup.string().required("Location is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      github: Yup.string()
        .url("Invalid URL")
        .required("GitHub URL is required"),
      linkedin: Yup.string()
        .url("Invalid URL")
        .required("LinkedIn URL is required"),
    }),
    experiences: Yup.array().of(
      Yup.object({
        companyName: Yup.string().required("Company name is required"),
        designation: Yup.string().required("Designation is required"),
        startDate: Yup.date().required("Start date is required"),
        endDate: Yup.date().required("End date is required"),
        responsibilities: Yup.array()
          .of(Yup.string().required("Bullet point cannot be empty"))
          .min(1, "At least one responsibility is required"),
      })
    ),

    education: Yup.array().of(
      Yup.object({
        schoolName: Yup.string().required("School name is required"),
        passoutYear: Yup.number()
          .required("Passout year is required")
          .min(1900, "Year must be greater than 1900"),
        degree: Yup.string().required("Degree is required"),
      })
    ),
    projects: Yup.array().of(
      Yup.object({
        projectName: Yup.string().required("Project name is required"),
        description: Yup.string().required("Project description is required"),
      })
    ),
    skills: Yup.array().of(
      Yup.object().shape({
        category: Yup.string().required("Category is required"),
        skills: Yup.array()
          .of(Yup.string().required("Skill is required"))
          .min(1, "At least one skill is required in this category"),
      })
    ),

    summary: Yup.string().required("Summary is required"),
    languages: Yup.array().of(Yup.string().required("Language is required")),
  });

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Resume Form</h1>
      <Formik
        initialValues={{
          personalInfo: {
            name: "Ratnesh Patil",
            location: "Pune",
            email: "ratnesh.k.patil@gmail.com",
            phone: "7350402226",
            github: "http://github.com",
            linkedin: "http://linkedin.com",
          },
          experiences: [
            {
              companyName: "PurpleGrad",
              designation: "Full Stack Developer",
              startDate: "",
              endDate: "",
              responsibilities: [
                "Developed high-performance web applications using Java (backend) and React (frontend).",
                "Designed and optimized PostgreSQL databases, ensuring data integrity and scalability.",
                "Created RESTful APIs for efficient client-server communication and third-party integration.",
                "Implemented Agile practices and version control (Git) for effective collaboration.",
                "Conducted testing and debugging to ensure the stability and performance of the application.",
              ],
            },
          ],
          education: [
            { schoolName: "IACSD", passoutYear: "2022", degree: "CDAC" },
          ],
          projects: [
            {
              projectName: "Bike Rental System",
              description:
                "Designed an online Bike Rental System for a company specializing in renting bikes.",
            },
          ],
          // skills: [""],
          skills: [
            {
              category: "Programming",
              skills: ["java", "React", "SQL", "JavaScript"],
            },
          ], // Grouped skills
          summary:
            "Full-Stack Developer with experience in Java, React, and PostgreSQL. Proficient in building scalable web applications, RESTful APIs, and database management. Experienced in Agile development and delivery of secure, high-performance solutions to enhance business operations and efficiency.",
          languages: ["Marathi", "Hindi", "English"],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          setdata(values);
        }}
      >
        {({ values }) => (
          <Form className="space-y-8">
            {/* Personal Information */}
            <section>
              <h2 className="text-lg font-semibold mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "name",
                  "location",
                  "email",
                  "phone",
                  "github",
                  "linkedin",
                ].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={`personalInfo.${field}`}
                      className="block text-sm font-medium text-gray-600"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <Field
                      name={`personalInfo.${field}`}
                      type="text"
                      className="mt-2 block w-full border rounded-md px-3 py-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name={`personalInfo.${field}`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}

            <section>
              <h2 className="text-lg font-semibold mb-4">Experiences</h2>
              <FieldArray name="experiences">
                {({ remove, push }) => (
                  <>
                    {values.experiences.map((experience, index) => (
                      <div key={index} className="mb-6 p-4 border rounded-md">
                        {/* Company Name */}
                        <Field
                          name={`experiences.${index}.companyName`}
                          type="text"
                          placeholder="Company Name"
                          className="block w-full border rounded-md px-3 py-2 mb-2"
                        />
                        {/* Designation */}
                        <Field
                          name={`experiences.${index}.designation`}
                          type="text"
                          placeholder="Designation"
                          className="block w-full border rounded-md px-3 py-2 mb-2"
                        />
                        {/* Start Date & End Date */}
                        <div className="flex space-x-4 mb-2">
                          <Field
                            name={`experiences.${index}.startDate`}
                            type="date"
                            className="block w-full border rounded-md px-3 py-2"
                          />
                          <Field
                            name={`experiences.${index}.endDate`}
                            type="date"
                            className="block w-full border rounded-md px-3 py-2"
                          />
                        </div>

                        {/* Responsibilities (Bullet Points) */}
                        <FieldArray
                          name={`experiences.${index}.responsibilities`}
                        >
                          {({ remove, push }) => (
                            <div className="mt-4">
                              <h3 className="font-semibold mb-2">
                                Responsibilities
                              </h3>
                              {experience.responsibilities.map(
                                (_, bulletIndex) => (
                                  <div
                                    key={bulletIndex}
                                    className="flex items-center space-x-4 mb-2"
                                  >
                                    <Field
                                      name={`experiences.${index}.responsibilities.${bulletIndex}`}
                                      type="text"
                                      placeholder="Bullet point"
                                      className="block w-full border rounded-md px-3 py-2"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => remove(bulletIndex)}
                                      className="text-red-500 p-1 border-2 bg-gray-300 rounded"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                )
                              )}
                              <button
                                type="button"
                                onClick={() => push("")}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                              >
                                Add Bullet Point
                              </button>
                            </div>
                          )}
                        </FieldArray>

                        {/* Remove Experience Button */}
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500 p-1 border-2 bg-gray-300 rounded mt-4"
                        >
                          Remove Experience
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        push({
                          companyName: "",
                          designation: "",
                          startDate: "",
                          endDate: "",
                          responsibilities: [""],
                        })
                      }
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Add Experience
                    </button>
                  </>
                )}
              </FieldArray>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Education</h2>
              <FieldArray name="education">
                {({ remove, push }) => (
                  <>
                    {values.education.map((_, index) => (
                      <div key={index} className="space-y-4 border-b pb-4 mb-4">
                        {["schoolName", "passoutYear", "degree"].map(
                          (field) => (
                            <div key={field}>
                              <label
                                htmlFor={`education.${index}.${field}`}
                                className="block text-sm font-medium text-gray-600"
                              >
                                {field.replace(/([A-Z])/g, " $1")}
                              </label>
                              <Field
                                name={`education.${index}.${field}`}
                                type="text"
                                className="mt-2 block w-full border rounded-md px-3 py-2 focus:ring-blue-500"
                              />
                              <ErrorMessage
                                name={`education.${index}.${field}`}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                          )
                        )}
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500 p-1 border-2 bg-gray-300 rounded"
                        >
                          Remove Education
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        push({ schoolName: "", passoutYear: "", degree: "" })
                      }
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Add Education
                    </button>
                  </>
                )}
              </FieldArray>
            </section>

            {/* Project Section */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Projects</h2>
              <FieldArray name="projects">
                {({ remove, push }) => (
                  <>
                    {values.projects.map((_, index) => (
                      <div key={index} className="space-y-4 border-b pb-4 mb-4">
                        {["projectName", "description"].map((field) => (
                          <div key={field}>
                            <label
                              htmlFor={`projects.${index}.${field}`}
                              className="block text-sm font-medium text-gray-600"
                            >
                              {field.replace(/([A-Z])/g, " $1")}
                            </label>
                            <Field
                              name={`projects.${index}.${field}`}
                              type="text"
                              className="mt-2 block w-full border rounded-md px-3 py-2 focus:ring-blue-500"
                            />
                            <ErrorMessage
                              name={`projects.${index}.${field}`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500 p-1 border-2 bg-gray-300 rounded"
                        >
                          Remove Project
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ projectName: "", description: "" })}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Add Project
                    </button>
                  </>
                )}
              </FieldArray>
            </section>

            {/* Skills Section */}

            <section>
              <h2 className="text-lg font-semibold mb-4">Skills</h2>
              <FieldArray name="skills">
                {({ remove, push }) => (
                  <>
                    {values.skills.map((category, categoryIndex) => (
                      <div
                        key={categoryIndex}
                        className="mb-6 p-4 border rounded-md"
                      >
                        {/* Skill Category Name */}
                        <div className="flex items-center space-x-4 mb-2">
                          <Field
                            name={`skills.${categoryIndex}.category`}
                            type="text"
                            placeholder="Skill Category"
                            className="block w-full border rounded-md px-3 py-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => remove(categoryIndex)}
                            className="text-red-500 p-1 border-2 bg-gray-300 rounded"
                          >
                            Remove Category
                          </button>
                        </div>

                        {/* Nested FieldArray for Skills */}
                        <FieldArray name={`skills.${categoryIndex}.skills`}>
                          {({ remove, push }) => (
                            <>
                              {category.skills.map((_, skillIndex) => (
                                <div
                                  key={skillIndex}
                                  className="flex items-center space-x-4 mb-2"
                                >
                                  <Field
                                    name={`skills.${categoryIndex}.skills.${skillIndex}`}
                                    type="text"
                                    placeholder="Skill"
                                    className="block w-full border rounded-md px-3 py-2 focus:ring-blue-500"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => remove(skillIndex)}
                                    className="text-red-500 p-1 border-2 bg-gray-300 rounded"
                                  >
                                    Remove Skill
                                  </button>
                                </div>
                              ))}
                              <button
                                type="button"
                                onClick={() => push("")}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                              >
                                Add Skill
                              </button>
                            </>
                          )}
                        </FieldArray>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ category: "", skills: [""] })}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Add Skill Category
                    </button>
                  </>
                )}
              </FieldArray>
            </section>

            {/* Summary Section */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <Field
                name="summary"
                as="textarea"
                rows="4"
                className="block w-full border rounded-md px-3 py-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="summary"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Languages</h2>
              <FieldArray name="languages">
                {({ remove, push }) => (
                  <>
                    {values.languages.map((_, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 mb-4"
                      >
                        <Field
                          name={`languages.${index}`}
                          type="text"
                          placeholder="Language"
                          className="block w-full border rounded-md px-3 py-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500 p-1 border-2 bg-gray-300 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push("")}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Add Language
                    </button>
                  </>
                )}
              </FieldArray>
            </section>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 focus:ring focus:ring-green-300"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResumeForm;
