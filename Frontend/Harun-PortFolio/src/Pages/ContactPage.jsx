import React from "react";

const ContactPage = () => {

  // 🔥 MAIL OPEN FUNCTION
  const handleEmail = () => {
    window.location.href = "mailto:hk2665550@gmail.com";
  };

  // 🔥 INSTAGRAM OPEN
  const handleInstagram = () => {
    window.open("https://instagram.com/its__harunkhark__786", "_blank");
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-red-900 text-white px-4">

      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg text-center">

        {/* 🔥 Heading */}
        <h2 className="text-3xl font-bold mb-6">
          Contact Me 📩
        </h2>

       

        {/* 🔥 EMAIL BUTTON */}
        <button
          onClick={handleEmail}
          className="w-full py-3 mb-4 bg-red-500 rounded-lg hover:bg-red-600 transition font-semibold"
        >
          Send Email 🚀
        </button>

        {/* 🔥 FALLBACK TEXT */}
        <p className="text-sm text-gray-400 mb-6">
          If Send Email button not working ,send Email Separately on:
          <br />
          <span className="text-white font-semibold">
            hk2665550@gmail.com
          </span>
        </p>

        {/* 🔥 INSTAGRAM BUTTON */}
        <button
          onClick={handleInstagram}
          className="w-full py-3 bg-pink-500 rounded-lg hover:bg-pink-600 transition font-semibold"
        >
          Connect on Instagram 📸
        </button>

      </div>

    </section>
  );
};

export default ContactPage;