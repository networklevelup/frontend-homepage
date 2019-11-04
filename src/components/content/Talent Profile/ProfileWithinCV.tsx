import React, { ChangeEventHandler, createElement } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import GroupCheckBoxes from "./GroupCheckBoxes";
import * as actions from "../../../actions/actions";

import "./TalentProfile.css";

import { IGlobalState } from "../../../reducers/reducers";
import { connect } from "react-redux";



const ProfileWithinCV: React.FC = () => {
  /* 
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  Esto de aqui es para validar el formulario, lo agregué al principio
  por otros motivos y tengo que ver si me hará falta o no
  */
  
  return (
    <div className="container">    
        <h1>Please enter your data and upload your CV.</h1>
        <h1>We will contact you afterwards with the next steps</h1>
        <h5>IN WICH AREA YOU WOULD LIKE TO WORK?</h5>
        <Form>

          <div className="selectionButtons">
            <GroupCheckBoxes />
          </div>
            
        <h5>WHAT IS YOUR EXPERIENCE LEVEL IN THIS AREA?</h5>
        <div className="levelExp">
          {/**Son boxes de seleccion no p */}
          <Form.Row>
                <ButtonGroup toggle>
                    <ToggleButton type="radio" name="radio" defaultChecked value="9">Beguinner Level - Just started to work in this field</ToggleButton>
                    <ToggleButton type="radio" name="radio" value="10">Intermediate - Finalized first projects in this field</ToggleButton>
                    <ToggleButton type="radio" name="radio" value="11">Expert Level - I have deep expertise in this field</ToggleButton>
                </ButtonGroup>
           </Form.Row>
        </div>
        <h5>PREFERRED LOCATIONS</h5>
        <div className="locations">
          
          <Form.Group as={Row}>
                <Form.Check type="radio" name="checkLocation" id="default-checkbox1" label="I am only available for remote work"/>
                <Form.Check type="radio" name="checkLocation" id="default-checkbox2" label="I am open to move to Germany"/>
                <Form.Check type="radio" name="checkLocation" id="default-checkbox3" label="I wish to move to Germany"/>
            </Form.Group>
          
            
       
        </div>
        <div className="languageskills">
        <h5>LANGUAGE SKILLS</h5>
        {/**Dropdown selectors 3 fijos y un cuarto que de la opcion de escribir el lenguaje */}
        <Form.Row>
        <Form.Group>
          <Form.Label>SPANISH</Form.Label>
          <Form.Control as="select">
            <option>native speaker</option>
            <option>business fluent</option>
            <option>very good knowledge (fluently)</option>
            <option>good knowledge</option>
            <option>basic knowledge</option>
          </Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label>ENGLISH</Form.Label>
          <Form.Control as="select">
            <option>native speaker</option>
            <option>business fluent</option>
            <option>very good knowledge (fluently)</option>
            <option>good knowledge</option>
            <option>basic knowledge</option>
          </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>GERMAN</Form.Label>
            <Form.Control as="select">
              <option>native speaker</option>
              <option>business fluent</option>
              <option>very good knowledge (fluently)</option>
              <option>good knowledge</option>
              <option>basic knowledge</option>
            </Form.Control>      
        </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
          <Form.Control type="text" placeholder="FURTHER LANGUAGE"></Form.Control>
            <Form.Control as="select">
              <option>native speaker</option>
              <option>business fluent</option>
              <option>very good knowledge (fluently)</option>
              <option>good knowledge</option>
              <option>basic knowledge</option>
            </Form.Control>      
          </Form.Group>
        </Form.Row>
        </div>
       
        <Button type="submit">Save & Continues</Button>
      </Form>
    </div>
  );
};

// const mapsStateToProps = (state: IGlobalState) => ({
//   selectCheks: state.selectCheks
// });
// const mapDispatchToProps = {
//   selectChecks: actions.setCheckBoxes
// }


export default ProfileWithinCV;

