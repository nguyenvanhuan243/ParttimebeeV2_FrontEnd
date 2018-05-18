/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class EditProfileForm extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="EditProfileForm">
        <div className="EditProfileForm-container">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter Your Password" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Confirm Password </Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter your confirm password" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Contact Name </Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter your contact name" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Company Name </Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter your company name" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Address(optional) </Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter your address" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Phone(optional) </Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter your phone" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Website(optional) </Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Enter your website" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description(optional) </Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Avatar</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                Its a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <Button>
              Update Profile
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
