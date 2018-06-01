import React, { PureComponent } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class PostJobForm extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="PostJobForm">
        <div className="PostJobForm-container">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter your job title" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Job Category</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Home</option>
                <option>Event</option>
                <option>Education</option>
                <option>Food</option>
                <option>Information</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Job Description </Label>
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
            <Button color="warning">Review Job</Button>{' '}
            <Button color="warning">Post Job</Button>{' '}
          </Form>
        </div>
      </div>
    );
  }
}
