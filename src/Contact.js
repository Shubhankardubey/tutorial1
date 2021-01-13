import React, {Component} from "react";
import { Route , Link } from "react-router-dom";

const Contacts = ({ match }) => <p>{match.params.id}</p>

class Contact extends React.Component{

  render(){
    const {url} = this.props.match
    return (
      <div>
        Contact Page
        <ul>
          <li>
            <Link to="/contact/1" >Contact 1</Link>
            </li>
            <li>
            <Link to="/contact/2" >Contact 2</Link>
            </li>
            <li>
            <Link to="/contact/3" >Contact 3</Link>
            </li>
          </ul>
          <Route path="/contact/:id" component={Contacts} />
        </div>
    )
  }
}

export default Contact;
