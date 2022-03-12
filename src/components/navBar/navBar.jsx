import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  FormControl,
  Form,
} from "react-bootstrap";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { useState } from "react";
import styles from "./navBar.module.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = ({ saveParameter, clearSelections }) => {
  return (
    <Navbar className={`navbar-dark ${styles.navBar}`} expand="lg">
      <Container>
        <Navbar.Brand>
          <p className={styles.brand}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4589/4589842.png"
              width={70}
              alt=""
            />{" "}
            HungryDev
          </p>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.NavDropdown}>Home</Nav.Link>
            <NavDropdown
              className={styles.NavDropdown}
              title="Meal type"
              name="mealType"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                title="mealType"
                name="Breakfast"
                onClick={saveParameter}
              >
                Breakfast
              </NavDropdown.Item>
              <NavDropdown.Item
                title="mealType"
                name="Lunch"
                onClick={saveParameter}
              >
                Lunch
              </NavDropdown.Item>
              <NavDropdown.Item
                title="mealType"
                name="Dinner"
                onClick={saveParameter}
              >
                Dinner
              </NavDropdown.Item>
              <NavDropdown.Item
                title="mealType"
                name="Snack"
                onClick={saveParameter}
              >
                Snack
              </NavDropdown.Item>
              <NavDropdown.Item
                title="mealType"
                name="Teatime"
                onClick={saveParameter}
              >
                Tea time
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dish type" id="basic-nav-dropdown">
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Biscuits and cookies
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Bread
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Cereals
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Desserts
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Drinks
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Main course
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Pancakes
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Salad
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Sandwiches
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Soup
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Starter
              </NavDropdown.Item>
              <NavDropdown.Item title="dishType" onClick={saveParameter}>
                Sweets
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cousine type" id="basic-nav-dropdown">
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                American
              </NavDropdown.Item>
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                Asian
              </NavDropdown.Item>
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                Central Europe
              </NavDropdown.Item>
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                Eastern Europe
              </NavDropdown.Item>
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                French
              </NavDropdown.Item>
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                Italian
              </NavDropdown.Item>
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                Japanese
              </NavDropdown.Item>
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                Mediterrian
              </NavDropdown.Item>
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                Mexican
              </NavDropdown.Item>
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                Middle Eastern
              </NavDropdown.Item>
              <NavDropdown.Item title="cousineType" onClick={saveParameter}>
                South American
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Diet label" id="basic-nav-dropdown">
              <NavDropdown.Item title="diet" onClick={saveParameter}>
                Balanced
              </NavDropdown.Item>
              <NavDropdown.Item title="diet" onClick={saveParameter}>
                High-fiber
              </NavDropdown.Item>
              <NavDropdown.Item title="diet" onClick={saveParameter}>
                High-protein
              </NavDropdown.Item>
              <NavDropdown.Item title="diet" onClick={saveParameter}>
                Low-carb
              </NavDropdown.Item>
              <NavDropdown.Item title="diet" onClick={saveParameter}>
                Low-fat
              </NavDropdown.Item>
              <NavDropdown.Item title="diet" onClick={saveParameter}>
                Low-sodium
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Health label" id="basic-nav-dropdown">
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Alcohol-free
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Dairy-free
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Egg-free
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Gluten-free
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Keto-friendly
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Kosher
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Low-sugar
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                No-oil-added
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Paleo
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Pescatarian
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Pork-free
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Red-meat-free
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Soy-free
              </NavDropdown.Item>{" "}
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Vegan
              </NavDropdown.Item>
              <NavDropdown.Item title="health" onClick={saveParameter}>
                Vegetarian
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <button
              variant="outlined-light"
              onClick={clearSelections}
              className={styles.btn}
            >
              Clear all selections
            </button>
            <IconButton aria-label="favorites">
              <Link
                to="/favorite-recipes"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                <BsFillSuitHeartFill className={styles.heartIcon} />
              </Link>
            </IconButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
