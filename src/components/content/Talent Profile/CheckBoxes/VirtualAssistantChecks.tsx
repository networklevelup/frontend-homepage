import React from 'react';
import Form from 'react-bootstrap/Form';


const VirtualAssistantChecks: React.FC = () => {

    return (
        <div className="container">
            <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Copywriting"/>
              <Form.Check type="checkbox" id="default-checkbox" label="CRM maintenance"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Documentation"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Presentations"/>
          </Form.Row>
          <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Research"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Scheduling & Meeting Organization"/>
              
            </Form.Row>
          <Form.Row>
                <Form.Check type="checkbox" id="default-checkbox" label="Travel Planning"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Website maintenance"/>
              
            </Form.Row>
        </div>
    )

}
export default VirtualAssistantChecks;