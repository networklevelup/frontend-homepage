import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';



import './FAQ.css';


const Faq: React.FC = () => {
  return (
    <div className="container">
      <h1 className="FAQTitle">FAQ</h1>
Dieses FAQ ist unverbindlich und ersetzt keine rechtliche Beratung.<br/><br/>

      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" className="FAQheadline">
          + Welche Möglichkeiten gibt es als Talent für ein Unternehmen im europäischen Ausland zu arbeiten?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body><p></p>
            <p>Grundsätzlich gilt nach deutschem Arbeitsrecht: Der Arbeitgeber bestimmt Einsatzort und</p><p> Arbeitszeit. Ein Arbeitnehmer hat keinen Rechtsanspruch auf Remotearbeit oder flexible Arbeitszeitgestaltung.</p>
            <br/>
            <p>Beispiel: Ein EU-Bürger mit permanentem Sitz in Spanien arbeitet für ein Unternehmen in Deutschland.</p>
            <br/>
            <p><strong>Möglichkeit 1</strong></p>
            Coming soon.
            </Card.Body> 
        </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1" className="FAQheadline">
            Coming soon.
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Coming soon.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2" className="FAQheadline">
          Coming soon.
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Coming soon.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3" className="FAQheadline">
          Coming soon.
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Coming soon.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>

  );
};

export default Faq;
