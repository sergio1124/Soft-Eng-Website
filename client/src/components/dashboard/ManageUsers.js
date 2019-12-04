import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
    const { users } = this.props.auth;
    return <div>{users}</div>;
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
