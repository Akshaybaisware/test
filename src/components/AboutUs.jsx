import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 p-4">
      <div className="max-w-6xl w-full bg-black shadow-md rounded-lg p-4">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-blue-600">Code Craze Software Solution</span>, your number one source for all things software. We're dedicated to providing you the very best of software solutions, with an emphasis on reliability, customer service, and uniqueness.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Founded in 2021 by Akahay Baisware, Code Craze Software Solution has come a long way from its beginnings. When Akahay first started out, his passion for cutting-edge technology and providing the best solutions for his clients drove him to start his own business.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We now serve customers all over the world and are thrilled to be a part of the software industry. We specialize in a range of services including:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li className="mb-2"><span className="font-semibold text-blue-600">UI/UX Design</span>: Creating visually stunning and user-friendly interfaces to ensure an exceptional user experience.</li>
          <li className="mb-2"><span className="font-semibold text-blue-600">Web Development</span>: Developing robust, scalable, and efficient web applications tailored to meet your business needs.</li>
          <li className="mb-2"><span className="font-semibold text-blue-600">SEO Services</span>: Implementing effective SEO strategies to enhance your online presence and drive organic traffic to your website.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          At Code Craze, we believe in continuous learning and adaptation to new trends and technologies to provide innovative solutions. We have successfully delivered numerous projects, focusing on the following areas:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li className="mb-2"><span className="font-semibold text-blue-600">E-commerce Platforms</span>: Building feature-rich and user-friendly e-commerce websites that drive sales and enhance customer satisfaction.</li>
          <li className="mb-2"><span className="font-semibold text-blue-600">Corporate Websites</span>: Designing and developing professional websites that effectively communicate your brand message and engage your audience.</li>
          <li className="mb-2"><span className="font-semibold text-blue-600">Custom Web Applications</span>: Creating bespoke web applications that cater to unique business requirements, ensuring efficiency and productivity.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Our team of experts is committed to delivering high-quality solutions that exceed your expectations. We hope you enjoy our products and services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
       
      </div>
    </div>
  );
}

export default AboutUs;
