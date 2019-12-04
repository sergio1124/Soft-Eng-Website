import React from "react";
import { Link } from "react-router-dom";

export const FinanceButton = () => {
  return (
    <>
      <h5>Finance Links: </h5>
      <Link to="/dashboard">Finance Reports | </Link>
      <Link to="/dashboard">Accounts Payable | </Link>
      <Link to="/dashboard">Accounts Receivables | </Link>
      <Link to="/dashboard">Tax</Link>
      <br></br>
    </>
  );
};

export const SalesButton = () => {
  return (
    <>
      <h5>Sales Links: </h5>
      <Link to="/dashboard">Sales Reports | </Link>
      <Link to="/dashboard">Sales Leads | </Link>
      <Link to="/dashboard">Sales Demo | </Link>
      <Link to="/dashboard">Tax</Link>
      <br></br>
    </>
  );
};

export const EngineerButton = () => {
  return (
    <>
      <h5>Engineer Links: </h5>
      <Link to="/dashboard">Application Monitoring | </Link>
      <Link to="/dashboard">Tech Support | </Link>
      <Link to="/dashboard">App Development | </Link>
      <Link to="/dashboard">App Admin | </Link>
      <Link to="/dashboard">Release Management</Link>
      <br></br>
    </>
  );
};

export const HRButton = () => {
  return (
    <>
      <h5>HR Links: </h5>
      <Link to="/dashboard">New Hire | </Link>
      <Link to="/dashboard">On-boarding | </Link>
      <Link to="/dashboard">Benefits | </Link>
      <Link to="/dashboard">Payroll | </Link>
      <Link to="/dashboard">Terminations | </Link>
      <Link to="/dashboard">HR Reports</Link>
      <br></br>
    </>
  );
};
