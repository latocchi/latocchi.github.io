import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = ({ className }: { className?: string }) => {
  const myName = "Jaycy Ivan Banaga";
  return (
    <footer className={`bg-prussian-blue p-5 mt-24 ${className}`}>
      <div className="text-center">
        <p>Designed & built with React and Tailwind CSS</p>
      </div>
      <div className="flex gap-3 md:gap-8 lg:gap-6 flex-wrap justify-center py-5">
        <Button
          className="inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 group"
          size="icon"
          onClick={() =>
            window.open("https://www.linkedin.com/in/jaycybanaga", "_blank")
          }
        >
          <span className="inline-flex items-center justify-center w-7 h-7 bg-white">
            <FaLinkedin
              className="size-9 text-gray-700 group-hover:text-blue-500 transition-colors duration-200"
              aria-hidden="true"
            />
          </span>
          <span className="sr-only">LinkedIn</span>
        </Button>
        <Button
          className="inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 group"
          size="icon"
          onClick={() => window.open("https://github.com/latocchi", "_blank")}
        >
          <span className="inline-flex items-center justify-center w-9 h-9 bg-white rounded-full">
            <FaGithub
              className="size-9 text-gray-700 group-hover:text-black transition-colors duration-200"
              aria-hidden="true"
            />
          </span>
          <span className="sr-only">GitHub</span>
        </Button>
        <Button
          className="inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 group"
          size="icon"
          onClick={() =>
            window.open("https://www.facebook.com/jaycyivan31", "_blank")
          }
        >
          <span className="inline-flex items-center justify-center w-9 h-9 bg-white rounded-full">
            <FaFacebook
              className="size-9 text-gray-700 group-hover:text-blue-600 transition-colors duration-200"
              aria-hidden="true"
            />
          </span>
          <span className="sr-only">Facebook</span>
        </Button>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} {myName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
