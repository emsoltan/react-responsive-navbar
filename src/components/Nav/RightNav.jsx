import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  font-family: "Lato", sans-serif;

  li {
    &:hover > a {
      background-color: #0d2538;
      color: #fff;
      transition: all 0.3s linear;
    }
    a,
    a:before,
    a:after {
      text-decoration: none;
      color: #0d2538;
      cursor: pointer;
      padding: 0.75rem 1.25rem;
      border-radius: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 48rem) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 18.75rem;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    justify-content: center;
    li {
      margin: 3rem 0;
      a,
      a:before,
      a:after {
        color: #ffff;
        cursor: pointer;
      }
      &:hover > a {
        background-color: #fff;
        color: #0d2538;
        transition: all 0.3s linear;
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
      <li>
        <a href="/services"> Services</a>
      </li>
      <li>
        <a href="/contact">Contact Us</a>
      </li>
    </Ul>
  );
};

export default RightNav;
