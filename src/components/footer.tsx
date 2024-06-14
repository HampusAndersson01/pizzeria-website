import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const footerData = {
  openingHours: [
    {
      day: "Monday 1/1-24",
      hours: "12:00-21:00",
      note: "",
    },
    {
      day: "Mon",
      hours: "Closed",
      note: "",
      isClosed: true,
    },
    {
      day: "Tue - Fri",
      hours: "11:30 - 21:00",
      note: "Closed for lunch 14:30 - 16:00",
      isClosed: false,
    },
    {
      day: "Sat",
      hours: "12:00 - 21:00",
      note: "",
    },
    {
      day: "Sun (weekends)",
      hours: "12:00 - 21:00",
      note: "",
    },
  ],
  contact: {
    phone: "0340-123456",
  },
  location: {
    address: "123 Mock Address, London",
    postalCode: "123 45 London, UK",
    social: [
      {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/yourprofile",
      },
      {
        icon: <FaFacebook />,
        url: "https://www.facebook.com/yourprofile",
      },
    ],
  },
  copyright: {
    year: 2024,
    name: "Hampus Andersson",
    github: "https://github.com/HampusAndersson01",
  },
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Secondary Footer Section */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {/* Column 1: Opening Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            {footerData.openingHours.map((item, index) => (
              <p key={index} className="text-sm">
                {item.day}:{" "}
                {item.isClosed ? (
                  <span className="text-red-600">{item.hours}</span>
                ) : (
                  item.hours
                )}
                {item.note && (
                  <span className="text-red-600">
                    <br />
                    <em>{item.note}</em>
                  </span>
                )}
              </p>
            ))}
          </div>

          {/* Column 2: Contact */}
          <div className="text-center md:text-center">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              Phone:{" "}
              <a
                href={`tel:${footerData.contact.phone}`}
                className="text-Highlight hover:underline transition-text"
              >
                {footerData.contact.phone}
              </a>
            </p>
          </div>

          {/* Column 3: Location */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <p className="text-sm">
              {footerData.location.address}
              <br />
              {footerData.location.postalCode}
            </p>
            <p className="text-sm flex justify-center md:justify-end mt-4">
              {footerData.location.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`hover:text-Highlight text-3xl transition-text ${
                    index > 0 ? "ml-4" : ""
                  }`}
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-4 border-t border-gray-600 text-center md:text-start">
        © {footerData.copyright.year}{" "}
        <a
          href={footerData.copyright.github}
          className="text-Highlight hover:underline transition-text"
          target="_blank"
        >
          {footerData.copyright.name}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
