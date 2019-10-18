import React from 'react';
import Form from 'react-bootstrap/Form';


const ItNetworkChecks: React.FC = () => {

    return (
        <div className="container">
            <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="CRM / ERP-Process Management"/>
              <Form.Check type="checkbox" id="default-checkbox" label="IT Administration"/>
              <Form.Check type="checkbox" id="default-checkbox" label="IT Consulting"/>
            </Form.Row>
          <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Quality Management"/>
              <Form.Check type="checkbox" id="default-checkbox" label="IT Security"/>
            </Form.Row>
          
        </div>
    )

}
export default ItNetworkChecks;