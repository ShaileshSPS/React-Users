import React, { useState } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/accordion";
import "jquery-ui/themes/base/all.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Contact = () => {
  const [contact, setContact] = useState({
    email: "",
    password: "",
  });

  const onInputChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const { email, password } = contact;

  const onSubmit = e => {
    e.preventDefault();
    if (
      $("input[name='email']").value === "" ||
      $("input[name='password']").value === ""
    ) {
      toast.error("Enter all details");
    }
    else {
      toast.success("We will get back to you!!");
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Page</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
