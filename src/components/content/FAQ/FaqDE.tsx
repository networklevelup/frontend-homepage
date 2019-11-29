import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';



import './FAQ.css';


const Faq: React.FC = () => {
  return (
    <div className="container">
      <h1 className="FAQTitle">FAQ</h1>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" className="FAQheadline">
          + Welche Möglichkeiten gibt es für ein Unternehmen im europäischen Ausland zu arbeiten?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body><p></p>
            <p>Grundsätzlich gilt nach deutschem Arbeitsrecht: Der Arbeitgeber bestimmt Einsatzort und</p><p> Arbeitszeit. Ein Arbeitnehmer hat keinen Rechtsanspruch auf Remotearbeit oder flexible Arbeitszeitgestaltung.</p>
            <br/>
            <p>Beispiel 1: Ein EU-Bürger mit permanentem Sitz in Spanien arbeitet für ein Unternehmen in Deutschland.</p>
            <p><strong>Möglichkeit 1</strong></p>
            <br/>
            <p>Der Spanier ist selbstständig (Arbeitnehmer). Er schließt mit dem Unternehmen einen Vertrag und schreibt vor/nach Leistungserbringung eine Rechnung an das Unternehmen.</p>
            <p>Der Arbeitnehmer ist selbst verantwortlich für die korrekte Abführung von Steuern und Versicherungsbeiträgen. Konkreter! Wo anmelden? Kosten? Benötigte Beratung…?</p>
            <p>Möglichkeit 2</p>
            <p>Der Spanier ist angestellt bei einer spanischen Tochtergesellschaft des deutschen Unternehmens. </p>
            <p>Es gilt das spanische Arbeitsrecht.</p>
            <p>Möglichkeit 3</p>
            <p>Der Spanier ist angestellt bei einem deutschen Unternehmen.</p>
            <p>Das deutsche Unternehmen eröffnet in Spanien eine Niederlassung (NIF) und führt die Steuern und Sozialversicherungsbeiträge des Arbeitnehmers an den spanischen Fiskus ab.</p>
            <p>Es gilt das deutsche Arbeitsrecht.</p>
            <p>Möglichkeit 4</p>
            <p>Der Spanier ist angestellt bei einem spanischen Zeitarbeitsunternehmen, die die Steuern und Sozialversicherungsbeiträge für den Arbeitnehmer an den spanischen Fiskus abführt (vgl. Möglichkeit 2). Das spanische Unternehmen schließt einen Vertrag über die Arbeitnehmerüberlassung mit dem deutschen Unternehmen.</p>
            <p>Es gilt das spanische Arbeitsrecht.</p>
            <p>Beispiel 2: Ein EU-Bürger mit permanentem Sitz in Deutschland arbeitet für ein Unternehmen in Deutschland.</p>
            <p>Der Spanier ist angestellt (Arbeitnehmer) bei einem deutschen Unternehmen. Das Unternehmen führt Sozialversicherungsbeiträge und Steuern des Arbeitnehmers an die entsprechenden Träger ab.</p>
            <p>Es gilt das deutsche Arbeitsrecht.</p>
            <p>Remote Möglichkeit: Entsendung (A1) des Arbeitnehmers bis zu 183 Tage. Ein Wohnsitz in Deutschland ist während der Abwesenheit aus steuerrechtlichen Gründen erforderlich.</p>
            </Card.Body> 
        </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1" className="FAQheadline">
            Click meee!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2" className="FAQheadline">
            Click meee!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3" className="FAQheadline">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>

  );
};

export default Faq;
