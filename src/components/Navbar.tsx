import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-600 flex justify-center py-2 w-screen">
        <ul className="flex items-center justify-center gap-x-2">
          <li className="border border-black rounded-lg">
            <Button type="button" onClick={() => navigate("/")}>Home</Button>
          </li>
          <li className="border border-black rounded-lg">
            <Button type="button" onClick={() => navigate("/projects")}>Projects</Button>
          </li>
          <li className="border border-black rounded-lg">
            <Button type="button" onClick={() => navigate("/about")}>About</Button>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar