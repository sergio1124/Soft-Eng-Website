import React, { Component } from "react";
// import { Container, ListGroup, ListGroupItem } from "reactstrap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/authActions";

class ManageUsers extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  //   onDeleteClick = id => {
  //     this.props.deleteItem(id);
  //   };

  render() {
    //const { users } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Manage Users</b>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

ManageUsers.propTypes = {
  getUsers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getUsers })(ManageUsers);
