import React from 'react';
import Form from 'react-bootstrap/Form';


const MarketingChecks: React.FC = () => {

    return (
        <div className="container">
            <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Affiliate Marketing"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Digital Marketing"/>
              <Form.Check type="checkbox" id="default-checkbox" label="E-Mail Marketing"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Market Research"/>
          </Form.Row>
          <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Marketing Strategy"/>
              <Form.Check type="checkbox" id="default-checkbox" label="SEA / SEO Management"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Social Media Marketing"/>
            </Form.Row>
          </div>
    )

}
export default MarketingChecks;