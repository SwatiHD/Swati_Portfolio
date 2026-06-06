import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="pb-20 px-6 scroll-mt-20 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Get In Touch</h2>

        <p className="max-w-xl mx-auto mt-6 leading-7 text-slate-400">
          I’m currently looking for frontend developer opportunities and
          collaborating on modern React applications.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/swati-hd"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-teal-400 transition-all duration-300 hover:-translate-y-1"
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">LinkedIn</h3>

            <p className="text-slate-400 leading-7">
              Connect with me professionally and explore my experience,
              projects, and recommendations.
            </p>
          </div>

          <FaLinkedin className="text-4xl text-teal-400 mt-8 self-center" />
        </a>

        {/* Gmail */}
        <a
          href="mailto:swatihd12@gmail.com"
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-teal-400 transition-all duration-300 hover:-translate-y-1"
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Gmail</h3>

            <p className="text-slate-400 leading-7">
              Reach out for tech explorations, collaborations, or general
              discussions.
            </p>
          </div>

          <MdEmail className="text-4xl text-teal-400 mt-8 self-center" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/swa.t888/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-teal-400 transition-all duration-300 hover:-translate-y-1"
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Instagram</h3>

            <p className="text-slate-400 leading-7">
              Follow my journey, creative work, and behind-the-scenes updates.
            </p>
          </div>

          <FaInstagram className="text-4xl text-teal-400 mt-8 self-center" />
        </a>
      </div>
    </section>
  );
}
