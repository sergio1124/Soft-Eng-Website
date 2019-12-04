import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import {
  FinanceButton,
  SalesButton,
  EngineerButton,
  HRButton
} from "../buttons/FinanceButton";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    let financeButton;
    let salesButton;
    let engineerButton;
    let hrButton;

    if (user.financeAdmin === "true") {
      financeButton = <FinanceButton />;
    }
    if (user.salesAdmin === "true") {
      salesButton = <SalesButton />;
    }
    if (user.engineerAdmin === "true") {
      engineerButton = <EngineerButton />;
    }
    if (user.hrAdmin === "true") {
      hrButton = <HRButton />;
    }

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged in
              </p>
            </h4>
            {financeButton}
            {salesButton}
            {engineerButton}
            {hrButton}
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
