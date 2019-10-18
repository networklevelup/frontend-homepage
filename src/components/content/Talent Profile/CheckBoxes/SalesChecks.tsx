import React from 'react';
import Form from 'react-bootstrap/Form';


const SalesChecks: React.FC = () => {

    return (
        <div className="container">
            <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Business Development"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Customer Service Support"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Key Account Management"/>
              
          </Form.Row>
          <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Telephone Sales"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Sales Representative"/>
            </Form.Row>
         
        </div>
    )

}
export default SalesChecks;