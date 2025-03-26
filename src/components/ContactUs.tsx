"use client";
import React from "react";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { Formik} from "formik";
import * as Yup from "yup";

// Define Type for Form Values
interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  // Define the validation schema
  const contactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().optional(), // No requirement for message
  });

  // Initial values for the form
  const initialValuesContact: ContactFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Handle form submission
  const handleContactSubmit = (
    values: ContactFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Form Values:", values);
    resetForm();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-4 ">
      <div className="flex flex-col items-center mb-12">
        <span className="text-neutral-400 uppercase tracking-widest text-sm">
          contact us
        </span>
        <h1 className="text-4xl font-bold mt-2">Get in Touch</h1>
        <div className="mt-4 h-1 w-20 bg-blue-600 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Information */}
        <div className=" lg:w-1/3 bg-black rounded-[25px] p-8 text-white shadow-2xl transform transition-all duration-300 hover:translate-y-[-5px]">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Contact Information
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-blue-600/10 rounded-lg group-hover:bg-blue-600/20 transition-all">
                <Mail className="w-6 h-6 text-[#ed9702]" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Email Us</h3>
                <p className="text-neutral-300 hover:text-blue-400 transition-colors">
                  info@thinkdesign.build
                </p>
                <p className="text-neutral-300 hover:text-blue-400 transition-colors">
                  support@thinkdesign.build
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-blue-600/10 rounded-lg group-hover:bg-blue-600/20 transition-all">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Call Us</h3>
                <p className="text-neutral-300">+91 1234567890</p>
                <p className="text-neutral-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-blue-600/10 rounded-lg group-hover:bg-blue-600/20 transition-all">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Business Hours</h3>
                <p className="text-neutral-300">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: By appointment only
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 bg-black rounded-[25px] p-8 text-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Send Us a Message
          </h2>

          <Formik
            initialValues={initialValuesContact}
            validationSchema={contactSchema}
            onSubmit={handleContactSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-200">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white"
                      placeholder="Enter your name"
                    />
                    {touched.name && errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-200">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white"
                      placeholder="Enter your email"
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white"
                    placeholder="Enter subject"
                  />
                  {touched.subject && errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white"
                    placeholder="Enter your message"
                  />
                  {touched.message && errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;