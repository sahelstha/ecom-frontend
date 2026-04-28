import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen py-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6207749/pexels-photo-6207749.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-sm"></div>

      {/* Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mb-6">
          We would love to hear from you! Please fill out the form below or
          contact us directly.
        </p>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Contact Information
          </h2>

          <div className="flex flex-col items-center space-y-3 mt-4">
            <div className="flex items-center">
              <FaPhone className="text-indigo-600 mr-2 rotate-90" />
              <span className="text-gray-600">+977-9869221708</span>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="text-indigo-600 mr-2" />
              <span className="text-gray-600">sahel.xtha@gmail.com</span>
            </div>

            <div className="flex items-center">
              <FaMapMarker className="text-indigo-600 mr-2" />
              <span className="text-gray-600">123 Patan, Lalitpur, Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
