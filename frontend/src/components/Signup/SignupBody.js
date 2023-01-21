import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const formikSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  userName: Yup.string().required("User Name is required"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email format"
    )
    .required("Email is required"),
  password: Yup.string().required("password is required"),
});

export default function SignupBody() {
  const navigate = useNavigate();

  const [openTab, setOpenTab] = React.useState(1);
  const [role, setrole] = React.useState("fanSignup");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signUp(values);
    },
    validationSchema: formikSchema,
  });

  const signUp = async (values) => {
    try {
      const formData = {
        firstName: values?.firstName,
        lastName: values?.lastName,
        userName: values?.userName,
        email: values?.email,
        password: values?.password,
        role: role,
      };
      const userData = await axios.post(
        "http://localhost:5000/api/user",
        formData
      );
      if (userData.status) {
        navigate("/home");
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="flex w-3/4 mx-auto mt-5 flex-wrap bg-gray-900 rounded-2xl">
        <div className="md:w-3/6 mx-auto">
          <ul
            className="flex  list-none w-72 mt-6 mx-auto rounded-2xl bg-black"
            role="tablist"
          >
            <li className="-mb-pxlast:mr-0  flex-auto text-center">
              <button
                className={
                  "text-xs font-bold uppercase  px-5 py-3 w-36 shadow-lg rounded-2xl block leading-normal " +
                  (openTab === 1 ? "text-black bg-emerald-500" : " bg-black")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                  setrole("fanSignup");
                }}
                data-toggle="tab"
                role="FAN SIGNUP"
              >
                FAN SIGNUP
              </button>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <button
                className={
                  "text-xs font-bold uppercase px-5 w-36 py-3 shadow-lg rounded-2xl block leading-normal " +
                  (openTab === 2 ? "text-black bg-emerald-500" : " bg-black")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                  setrole("talentSignup");
                }}
                data-toggle="tab"
                role="TALENT SIGNUP"
              >
                TALENT SIGNUP
              </button>
            </li>
          </ul>
          <div className="relative flex flex-col  break-words  ">
            <div className=" flex-auto">
              <div className="tab-content tab-space">
                <div>
                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      <h1 className="text-center mt-8 text-xl">
                        Create Your Fan Account
                      </h1>
                      <div className="mb-4 mt-4">
                        <label
                          for=""
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          First name *
                        </label>
                        <input
                          className="border-emerald-500 border-2  rounded-2xl h-8 bg-inherit w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                          value={formik.values.firstName}
                          onChange={formik.handleChange("firstName")}
                          onBlur={formik.handleBlur("firstName")}
                          type="text"
                          placeholder="First name"
                        />
                        <div className="mt-2 text-red-400 mb-2">
                          {formik.touched.firstName && formik.errors.firstName}
                        </div>
                      </div>
                      <div className="mb-4 mt-4">
                        <label
                          for=""
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Last name *
                        </label>
                        <input
                          className="border-emerald-500 border-2  rounded-2xl h-8 bg-inherit shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={formik.values.lastName}
                          onChange={formik.handleChange("lastName")}
                          onBlur={formik.handleBlur("lastName")}
                          type="text"
                          placeholder="Last name"
                        />
                        <div className="mt-2 text-red-400 mb-2">
                          {formik.touched.lastName && formik.errors.lastName}
                        </div>
                      </div>
                      <div className="mb-4 mt-4">
                        <label
                          for=""
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          User name *
                        </label>
                        <input
                          className="border-emerald-500 border-2  rounded-2xl h-8 bg-inherit shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={formik.values.userName}
                          onChange={formik.handleChange("userName")}
                          onBlur={formik.handleBlur("userName")}
                          type="text"
                          placeholder="User name"
                        />
                        <div className="mt-2 text-red-400 mb-2">
                          {formik.touched.userName && formik.errors.userName}
                        </div>
                      </div>
                      <div className="mb-4 mt-4">
                        <label
                          for=""
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Email *
                        </label>
                        <input
                          className="border-emerald-500 border-2  rounded-2xl h-8 bg-inherit shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={formik.values.email}
                          onChange={formik.handleChange("email")}
                          onBlur={formik.handleBlur("email")}
                          type="text"
                          placeholder="Email"
                        />
                        <div className="mt-2 text-red-400 mb-2">
                          {formik.touched.email && formik.errors.email}
                        </div>
                      </div>
                      <div className="mb-4 mt-4">
                        <label
                          for=""
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Time zone *
                        </label>
                        <input
                          className="border-emerald-500 border-2  rounded-2xl h-8 bg-inherit shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          // value={formik.values.name}
                          // onChange={formik.handleChange("name")}
                          // onBlur={formik.handleBlur("name")}
                          type="time"
                          id="appt"
                          name="appt"
                          min="09:00"
                          max="18:00"
                          // type="text"
                          placeholder="Time Zone"
                        />
                      </div>
                      <div className="mb-4 mt-4">
                        <label
                          for=""
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Password *
                        </label>
                        <input
                          className="border-emerald-500 border-2  rounded-2xl h-8 bg-inherit shadow appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={formik.values.password}
                          onChange={formik.handleChange("password")}
                          onBlur={formik.handleBlur("password")}
                          type="password"
                          placeholder="Password"
                        />
                        <div className="mt-2 text-red-400 mb-2">
                          {formik.touched.password && formik.errors.password}
                        </div>
                      </div>

                      <div className="grid justify-items-center mb-6">
                        <label className="block text-gray-500 font-bold">
                          <input
                            className="mr-2 leading-tight accent-emerald-500 shadow "
                            type="checkbox"
                            required
                          />
                          <span className="text-sm">
                            I agree to the{" "}
                            <span className="text-emerald-500">
                              Terms and Conditions.
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="grid  justify-items-center">
                        <button className="mx-auto w-36 rounded-2xl bg-emerald-500 h-9 text-black">
                          SIGN UP
                        </button>
                        <div className="justify-items-center flex my-3 mb-10">
                          <h1>Already have an account? </h1>
                          <Link className="ml-2 text-emerald-500"> Log In</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
