import React, { ChangeEventHandler, createElement, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import "./TalentProfile.css";
import { FormControlProps } from "react-bootstrap/FormControl";
import { IUser, ISkills } from "../../../interfaces/interfaces";
import { connect } from "react-redux";
import { IGlobalState } from "../../../reducers/reducers";
import { RouteComponentProps } from "react-router";
import * as actions from "../../../actions/actions";


import "./ProfileWithinCV.css";
import { whileStatement } from "@babel/types";


interface IPropsGlobal {
  token: string;
  users: IUser[];
  setSkills: (skills: ISkills[]) => void;
}

const ProfileWithinCV: React.FC<IPropsGlobal & RouteComponentProps<{ userId: string }>
> = props => {
  
const userId = props.match.params.userId;
console.log("user: " + props.match.params.userId);
console.log("user: " + userId);


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
      Animation: false,
      ARVRDesign: false,
      AudioProduction: false,
      BrandStrategy: false,
      EventManagemet: false,
      GraphicDesign: false,
      IMGEditRetouch: false,
      Photography: false,
      VideoProduction: false,
      ARVRDevelopment: false,
      BackDevelopment: false,
      DevepCoach: false,
      FrontDev: false,
      FullStackDev: false,
      MobileAppDev: false,
      SoftwareDev: false,
      UXUIDesign: false,
      WebDev: false,
      CRM: false,
      ITAdmin: false,
      ITConsulting: false,
      QM: false,
      ITSecurity: false,
      AffiliateMarketing:false,
      DigitalMarketing: false,
      EmailMarketing: false,
      MarketResearch: false,
      MarketingStrategy: false,
      SEOManagement: false,
      SMM: false,
      ProductManagement:false,
      ProjectManagement:false,
      BusinessDev: false,
      CSSupport: false,
      KAManagement: false,
      TelephoneSales: false,
      SalesRepresentative: false,
      WritingResearch: false,
      MarketingManagent: false,
      CreativeWriting: false,
      PublicRelations: false,
      TechnicalWriting: false,
      Translation: false,
      Copywriting: false,
      CRMMaintenance:false,
      Documentation: false,
      Presentations: false,
      Research: false,
      Sheduling: false,
      TravelPlanning: false,
      WebMaintenance: false,
      levelExp: "",
      locations: "",
      spanishSkills: "nativeSpeaker",
      englishSkills: "nativeSpeaker",
      germanSkills: "nativeSpeaker",
      furtherLanguageSkills: "nativeSpeaker",
      furtherLanguage: ""
      

   });

  const FinalcheckedState: {[key:string]:boolean | string} = checkedState;
   const handleChange = (event: React.ChangeEvent<HTMLInputElement & FormControlProps>) => {
       const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
       setstate({
           ...checkedState,
           [event.target.name]: value
       });
  }  
  
  // const close = () => setstate({[Animation]: false}) 
  const close = () => checkedState.Animation == false; 

  useEffect(() => {  {/*este useefect no es valido, cuando recoja todos los datos del form en un fetch
  he de utilizar esta formula para seleccionar unicamente las opciones que esten checked */}
     let worksAreas = []; 
    for(let key in FinalcheckedState) {
      if(FinalcheckedState[key]  === true) {
        worksAreas.push(key)
      }      
    }
    console.log("WorkAreas: " + worksAreas);   
  }, [FinalcheckedState]);  

 console.log("TODOS LOS ESTADOS: " + JSON.stringify(checkedState))

 const ProfileWithinCV = () => {
   let worksAreas = [];
   for (let key in FinalcheckedState) {
     if (FinalcheckedState[key] === true) {
       worksAreas.push(key);
     }
   }
   fetch("http://localhost:8080/api/talents/profile/" + userId, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       mode: "cors"
     },
     body: JSON.stringify({   
       worksAreas: worksAreas,
       levelExp: checkedState.levelExp,
       locations: checkedState.locations,
       spanishSkills: checkedState.spanishSkills,
       englishSkills: checkedState.englishSkills,
       germanSkills: checkedState.germanSkills,
       futherLanguageSkills: checkedState.furtherLanguageSkills,
       furtherLanguage: checkedState.furtherLanguage
     })
   }).then(response => {
     if(response.ok) {
       response.json().then(skills => {
        props.setSkills(skills);
         console.log("SKILLS: ", skills)
       })
     }     
   })
  }; 
  
  return (
    <div className="container headers">    
        <h1>Please enter your data and upload your CV.</h1>
        <h1>We will contact you afterwards with the next steps</h1>
        <h2>IN WICH AREA YOU WOULD LIKE TO WORK?</h2>
        <Form>
          <div className="selectionButtons">
            <Form.Row>
              <ButtonGroup toggle>
                <ToggleButton className="workAreaButton" type="radio" name="radio" checked value="1" onClick={setValue1}>Creative & Design</ToggleButton>
                <ToggleButton className="workAreaButton" type="radio" name="radio" value="2" onClick={setValue2}>Development</ToggleButton>
                <ToggleButton className="workAreaButton" type="radio" name="radio" value="3" onClick={setValue3}>IT & Network</ToggleButton>
                <ToggleButton className="workAreaButton" type="radio" name="radio" value="4" onClick={setValue4}>Marketing</ToggleButton>
              </ButtonGroup>
            </Form.Row>
            <Form.Row>
              <ButtonGroup toggle>
                <ToggleButton className="workAreaButton" type="radio" name="radio" value="5" onClick={setValue5}>Product & Project</ToggleButton>
                <ToggleButton className="workAreaButton" type="radio" name="radio" value="6" onClick={setValue6}>Sales</ToggleButton>
                <ToggleButton className="workAreaButton" type="radio" name="radio" value="7" onClick={setValue7}>Transaltions & Writing</ToggleButton>
                <ToggleButton className="workAreaButton" type="radio" name="radio" value="8" onClick={setValue8}>Virtual Assistant</ToggleButton>
              </ButtonGroup>
            </Form.Row>               
           </div>
            <div className="checkBoxes">             
            {checkValue === "1" && <div className="container Creative">
              <Form.Row>
                    <Form.Check custom type="checkbox" id="creative-checkbox1" name="Animation" onChange={handleChange} label="Animation / Motion Graphics"/>
                    <Form.Check custom type="checkbox" id="creative-checkbox2" name="ARVRDesign"  onChange={handleChange} label="AR / VR Design"/>
                    <Form.Check custom type="checkbox" id="creative-checkbox3" name="AudioProduction" onChange={handleChange} label="Audio Production"/>
                    <Form.Check custom type="checkbox" id="creative-checkbox4" name="BrandStrategy" onChange={handleChange} label="Brand Strategy"/>
              </Form.Row>
              <Form.Row>
                    <Form.Check custom type="checkbox" id="creative-checkbox5" name="EventManagemet" onChange={handleChange} label="Event Management"/>
                    <Form.Check custom type="checkbox" id="creative-checkbox6" name="GraphicDesign" onChange={handleChange} label="Graphic Design"/>
                    <Form.Check custom type="checkbox" id="creative-checkbox7" name="IMGEditRetouch" onChange={handleChange} label="Image Editing / Retouching"/>
                  </Form.Row>
              <Form.Row>
                    <Form.Check custom type="checkbox" id="creative-checkbox8" name="Photography" onChange={handleChange} label="Photography"/>
                    <Form.Check custom type="checkbox" id="creative-checkbox9" name="VideoProduction" onChange={handleChange} label="Video Production"/>
              </Form.Row>
            </div>}            
            {checkValue === "2" && <div className="container Developments">
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox10" name="ARVRDevelopment" onChange={handleChange} label="AR / VR Development"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox11" name="BackDevelopment" onChange={handleChange} label="Back-End Development"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox12" name="DevepCoach" onChange={handleChange} label="Development Coach"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox13" name="FrontDev" onChange={handleChange} label="Front-End Development"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox14" name="FullStackDev" onChange={handleChange} label="Full Stack Development"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox15" name="MobileAppDev" onChange={handleChange} label="Mobile App Development"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox16" name="SoftwareDev" onChange={handleChange} label= "Software Development"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox17" name="UXUIDesign" onChange={handleChange} label="UX / UI Design"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox19" name="WebDev" onChange={handleChange} label="Web Development"/>
              </Form.Row>
            </div>}
            {checkValue === "3" && <div className="container ITNetworks">
              <Form.Row>
                <Form.Check custom type="checkbox" id="creative-checkbox20" name="CRM" onChange={handleChange} label="CRM / ERP-Process Management"/>
                <Form.Check custom type="checkbox" id="creative-checkbox21" name="ITAdmin" onChange={handleChange} label="IT Administration"/>
                <Form.Check custom type="checkbox" id="creative-checkbox22" name="ITConsulting" onChange={handleChange} label="IT Consulting"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox23" name="QM" onChange={handleChange} label="Quality Management"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox24" name="ITSecurity" onChange={handleChange} label="IT Security"/>
              </Form.Row>              
            </div>}
            {checkValue === "4" && <div className="container Marketing">
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox25" name="AffiliateMarketing" onChange={handleChange} label="Affiliate Marketing"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox26" name="DigitalMarketing" onChange={handleChange} label="Digital Marketing"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox27" name="EmailMarketing" onChange={handleChange} label="E-Mail Marketing"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox28" name="MarketResearch" onChange={handleChange} label="Market Research"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox29" name="MarketingStrategy" onChange={handleChange} label="Marketing Strategy"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox30" name="SEOManagement" onChange={handleChange} label="SEA / SEO Management"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox31" name="SMM" onChange={handleChange} label="Social Media Marketing"/>
              </Form.Row>
            </div>}
            {checkValue === "5" && <div className="container ProductProject">
              <Form.Row>
                <Form.Check custom type="checkbox" id="creative-checkbox32" name="ProductManagement" onChange={handleChange} label="Product Management"/>
                <Form.Check custom type="checkbox" id="creative-checkbox33" name="ProjectManagement" onChange={handleChange} label="Project Management"/>
              </Form.Row>
            </div>}
            {checkValue === "6" && <div className="container">
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox34" name="BusinessDev" onChange={handleChange} label="Business Development"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox35" name="CSSupport" onChange={handleChange} label="Customer Service Support"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox36" name="KAManagement" onChange={handleChange} label="Key Account Management"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox37" name="TelephoneSales" onChange={handleChange} label="Telephone Sales"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox38" name="SalesRepresentative" onChange={handleChange} label="Sales Representative"/>
              </Form.Row>            
            </div>}
            {checkValue === "7" && <div className="container Translation">
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox39" name="WritingResearch" onChange={handleChange} label="Academic Writing & Research"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox40" name="MarketingManagent" onChange={handleChange} label="Content Marketing Manager"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox41" name="CreativeWriting" onChange={handleChange} label="Creative Writing"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox42" name="PublicRelations" onChange={handleChange} label="Public Relations"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox43" name="TechnicalWriting" onChange={handleChange} label="Technical Writing"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox44" name="Translation" onChange={handleChange} label="Translation"/>
              </Form.Row>              
            </div>}
            {checkValue === "8" && <div className="container">
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox45" name="Copywriting" onChange={handleChange} label="Copywriting"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox46" name="CRMMaintenance" onChange={handleChange} label="CRM maintenance"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox47" name="Documentation" onChange={handleChange} label="Documentation"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox48" name="Presentations" onChange={handleChange} label="Presentations"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox49" name="Research" onChange={handleChange} label="Research"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox50" name="Sheduling" onChange={handleChange} label="Scheduling & Meeting Organization"/>
              </Form.Row>
              <Form.Row>
                  <Form.Check custom type="checkbox" id="creative-checkbox51" name="TravelPlanning" onChange={handleChange} label="Travel Planning"/>
                  <Form.Check custom type="checkbox" id="creative-checkbox52" name="WebMaintenance" onChange={handleChange} label="Website maintenance"/>
              </Form.Row>
            </div>}
          </div>
          <div className=" container selectedBoxes">
            {checkedState.Animation && <span className="spanBox">Animation & Motion graphics<button className="close">x</button></span>}
            {checkedState.ARVRDesign && <span className="spanBox">AR / VR Design</span>}
            {checkedState.AudioProduction && <span className="spanBox">Audio Production</span>}
            {checkedState.BrandStrategy && <span className="spanBox">Brand Strategy</span>}
            {checkedState.EventManagemet && <span className="spanBox">Event Management</span>}
            {checkedState.GraphicDesign && <span className="spanBox">Graphic Design</span>}
            {checkedState.IMGEditRetouch && <span className="spanBox">Image Editing / Retouching</span>}
            {checkedState.Photography && <span className="spanBox">Photography</span>}
            {checkedState.VideoProduction && <span className="spanBox">Video Production</span>}
            
            {checkedState.ARVRDevelopment && <span className="spanBox">AR / VR Development</span>}
            {checkedState.BackDevelopment && <span className="spanBox">Back-End Development</span>}
            {checkedState.DevepCoach && <span className="spanBox">Development Coach</span>}
            {checkedState.FrontDev && <span className="spanBox">Front-End Development</span>}
            {checkedState.FullStackDev && <span className="spanBox">Full Stack Development</span>}
            {checkedState.MobileAppDev && <span className="spanBox">Mobile App Development</span>}
            {checkedState.SoftwareDev && <span className="spanBox">Software Development</span>}
            {checkedState.UXUIDesign && <span className="spanBox">UX / UI Design</span>}
            {checkedState.WebDev && <span className="spanBox">Web Development</span>}

            {checkedState.CRM && <span className="spanBox">CRM / ERP-Process Management</span>}
            {checkedState.ITAdmin && <span className="spanBox">IT Administration</span>}
            {checkedState.ITConsulting && <span className="spanBox">IT Consulting</span>}
            {checkedState.QM && <span className="spanBox">Quality Management</span>}
            {checkedState.ITSecurity && <span className="spanBox">IT Security</span>}

            {checkedState.AffiliateMarketing && <span className="spanBox">Affiliate Marketing</span>}
            {checkedState.DigitalMarketing && <span className="spanBox">Digital Marketing</span>}
            {checkedState.EmailMarketing && <span className="spanBox">E-Mail Marketing</span>}
            {checkedState.MarketResearch && <span className="spanBox">Market Research</span>}
            {checkedState.MarketingStrategy && <span className="spanBox">Marketing Strategy</span>}
            {checkedState.SEOManagement && <span className="spanBox">SEA / SEO Management</span>}
            {checkedState.SMM && <span className="spanBox">Social Media Marketing</span>}

            {checkedState.ProductManagement && <span className="spanBox">Product Management</span>}
            {checkedState.ProjectManagement && <span className="spanBox">Project Management</span>}

            {checkedState.BusinessDev && <span className="spanBox">Business Development</span>}
            {checkedState.CSSupport && <span className="spanBox">Customer Service Support</span>}
            {checkedState.KAManagement && <span className="spanBox">Key Account Management</span>}
            {checkedState.TelephoneSales && <span className="spanBox">Telephone Sales</span>}
            {checkedState.SalesRepresentative && <span className="spanBox">Sales Representative</span>}

            {checkedState.WritingResearch && <span className="spanBox">Academic Writing & Research</span>}
            {checkedState.MarketingManagent && <span className="spanBox">Content Marketing Manager</span>}
            {checkedState.CreativeWriting && <span className="spanBox">Creative Writing</span>}
            {checkedState.PublicRelations && <span className="spanBox">Public Relations</span>}
            {checkedState.TechnicalWriting && <span className="spanBox">Technical Writing</span>}
            {checkedState.Translation && <span className="spanBox">Translation</span>}

            {checkedState.Copywriting && <span className="spanBox">Copywriting</span>}
            {checkedState.CRMMaintenance && <span className="spanBox">CRM maintenance</span>}
            {checkedState.Documentation && <span className="spanBox">Documentation</span>}
            {checkedState.Presentations && <span className="spanBox">Presentations</span>}
            {checkedState.Research && <span className="spanBox">Research</span>}
            {checkedState.Sheduling && <span className="spanBox">Scheduling & Meeting Organization</span>}
            {checkedState.TravelPlanning && <span className="spanBox">Travel Planning</span>}
            {checkedState.WebMaintenance && <span className="spanBox">Website maintenance</span>}
         </div>
          
                <h2 className="expArea">WHAT IS YOUR EXPERIENCE LEVEL IN THIS AREA?</h2>
          <div className="levelExp">          
            <Form.Row>
                  <ButtonGroup toggle>
                      <ToggleButton className="btnExpLevel"  type="radio" name="levelExp" value="Beguinner" checked={checkedState.levelExp === "Beguinner"}  onClick={handleChange}><p className="level">Beguinner Level</p><p>Just started to work in this field</p></ToggleButton>
                      <ToggleButton className="btnExpLevel"  type="radio" name="levelExp" value="Intermediate" checked={checkedState.levelExp === "Intermediate"}  onClick={handleChange}><p className="level">Intermediate</p><p>Finalized first projects in this field</p></ToggleButton>
                      <ToggleButton className="btnExpLevel"  type="radio" name="levelExp" value="Expert" checked={checkedState.levelExp === "Expert"}  onClick={handleChange}><p className="level">Expert Level</p><p>I have deep expertise in this field</p></ToggleButton>
                  </ButtonGroup>
            </Form.Row>
          </div>
          <h5>PREFERRED LOCATIONS</h5>
          <div className="locations">            
            <Form.Group as={Row}>
                  <Form.Check type="radio" name="locations" value="OnlyRemote" checked={checkedState.locations === "OnlyRemote"} onChange={handleChange}  label="I am only available for remote work"/>
                  <Form.Check type="radio" name="locations" value="OpenMove" checked={checkedState.locations === "OpenMove"} onChange={handleChange}  label="I am open to move to Germany"/>
                  <Form.Check type="radio" name="locations" value="WishMove" checked={checkedState.locations === "WishMove"}  onChange={handleChange}  label="I wish to move to Germany"/>
              </Form.Group>
          </div>
            <div className="languageskills">
            <h5>LANGUAGE SKILLS</h5>
            {/**Dropdown selectors 3 fijos y un cuarto que de la opcion de escribir el lenguaje */}
            <Form.Row>
            <Form.Group>
              <Form.Label>SPANISH</Form.Label>
              <Form.Control as="select" name="spanishSkills" onChange={handleChange} value={checkedState.spanishSkills} >
                <option className="languageValues" value="nativeSpeaker">native speaker</option>
                <option className="languageValues" value="businessFluent">business fluent</option> 
                <option className="languageValues" value="veryGoodKnowledge">very good knowledge (fluently)</option>
                <option className="languageValues" value="goodKnowledge">good knowledge</option>
                <option className="languageValues" value="basicKnowledge">basic knowledge</option>
                <option className="languageValues" value="none">------------</option>
              </Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.Label>ENGLISH</Form.Label>
              <Form.Control as="select" name="englishSkills" onChange={handleChange} value={checkedState.englishSkills} >
                <option value="nativeSpeaker">native speaker</option>
                <option value="businessFluent">business fluent</option> 
                <option value="veryGoodKnowledge">very good knowledge (fluently)</option>
                <option value="goodKnowledge">good knowledge</option>
                <option value="basicKnowledge">basic knowledge</option>
                <option value="none">------------</option>
              </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>GERMAN</Form.Label>
                <Form.Control as="select" name="germanSkills" onChange={handleChange} value={checkedState.germanSkills} >
                <option value="nativeSpeaker">native speaker</option>
                <option value="businessFluent">business fluent</option> 
                <option value="veryGoodKnowledge">very good knowledge (fluently)</option>
                <option value="goodKnowledge">good knowledge</option>
                <option value="basicKnowledge">basic knowledge</option>
                <option value="none">------------</option>
              </Form.Control>  
            </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
              <Form.Control type="text" name="furtherLanguage" placeholder="FURTHER LANGUAGE" value={checkedState.furtherLanguage} onChange={handleChange as any}/>
              <Form.Control as="select" name="furtherLanguageSkills" onChange={handleChange} value={checkedState.furtherLanguageSkills} >
                <option value="nativeSpeaker">native speaker</option>
                <option value="businessFluent">business fluent</option> 
                <option value="veryGoodKnowledge">very good knowledge (fluently)</option>
                <option value="goodKnowledge">good knowledge</option>
                <option value="basicKnowledge">basic knowledge</option>
                <option value="none">------------</option>
              </Form.Control>
              </Form.Group>
            </Form.Row>
            </div>
          
            <Button onClick={ProfileWithinCV}>Save & Continues</Button>
      </Form>
    </div>
   
  );
};


const mapStateToProps = (state: IGlobalState) => ({
  users: state.users,
  token: state.token
});

const mapDispatchToProps = {
  setSkills: actions.setSkills
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileWithinCV);

