import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DevelopmentChecks from './CheckBoxes/DevelopmentChecks';
import ItNetworkChecks from './CheckBoxes/IT&NetworkChecks';
import MarketingChecks from './CheckBoxes/MarketingChecks';
import ProductProjectChecks from './CheckBoxes/ProductProjectChecks';
import SalesChecks from './CheckBoxes/SalesChecks';
import TranslationWritingChecks from './CheckBoxes/TranslationWritingChecks';
import VirtualAssistantChecks from './CheckBoxes/VirtualAssistantChecks';

import { IGlobalState } from '../../../reducers/reducers';
import { connect } from 'react-redux';
import * as actions from "../../../actions/actions";


interface IPropsGlobal  {
    // setCheckBoxes: (selectChecks: IChecked)=> void;
}
const GroupCheckBoxes: React.FC<IPropsGlobal> = props => {

  const [checkValue, setCheckValue] = React.useState("1");
  const setValue1= () => setCheckValue("1");
  const setValue2= () => setCheckValue("2");
  const setValue3= () => setCheckValue("3");
  const setValue4= () => setCheckValue("4");
  const setValue5= () => setCheckValue("5");
  const setValue6= () => setCheckValue("6");
  const setValue7= () => setCheckValue("7");
  const setValue8= () => setCheckValue("8");

    const [state, setstate] = React.useState({
       Animation: "",
       ARVRDesign: ""
    });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setstate({
            ...state,
            [event.target.name]: value
        });
    }
    


//   const [firstCheck, setFirstCheck] = React.useState(false);
//   const [firstValue, setFirstValue] = React.useState("")

//   const setingFirstCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFirstCheck(event.target.checked);   
//     setFirstValue(event.target.name);
//   };

//   useEffect (() => {
//     if (firstCheck) {
//         setFirstValue("ANIMACION") 
//   }
//     }, [firstCheck])
  
  
  
//   console.log(firstCheck);
  console.log(state);

    return (
        <div className="container">
             <Form>                               
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
                
           
         <div className="checkBoxes">
             
            {checkValue === "1" && <div className="container">
            <Form.Row>
              <Form.Check type="checkbox" id="creative-checkbox1" name="Animation"  onChange={handleChange} label="Animation / Motion Graphics"/>
              <Form.Check type="checkbox" id="creative-checkbox2" name="ARVRDesign"  onChange={handleChange} label="AR / VR Design"/>
              <Form.Check type="checkbox" id="creative-checkbox3" label="Audio Production"/>
              <Form.Check type="checkbox" id="creative-checkbox4" label="Brand Strategy"/>
          </Form.Row>
          <Form.Row>
              <Form.Check type="checkbox" id="creative-checkbox5" label="Event Management"/>
              <Form.Check type="checkbox" id="creative-checkbox6" label="Graphic Design"/>
              <Form.Check type="checkbox" id="creative-checkbox7" label="Image Editing / Retouching"/>
            </Form.Row>
          <Form.Row>
              <Form.Check type="checkbox" id="creative-checkbox8" label="Photography"/>
              <Form.Check type="checkbox" id="creative-checkbox9" label="Video Production"/>
            </Form.Row>
        </div>}
            {/* {checkValue === "1" && <CreativeChecks />} */}
            {checkValue === "2" && <DevelopmentChecks />}
            {checkValue === "3" && <ItNetworkChecks />}
            {checkValue === "4" && <MarketingChecks />}
            {checkValue === "5" && <ProductProjectChecks />}
            {checkValue === "6" && <SalesChecks />}
            {checkValue === "7" && <TranslationWritingChecks />}
            {checkValue === "8" && <VirtualAssistantChecks />}
           
        </div>
        <div className="selectedBoxes">
          {state.Animation && <span>Animation & Motion graphics</span>}
          {state.ARVRDesign && <span>AR / VR Design</span>}
                   {/*Aqui una lista de las selecciones hechas, de 3-10, con la opcion de poder eliminarlas
                si se desea, mirar si algun pluging hace esto */}
        </div>
        </Form>
        </div>
    )
}

// const mapsStateToProps = (state: IGlobalState) => ({
//     selectCheks: state.selectCheks
// });
// const mapDispatchToProps = {
//     selectChecks: actions.setCheckBoxes
// }

export default GroupCheckBoxes;