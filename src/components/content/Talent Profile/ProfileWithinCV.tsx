import React, { ChangeEventHandler, createElement } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';

import "./TalentProfile.css";


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

    const [checkValue, setCheckValue] = React.useState("1");
    const setValue1= () => setCheckValue("1");
    const setValue2= () => setCheckValue("2");
    const setValue3= () => setCheckValue("3");
    const setValue4= () => setCheckValue("4");
    const setValue5= () => setCheckValue("5");
    const setValue6= () => setCheckValue("6");
    const setValue7= () => setCheckValue("7");
    const setValue8= () => setCheckValue("8");

   const [checkedState, setstate] = React.useState({
      Animation: "",
      ARVRDesign: "",
      AudioProduction: "",
      BrandStrategy: "",
      EventManagemet: "",
      GraphicDesign: "",
      IMGEditRetouch: "",
      Photography: "",
      VideoProduction: "",
      ARVRDevelopment: "",
      BackDevelopment: "",
      DevepCoach: "",
      FrontDev: "",
      FullStackDev: "",
      MobileAppDev: "",
      SoftwareDev: "",
      UXUIDesign: "",
      WebDev: "",
      CRM: "",
      ITAdmin: "",
      ITConsulting: "",
      QM: "",
      ITSecurity: "",
      AffiliateMarketing:"",
      DigitalMarketing: "",
      EmailMarketing: "",
      MarketResearch: "",
      MarketingStrategy: "",
      SEOManagement: "",
      SMM: "",
      ProductManagement:"",
      ProjectManagement:"",
      BusinessDev: "",
      CSSupport: "",
      KAManagement: "",
      TelephoneSales: "",
      SalesRepresentative: "",
      WritingResearch: "",
      MarketingManagent: "",
      CreativeWriting: "",
      PublicRelations: "",
      TechnicalWriting: "",
      Translation: "",
      Copywriting: "",
      CRMMaintenance:"",
      Documentation: "",
      Presentations: "",
      Research: "",
      Sheduling: "",
      TravelPlanning: "",
      WebMaintenance: ""

   });
   
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
       setstate({
           ...checkedState,
           [event.target.name]: value
       });
   }

   console.log("Los estados:" + JSON.stringify(checkedState)); 
  
  return (
    <div className="container">    
        <h1>Please enter your data and upload your CV.</h1>
        <h1>We will contact you afterwards with the next steps</h1>
        <h5>IN WICH AREA YOU WOULD LIKE TO WORK?</h5>
        <Form>
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
            {checkValue === "1" && <div className="container Creative">
              <Form.Row>
                    <Form.Check type="checkbox" id="creative-checkbox1" name="Animation"  onChange={handleChange} label="Animation / Motion Graphics"/>
                    <Form.Check type="checkbox" id="creative-checkbox2" name="ARVRDesign"  onChange={handleChange} label="AR / VR Design"/>
                    <Form.Check type="checkbox" id="creative-checkbox3" name="AudioProduction" onChange={handleChange} label="Audio Production"/>
                    <Form.Check type="checkbox" id="creative-checkbox4" name="BrandStrategy" onChange={handleChange} label="Brand Strategy"/>
              </Form.Row>
              <Form.Row>
                    <Form.Check type="checkbox" id="creative-checkbox5" name="EventManagemet" onChange={handleChange} label="Event Management"/>
                    <Form.Check type="checkbox" id="creative-checkbox6" name="GraphicDesign" onChange={handleChange} label="Graphic Design"/>
                    <Form.Check type="checkbox" id="creative-checkbox7" name="IMGEditRetouch" onChange={handleChange} label="Image Editing / Retouching"/>
                  </Form.Row>
              <Form.Row>
                    <Form.Check type="checkbox" id="creative-checkbox8" name="Photography" onChange={handleChange} label="Photography"/>
                    <Form.Check type="checkbox" id="creative-checkbox9" name="VideoProduction" onChange={handleChange} label="Video Production"/>
              </Form.Row>
            </div>}            
            {checkValue === "2" && <div className="container Developments">
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox10" name="ARVRDevelopment" onChange={handleChange} label="AR / VR Development"/>
                  <Form.Check type="checkbox" id="creative-checkbox11" name="BackDevelopment" onChange={handleChange} label="Back-End Development"/>
                  <Form.Check type="checkbox" id="creative-checkbox12" name="DevepCoach" onChange={handleChange} label="Development Coach"/>
                  <Form.Check type="checkbox" id="creative-checkbox13" name="FrontDev" onChange={handleChange} label="Front-End Development"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox14" name="FullStackDev" onChange={handleChange} label="Full Stack Development"/>
                  <Form.Check type="checkbox" id="creative-checkbox15" name="MobileAppDev" onChange={handleChange} label="Mobile App Development"/>
                  <Form.Check type="checkbox" id="creative-checkbox16" name="SoftwareDev" onChange={handleChange} label= "Software Development"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox17" name="UXUIDesign" onChange={handleChange} label="UX / UI Design"/>
                  <Form.Check type="checkbox" id="creative-checkbox19" name="WebDev" onChange={handleChange} label="Web Development"/>
              </Form.Row>
            </div>}
            {checkValue === "3" && <div className="container ITNetworks">
              <Form.Row>
                <Form.Check type="checkbox" id="creative-checkbox20" name="CRM" onChange={handleChange} label="CRM / ERP-Process Management"/>
                <Form.Check type="checkbox" id="creative-checkbox21" name="ITAdmin" onChange={handleChange} label="IT Administration"/>
                <Form.Check type="checkbox" id="creative-checkbox22" name="ITConsulting" onChange={handleChange} label="IT Consulting"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox23" name="QM" onChange={handleChange} label="Quality Management"/>
                  <Form.Check type="checkbox" id="creative-checkbox24" name="ITSecurity" onChange={handleChange} label="IT Security"/>
              </Form.Row>              
            </div>}
            {checkValue === "4" && <div className="container Marketing">
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox25" name="AffiliateMarketing" onChange={handleChange} label="Affiliate Marketing"/>
                  <Form.Check type="checkbox" id="creative-checkbox26" name="DigitalMarketing" onChange={handleChange} label="Digital Marketing"/>
                  <Form.Check type="checkbox" id="creative-checkbox27" name="EmailMarketing" onChange={handleChange} label="E-Mail Marketing"/>
                  <Form.Check type="checkbox" id="creative-checkbox28" name="MarketResearch" onChange={handleChange} label="Market Research"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox29" name="MarketingStrategy" onChange={handleChange} label="Marketing Strategy"/>
                  <Form.Check type="checkbox" id="creative-checkbox30" name="SEOManagement" onChange={handleChange} label="SEA / SEO Management"/>
                  <Form.Check type="checkbox" id="creative-checkbox31" name="SMM" onChange={handleChange} label="Social Media Marketing"/>
              </Form.Row>
            </div>}
            {checkValue === "5" && <div className="container ProductProject">
              <Form.Row>
                <Form.Check type="checkbox" id="creative-checkbox32" name="ProductManagement" onChange={handleChange} label="Product Management"/>
                <Form.Check type="checkbox" id="creative-checkbox33" name="ProjectManagement" onChange={handleChange} label="Project Management"/>
              </Form.Row>
            </div>}
            {checkValue === "6" && <div className="container">
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox34" name="BusinessDev" onChange={handleChange} label="Business Development"/>
                  <Form.Check type="checkbox" id="creative-checkbox35" name="CSSupport" onChange={handleChange} label="Customer Service Support"/>
                  <Form.Check type="checkbox" id="creative-checkbox36" name="KAManagement" onChange={handleChange} label="Key Account Management"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox37" name="TelephoneSales" onChange={handleChange} label="Telephone Sales"/>
                  <Form.Check type="checkbox" id="creative-checkbox38" name="SalesRepresentative" onChange={handleChange} label="Sales Representative"/>
              </Form.Row>            
            </div>}
            {checkValue === "7" && <div className="container Translation">
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox39" name="WritingResearch" onChange={handleChange} label="Academic Writing & Research"/>
                  <Form.Check type="checkbox" id="creative-checkbox40" name="MarketingManagent" onChange={handleChange} label="Content Marketing Manager"/>
                  <Form.Check type="checkbox" id="creative-checkbox41" name="CreativeWriting" onChange={handleChange} label="Creative Writing"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox42" name="PublicRelations" onChange={handleChange} label="Public Relations"/>
                  <Form.Check type="checkbox" id="creative-checkbox43" name="TechnicalWritingTechnicalWriting" onChange={handleChange} label="Technical Writing"/>
                  <Form.Check type="checkbox" id="creative-checkbox44" name="Translation" onChange={handleChange} label="Translation"/>
              </Form.Row>              
            </div>}
            {checkValue === "8" && <div className="container">
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox45" name="Copywriting" onChange={handleChange} label="Copywriting"/>
                  <Form.Check type="checkbox" id="creative-checkbox46" name="CRMMaintenance" onChange={handleChange} label="CRM maintenance"/>
                  <Form.Check type="checkbox" id="creative-checkbox47" name="Documentation" onChange={handleChange} label="Documentation"/>
                  <Form.Check type="checkbox" id="creative-checkbox48" name="Presentations" onChange={handleChange} label="Presentations"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox49" name="Research" onChange={handleChange} label="Research"/>
                  <Form.Check type="checkbox" id="creative-checkbox50" name="Sheduling" onChange={handleChange} label="Scheduling & Meeting Organization"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check type="checkbox" id="creative-checkbox51" name="TravelPlanning" onChange={handleChange} label="Travel Planning"/>
                  <Form.Check type="checkbox" id="creative-checkbox52" name="WebMaintenance" onChange={handleChange} label="Website maintenance"/>
              </Form.Row>
            </div>}
           
          </div>
          <div className="selectedBoxes">
            

            {checkedState.Animation && <span>Animation & Motion graphics</span>}
            {checkedState.ARVRDesign && <span>AR / VR Design</span>}
            {checkedState.AudioProduction && <span>Audio Production</span>}
            {checkedState.BrandStrategy && <span>Brand Strategy</span>}
            {checkedState.EventManagemet && <span>Event Management</span>}
            {checkedState.GraphicDesign && <span>Graphic Design</span>}
            {checkedState.IMGEditRetouch && <span>Image Edit / Retocuh</span>}
            {checkedState.Photography && <span>Photography</span>}
            {checkedState.VideoProduction && <span>Video Production</span>}
            
            {checkedState.ARVRDevelopment && <span>AR / VR Development</span>}
            {checkedState.BackDevelopment && <span>Back-End Development</span>}
            {checkedState.DevepCoach && <span>Development Coach</span>}
            {checkedState.FrontDev && <span>Front-End Development</span>}
            {checkedState.FullStackDev && <span>Full Stack Development</span>}
            {checkedState.MobileAppDev && <span>Mobile App Development</span>}
            {checkedState.SoftwareDev && <span>Software Development</span>}
            {checkedState.UXUIDesign && <span>UX / UI Design</span>}
            {checkedState.WebDev && <span>Web Development</span>}

            {checkedState.CRM && <span>CRM / ERP-Process Management</span>}
            {checkedState.ITAdmin && <span>IT Administration</span>}
            {checkedState.ITConsulting && <span>IT Consulting</span>}
            {checkedState.QM && <span>Quality Management</span>}
            {checkedState.ITSecurity && <span>IT Security</span>}

            {checkedState.AffiliateMarketing && <span>Affiliate Marketing</span>}
            {checkedState.DigitalMarketing && <span>Digital Marketing</span>}
            {checkedState.EmailMarketing && <span>E-Mail Marketing</span>}
            {checkedState.MarketResearch && <span>Market Research</span>}
            {checkedState && <span>Marketing Strategy</span>}
            {checkedState && <span>SEA / SEO Management</span>}
            {checkedState && <span>Social Media Marketing</span>}

            {checkedState && <span>Product Management</span>}
            {checkedState && <span>Project Management</span>}

            {checkedState && <span>Business Development</span>}
            {checkedState && <span>Customer Service Support</span>}
            {checkedState && <span>Key Account Management</span>}
            {checkedState && <span>Telephone Sales</span>}
            {checkedState && <span>Sales Representative</span>}

            {checkedState && <span>Academic Writing & Research</span>}
            {checkedState && <span>Content Marketing Manager</span>}
            {checkedState && <span>Creative Writing</span>}
            {checkedState && <span>Public Relations</span>}
            {checkedState && <span>Technical Writing</span>}
            {checkedState && <span>Translation</span>}

            {checkedState && <span>Copywriting</span>}
            {checkedState && <span>CRM maintenance</span>}
            {checkedState && <span>Documentation</span>}
            {checkedState && <span>Presentations</span>}
            {checkedState && <span>Research</span>}
            {checkedState && <span>Scheduling & Meeting Organization</span>}
            {checkedState && <span>Travel Planning</span>}
            {checkedState && <span>Website maintenance</span>}
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

