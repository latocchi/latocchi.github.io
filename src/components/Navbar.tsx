import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-prussian-blue flex justify-center py-2 w-full">
      <ul className="flex items-center justify-center gap-x-2">
        <li className="border border-black rounded-lg">
          <Button
            className="bg-sunglow"
            type="button"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </li>
        <li className="border border-black rounded-lg">
          <Button
            className="bg-sunglow"
            type="button"
            onClick={() => navigate("/projects")}
          >
            Projects
          </Button>
        </li>
        <li className="border border-black rounded-lg">
          <Button
            className="bg-sunglow"
            type="button"
            onClick={() => navigate("/about")}
          >
            About
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
