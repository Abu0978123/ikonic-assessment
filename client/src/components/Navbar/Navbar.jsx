import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,MDBInputGroup 
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import data from '../../data/data.json'

export default function Navbar() {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer>
        <MDBNavbarBrand><img src={data.logo} width={90}  alt="logo" /></MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex  w-auto '>
         <Link to={'/login'}><button type="button" className="btn btn-outline-primary">User</button></Link> 
          <Link to={'/admin/login'}><button type="button" className="btn btn-outline-secondary">Admin</button></Link>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}