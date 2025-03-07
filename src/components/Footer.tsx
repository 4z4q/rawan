import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/4z4q", Icon: AiFillGithub, label: "GitHub"  },
  { href: "https://x.com/skodr3", Icon: AiOutlineTwitter, label: "X (Twitter)" },
  { href: "https://www.facebook.com/share/16CxH7vSJz/", Icon: AiFillFacebook, label: "Facebook" },
  { href: "https://instagram.com/4z4_q", Icon: AiFillInstagram, label: "Instagram" },
  { href: "https://t.me/TP_X1", Icon: FaTelegramPlane, label: "Telegram" },
];

export const Footer = () => {
  return (
    <footer className="py-8 max-w-[1200px] mx-auto px-4">
      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200">© 2024. All rights reserved.</p>

        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-gray-400 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};
