"use client";
const secretKey = import.meta.env.VITE_SECRET_KEY;

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    consent: false,
  });
  const [emailError, setEmailError] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // success or error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.email) {
      setEmailError("Email is required.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");

    const templateParams = {
      name: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
      consent: formData.consent ? "Yes" : "No",
      "g-recaptcha-response": captchaToken,
    };
    setLoading(true);
    emailjs
      .send(serviceId, templateId, templateParams, publicKey) // secret keys
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setStatusType("success");
        setStatusMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          consent: false,
        });
        setTimeout(() => {
          setStatusMessage("");
          setStatusType("");
        }, 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setLoading(false);
        setStatusType("error");
        setStatusMessage("Something went wrong. Please try again.");
        setTimeout(() => {
          setStatusMessage("");
          setStatusType("");
        }, 3000);
      });
  };

  return (
    <>
      <div className="min-h-screen  flex flex-col items-center justify-center p-4 md:px-10 py-20">
        <div className="w-full max-w-6xl mb-8 text-center">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-orange-300 text-transparent bg-clip-text">
            Contact
          </h1>
        </div>
        <div className="w-full max-w-6xl flex flex-col md:flex-row  overflow-hidden gap-4">
          <div
            className="w-full md:w-2/5 bg-gradient-to-b from-orange-300 via-pink-400 to-purple-500 p-8 
                        text-white flex flex-col rounded-2xl dark:border "
          >
            <div className="flex-1">
              <Mail className="h-8 w-8 mb-6" />
              <h2 className="text-4xl font-bold mb-2">Contact Information</h2>
              <p className="text-lg mb-8">
                Please fill out the form, and I will get back to you shortly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-4" />
                <a
                  href="mailto:taxa.king@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white underline cursor-pointer">
                    taxa.king@gmail.com
                  </span>
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-4" />
                <span>Seoul | South Korea</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-4" />
                <span>Always reachable.</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 bg-white p-8 rounded-2xl dark:bg-white/20 dark:border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 mb-2 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white 
                    focus:ring-0 dark:bg-[#14121a] dark:focus:bg-[#14121a]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 mb-2 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 dark:bg-[#14121a] dark:focus:bg-[#14121a]"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 dark:bg-[#14121a] dark:focus:bg-[#14121a]"
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2 dark:text-white"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 dark:bg-[#14121a] dark:focus:bg-[#14121a]"
                  required
                ></textarea>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleCheckboxChange}
                  className="mt-1 mr-2 h-6 w-6 cursor-pointer"
                  required
                />
                <label
                  htmlFor="consent"
                  className="text-gray-700 dark:text-white"
                >
                  By submitting this form, you consent to the collection and use
                  of your information for {""}
                  <span className="text-orange-500 dark:text-yellow-300">
                    the purpose of responding
                  </span>{" "}
                  to your inquiry.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gray-800 hover:bg-blue-600 text-white font-medium rounded-4xl transition duration-300 flex items-center justify-center cursor-pointer"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : statusMessage ? (
                  <span
                    className={`${
                      statusType === "success"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {statusMessage}
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
