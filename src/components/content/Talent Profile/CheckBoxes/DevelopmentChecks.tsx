import React from 'react';
import Form from 'react-bootstrap/Form';


const DevelopmentChecks: React.FC = () => {

    return (
        <div className="container">
            <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="AR / VR Development"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Back-End Development"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Development Coach"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Front-End Development"/>
          </Form.Row>
          <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Full Stack Development"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Mobile App Development"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Software Development"/>
            </Form.Row>
          <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="UX / UI Design"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Web Development"/>
            </Form.Row>
        </div>
    )

}
export default DevelopmentChecks;