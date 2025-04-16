"use client";

import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
    consent: false,
  });

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
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="min-h-screen  flex flex-col items-center justify-center p-4 md:px-10 py-20">
        <div className="w-full max-w-6xl mb-8 text-center">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-orange-300 text-transparent bg-clip-text">
            Contact
          </h1>
        </div>
        <div className="w-full max-w-6xl flex flex-col md:flex-row  overflow-hidden  gap-4">
          <div className="w-full md:w-2/5 bg-gradient-to-b from-orange-300 via-pink-400 to-purple-500 p-8 text-white flex flex-col rounded-2xl">
            <div className="flex-1">
              <Mail className="h-8 w-8 mb-6" />
              <h2 className="text-4xl font-bold mb-2">Contact Information</h2>
              <p className="text-lg mb-8">
                Please fill out the form, and I will get back to you shortly.
              </p>
            </div>

            <div className="space-y-6">
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

          <div className="w-full md:w-3/5 bg-white p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
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
                  className="mt-1 mr-2"
                />
                <label htmlFor="consent" className="text-gray-700">
                  By submitting this form, you consent to the collection and use
                  of your information for {""}
                  <span className="text-orange-500">
                    the purpose of responding
                  </span>{" "}
                  to your inquiry.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gray-800 hover:bg-blue-600  text-white font-medium rounded-4xl transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
