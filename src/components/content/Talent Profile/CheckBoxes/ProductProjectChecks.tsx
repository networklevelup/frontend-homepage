import React from 'react';
import Form from 'react-bootstrap/Form';


const ProductProjectChecks: React.FC = () => {

    return (
        <div className="container">
            <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Productmanagement"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Projectmanagement"/>
            </Form.Row>
          
        </div>
    )

}
export default ProductProjectChecks;