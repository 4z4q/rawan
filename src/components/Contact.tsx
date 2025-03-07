"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="text-white py-32 max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            className="text-5xl text-gray-300 font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact <span className="text-purple-500">Information</span>
          </motion.h2>

          <motion.div
            className="glass p-8 rounded-2xl space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>

              <Link
                href="tel:+967780842038 "
                className="text-2xl font-semibold hove:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                +967 780 842 038
                <span className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out">
                  ↗
                </span>
              </Link>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>

              <Link
                href="mailto:skodrmh@gmail.com"
                className="text-2xl font-semibold hove:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                skodrmh@gmail.com
                <span className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out">
                  ↗
                </span>
              </Link>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Study In</p>

              <p className="text-xl  hove:text-gray-400 transition duration-300 flex items-center gap-2">
                National University,
                <br /> Faculty of Information Technology,
                <br /> in my fourth
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8431.3579078516!2d44.16660488292191!3d13.977003156278963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1741387238964!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
