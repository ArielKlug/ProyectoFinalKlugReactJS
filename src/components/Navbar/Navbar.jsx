import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <Grid
        h="150px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        pos="fixed"
        w="100%"
        zIndex={2}
        top="0"
        className={styles.nav}
      >
        <GridItem p="2" className="flexStart">
          <Link to="/">
            <img
              className={styles.logo}
              src="../../../public/img/Logo-infinity.png"
              alt="Logo infinity"
            />
          </Link>
        </GridItem>

        <Menu className={styles.navItems}>
          <GridItem className="flexAround" p="2">
            <nav className={styles.menuDesplegado}>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRODUCTOS
                </a>
                <ul className="dropdown-menu" >
                  <Link to="/electronics">
                    <li className="dropdown-item">Electrónica</li>
                  </Link>
                  <Link to="/jewelery">
                    <li className="dropdown-item">Joyería</li>
                  </Link>
                  <Link to="/men's clothing">
                    <li className="dropdown-item">Ropa de hombre</li>
                  </Link>
                  <Link to="/women's clothing">
                    <li className="dropdown-item">Ropa de mujer</li>
                  </Link>
                </ul>
              </li>
              <NavLink to="/">
                <p>HOME</p>
              </NavLink>
              <Link to="/carrito">
                <CartWidget />
              </Link>
            </nav>
          </GridItem>
        </Menu>
      </Grid>
    </div>
  );
};

export default Navbar;
