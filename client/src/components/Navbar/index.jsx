import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="mb-5">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>Book Store</Navbar.Brand>
        <Nav className="mr-auto">
          <div className="mt-1 px-1">
            <Link to="/">Books</Link>
          </div>
          <div className="mt-1 px-1">
            <Link to="/create">Add Book</Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
