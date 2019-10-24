import React from 'react';
import Form from 'react-bootstrap/Form';


const CreativeChecks: React.FC = () => {

    
  const [firstCheck, setFirstCheck] = React.useState(false);

  const setingFirstCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstCheck(event.target.checked);
   
  };
  console.log(firstCheck);

    return (
        <div className="container">
            <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" onChange={setingFirstCheck} label="Animation / Motion Graphics"/>
              <Form.Check type="checkbox" id="default-checkbox" label="AR / VR Design"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Audio Production"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Brand Strategy"/>
          </Form.Row>
          <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Event Management"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Graphic Design"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Image Editing / Retouching"/>
            </Form.Row>
          <Form.Row>
              <Form.Check type="checkbox" id="default-checkbox" label="Photography"/>
              <Form.Check type="checkbox" id="default-checkbox" label="Video Production"/>
            </Form.Row>
            <div className="container checked">
            {firstCheck && <span>Animation & Motion graphics</span>}
            </div>
        </div>
    )

}
export default CreativeChecks;