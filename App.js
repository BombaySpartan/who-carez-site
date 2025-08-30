
import React from "react";

export default function WhoCarezHomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold tracking-wide">Who Carez</h1>
        <p className="text-xl mt-4 text-gray-600 italic">Rise up and start caring.</p>
      </header>

      <section className="max-w-3xl mx-auto text-center py-8">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          Who Carez is a not-for-profit movement dedicated to empowering everyday people to show up, step up,
          and care for one another in meaningful ways. We believe that community begins with compassion—and
          we’re here to light that spark.
        </p>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 p-6">
          <div>
            <h3 className="text-xl font-bold mb-2">🫶 Grassroots Impact</h3>
            <p>
              Supporting individuals and groups who are making a difference in their neighborhoods—no act of care is too small.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">📣 Awareness & Advocacy</h3>
            <p>
              Creating resources, campaigns, and content that inspire and educate people on how to care more deeply and show up more often.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">🤝 Collaborative Partnerships</h3>
            <p>
              Building bridges with other nonprofits, community leaders, and caring humans to scale love and impact.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">Want to Get Involved?</h2>
        <p className="text-lg mb-4">
          We’re working on volunteer opportunities, donation drives, and local projects. Stay tuned—or better yet,
          help us build it. 
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all">
          Contact Us
        </button>
      </section>

      <footer className="text-center text-gray-500 text-sm py-8">
        &copy; {new Date().getFullYear()} Who Carez. All rights reserved.
      </footer>
    </div>
  );
}
