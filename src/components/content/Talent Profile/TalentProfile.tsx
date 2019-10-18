import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import CreativeChecks from './CheckBoxes/CreativeChecks';
import DevelopmentChecks from './CheckBoxes/DevelopmentChecks';
import ItNetworkChecks from './CheckBoxes/IT&NetworkChecks';
import MarketingChecks from './CheckBoxes/MarketingChecks';
import ProductProjectChecks from './CheckBoxes/ProductProjectChecks';
import SalesChecks from './CheckBoxes/SalesChecks';
import TranslationWritingChecks from './CheckBoxes/TranslationWritingChecks';
import VirtualAssistantChecks from './CheckBoxes/VirtualAssistantChecks';

import "./TalentProfile.css";

const TalentProfile: React.FC = () => {
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const [checkValue, setCheckValue] = React.useState("1");
  const setValue1= () => setCheckValue("1");
  const setValue2= () => setCheckValue("2");
  const setValue3= () => setCheckValue("3");
  const setValue4= () => setCheckValue("4");
  const setValue5= () => setCheckValue("5");
  const setValue6= () => setCheckValue("6");
  const setValue7= () => setCheckValue("7");
  const setValue8= () => setCheckValue("8");
 
  return (
    <div className="container">
        
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <div className="profileCV">
          <h1>Apply as talent</h1>
            <ButtonGroup toggle>
              <ToggleButton type="radio" name="radio" defaultChecked value="1">I have full CV</ToggleButton>
              <ToggleButton type="radio" name="radio" value="2" >I have no CV yet</ToggleButton>
            </ButtonGroup>
          </div>
        </Form.Row>
        <h1>Please enter your data and upload your CV.</h1>
        <h1>We will contact you afterwards with the next steps</h1>
        <h5>IN WICH AREA YOU WOULD LIKE TO WORK?</h5>

        <div className="selectionButtons">
            <Form.Row>
                <ButtonGroup toggle>
                <ToggleButton type="radio" name="radio" defaultChecked value="1" onClick={setValue1}>Creative & Design</ToggleButton>
                <ToggleButton type="radio" name="radio" value="2" onClick={setValue2}>Development</ToggleButton>
                <ToggleButton type="radio" name="radio" value="3" onClick={setValue3}>IT & Network</ToggleButton>
                <ToggleButton type="radio" name="radio" value="4" onClick={setValue4}>Marketing</ToggleButton>
                </ButtonGroup>
           </Form.Row>
          <Form.Row>
            <ButtonGroup toggle>
                <ToggleButton type="radio" name="radio" value="5" onClick={setValue5}>Product & Project</ToggleButton>
                <ToggleButton type="radio" name="radio" value="6" onClick={setValue6}>Sales</ToggleButton>
                <ToggleButton type="radio" name="radio" value="7" onClick={setValue7}>Transaltions & Writing</ToggleButton>
                <ToggleButton type="radio" name="radio" value="8" onClick={setValue8}>Virtual Assistant</ToggleButton>
                </ButtonGroup>
          </Form.Row>
        </div>
        <div className="checkBoxes">
            {checkValue === "1" && <CreativeChecks />}
            {checkValue === "2" && <DevelopmentChecks />}
            {checkValue === "3" && <ItNetworkChecks />}
            {checkValue === "4" && <MarketingChecks />}
            {checkValue === "5" && <ProductProjectChecks />}
            {checkValue === "6" && <SalesChecks />}
            {checkValue === "7" && <TranslationWritingChecks />}
            {checkValue === "8" && <VirtualAssistantChecks />}
           
        </div>
        <div className="selectedBoxes">
          {/*Aqui una lista de las selecciones hechas, de 3-10, con la opcion de poder eliminarlas
                si se desea, mirar si algun pluging hace esto */}
        </div>
        <h5>WHAT IS YOUR EXPERIENCE LEVEL IN THIS AREA?</h5>
        <div className="levelExp">
          {/**Son boxes de seleccion no p */}
          <Form.Row>
                <ButtonGroup toggle>
                    <ToggleButton type="radio" name="radio" defaultChecked value="1" onClick={setValue1}>Beguinner Level - Just started to work in this field</ToggleButton>
                    <ToggleButton type="radio" name="radio" value="2" onClick={setValue2}>Intermediate - Finalized first projects in this field</ToggleButton>
                    <ToggleButton type="radio" name="radio" value="3" onClick={setValue3}>Expert Level - I have deep expertise in this field</ToggleButton>
                </ButtonGroup>
           </Form.Row>
        </div>
        <h5>PREFERRED LOCATIONS</h5>
        <div className="locations">
            <Form.Row>
                <Form.Check type="checkbox" id="default-checkbox" label="I am only available for remote work"/>
                <Form.Check type="checkbox" id="default-checkbox" label="I am open to move to Germany"/>
                <Form.Check type="checkbox" id="default-checkbox" label="I wish to move to Germany"/>
            </Form.Row>
       
        </div>
        <h5>LANGUAGE SKILLS</h5>
        {/**Dropdown selectors 3 fijos y un cuarto que de la opcion de escribir el lenguaje */}
        <DropdownButton id="dropdown-basic-button" title="SPANISH">
          <Dropdown.Item href="#/action-1">native speaker</Dropdown.Item>
          <Dropdown.Item href="#/action-2">business fluent</Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            very good knowledge (fluently)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4">good knowledge</Dropdown.Item>
          <Dropdown.Item href="#/action-5">basic knowledge</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="GERMAN">
          <Dropdown.Item href="#/action-1">native speaker</Dropdown.Item>
          <Dropdown.Item href="#/action-2">business fluent</Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            very good knowledge (fluently)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4">good knowledge</Dropdown.Item>
          <Dropdown.Item href="#/action-5">basic knowledge</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="ENGLISH">
          <Dropdown.Item href="#/action-1">native speaker</Dropdown.Item>
          <Dropdown.Item href="#/action-2">business fluent</Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            very good knowledge (fluently)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4">good knowledge</Dropdown.Item>
          <Dropdown.Item href="#/action-5">basic knowledge</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-basic-button"
          title="OTRO IDIOMA A RELLENAR"
        >
          <Dropdown.Item href="#/action-1">native speaker</Dropdown.Item>
          <Dropdown.Item href="#/action-2">business fluent</Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            very good knowledge (fluently)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4">good knowledge</Dropdown.Item>
          <Dropdown.Item href="#/action-5">basic knowledge</Dropdown.Item>
        </DropdownButton>

        <Button type="submit">Save & Continues</Button>
      </Form>
    </div>
  );
};
export default TalentProfile;
