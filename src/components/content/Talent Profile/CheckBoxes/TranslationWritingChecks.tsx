import React from 'react';
import Form from 'react-bootstrap/Form';


const TranslationWritingChecks: React.FC = () => {

    return (
        <div className="container">
            <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Academic Writing & Research"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Content Marketing Manager"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Creative Writing"/>
             
          </Form.Row>
          <Form.Row>
                <Form.Check type="checkbox" id="default-checkbox" label="Public Relations"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Technical Writing"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Translation"/>
          </Form.Row>
          
        </div>
    )

}
export default TranslationWritingChecks;