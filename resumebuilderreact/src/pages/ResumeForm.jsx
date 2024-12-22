import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

const ResumeForm = () => {
  const validationSchema = Yup.object({
    personalInfo: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      github: Yup.string().url("Invalid URL").required("GitHub URL is required"),
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
    skills: Yup.array().of(Yup.string().required("Skill is required")),
    summary: Yup.string().required("Summary is required"),
    languages: Yup.array().of(Yup.string().required("Language is required")),
  });

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Resume Form</h1>
      <Formik
        initialValues={{
          personalInfo: {
            name: "",
            email: "",
            phone: "",
            github: "",
            linkedin: "",
          },
          experiences: [{ companyName: "", designation: "", startDate: "", endDate: "" }],
          education: [{ schoolName: "", passoutYear: "", degree: "" }],
          projects: [{ projectName: "", description: "" }],
          skills: [""],
          summary: "",
          languages: [""],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form className="space-y-8">
            {/* Personal Information */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                {["name", "email", "phone", "github", "linkedin"].map((field) => (
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
              <h2 className="text-lg font-semibold mb-4">Experience</h2>
              <FieldArray name="experiences">
                {({ remove, push }) => (
                  <>
                    {values.experiences.map((_, index) => (
                      <div key={index} className="space-y-4 border-b pb-4 mb-4">
                        {["companyName", "designation", "startDate", "endDate"].map((field) => (
                          <div key={field}>
                            <label
                              htmlFor={`experiences.${index}.${field}`}
                              className="block text-sm font-medium text-gray-600"
                            >
                              {field.replace(/([A-Z])/g, " $1")}
                            </label>
                            <Field
                              name={`experiences.${index}.${field}`}
                              type="text"
                              className="mt-2 block w-full border rounded-md px-3 py-2 focus:ring-blue-500"
                            />
                            <ErrorMessage
                              name={`experiences.${index}.${field}`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500"
                        >
                          Remove Experience
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        push({ companyName: "", designation: "", startDate: "", endDate: "" })
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
                        {["schoolName", "passoutYear", "degree"].map((field) => (
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
                        ))}
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500"
                        >
                          Remove Education
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ schoolName: "", passoutYear: "", degree: "" })}
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
                          className="text-red-500"
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
                    {values.skills.map((_, index) => (
                      <div key={index} className="flex items-center space-x-4 mb-4">
                        <Field
                          name={`skills.${index}`}
                          type="text"
                          placeholder="Skill"
                          className="block w-full border rounded-md px-3 py-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500"
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
                      Add Skill
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
                      <div key={index} className="flex items-center space-x-4 mb-4">
                        <Field
                          name={`languages.${index}`}
                          type="text"
                          placeholder="Language"
                          className="block w-full border rounded-md px-3 py-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500"
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
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300"
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
