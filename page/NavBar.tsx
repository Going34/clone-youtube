import { videoData } from '../Data/NavBarMenuList';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { callFunction, setVideoData } from '../action/SetAllVideoData';
import React, { useEffect , useState , useRef } from 'react';

const NavBar = () => {
  const dispatch = useDispatch();

  let [search , setSearch] = useState("java");

  useEffect(() => {
    getData();
  }, []);

 const se = () => {
   dispatch(callFunction(search));
 }
  
  const getData = () => {
    dispatch(callFunction("java"));
  };
  return (
    <div>
      <Navbar
        fixed="top"
        className="justify-content-center bg-dark"
        bg="dark"
        expand="lg"
      >
        <Navbar.Brand className="re1" href="#">
          <img
            src="https://th.bing.com/th/id/OIP.mg_2wSShRmIrPpaXkyCk1wHaCt?w=342&h=127&c=7&r=0&o=5&pid=1.7"
            alt=""
            height="30px"
          />
        </Navbar.Brand>
        <Nav className="justify-content-center">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) =>  setSearch(e.target.value)}
            />
            <Button onClick={() => {se()}} variant="outline-success">Search</Button>
          </Form>
        </Nav>
        <button type="button" className="btn btn-primary">
          <i className="fa-regular fa-bell"></i>{' '}
          <span className="badge badge-light">9</span>
          <span className="sr-only">unread messages</span>
        </button>
        <div id="Profile">ss</div>
      </Navbar>
      
    </div>
  );
};

export default NavBar;
