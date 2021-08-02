import React, {ChangeEvent, FormEvent, FormEventHandler, useState} from 'react';
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import Header from '../../components/header/Header';
import {Editor} from "react-draft-wysiwyg";
import {EditorState, convertToRaw} from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import {convertToHTML} from 'draft-convert';
import DOMPurify from 'dompurify';

const OrganizeNewCareerFair: React.FC = () => {
  const [editorDescriptionState, setEditorDescriptionState] = useState(() => EditorState.createEmpty(),);
  const [editorRulesState, setEditorRulesState] = useState(() => EditorState.createEmpty(),);
  const [convertedDescriptionContent, setConvertedDescriptionContent] = useState<string>('');
  const [convertedRulesContent, setConvertedRulesContent] = useState<string>('');

  const [name, setName] = useState<null | string>(null);
  const [startDate, setStartDate] = useState<null | string>(null);
  const [endDate, setEndDate] = useState<null | string>(null);

  const [errorName, setErrorName] = useState<null | string>(null);
  const [errorStartDate, setErrorStartDate] = useState<null | string>(null);
  const [errorEndDate, setErrorEndDate] = useState<null | string>(null);
  const [errorDescription, setErrorDescription] = useState<null | string>(null);
  const [errorRules, setErrorRules] = useState<null | string>(null);

  const onDescriptionEditorStateChange = (editorState: EditorState) => {
    setEditorDescriptionState(editorState);
    let currentDescriptionAsHTML = convertToHTML(editorDescriptionState.getCurrentContent());
    setConvertedDescriptionContent(currentDescriptionAsHTML);
  }

  const onRulesEditorStateChange = (editorState: EditorState) => {
    setEditorRulesState(editorState);
    let currentRulesAsHTML = convertToHTML(editorDescriptionState.getCurrentContent());
    setConvertedRulesContent(currentRulesAsHTML);
  }

  const createMarkup = (html: any) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  const validation = () => {
    let errorNameTemp: string = '';
    let errorStartDateTemp: string = '';
    let errorEndDateTemp: string = '';
    let errorDescriptionTemp: string = '';
    let errorRulesTemp: string = '';

    if (name === '' || !name) {
      errorNameTemp = "Required";
    }

    if (!startDate || startDate === '') {
      errorStartDateTemp = "Required";
    }

    if (endDate === '' || !endDate) {
      errorEndDateTemp = "Required";
    }

    if (convertedRulesContent === '' || !convertedRulesContent) {
      errorRulesTemp = "Required";
    }

    if (convertedDescriptionContent === '' || !convertedDescriptionContent) {
      errorDescriptionTemp = "Required";
    }

    setErrorName(errorNameTemp);
    setErrorStartDate(errorStartDateTemp);
    setErrorEndDate(errorEndDateTemp);
    setErrorDescription(errorDescriptionTemp);
    setErrorRules(errorRulesTemp);


    return !(errorNameTemp !== '' || errorStartDateTemp !== '' || errorEndDateTemp !== '' || errorDescriptionTemp !== '' || errorRulesTemp !== '');

  }

  const HandleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
    if (!validation()) {
      return;
    } else {
    }
  }
  return (
    <React.Fragment>
      <Header title="Career Fair UCSC"/>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <h2>Organize New Career Fair</h2>
          </Col>
        </Row>
        <Form onSubmit={HandleOnSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formEventName">
              <Form.Label>Name Of Career Fair</Form.Label>
              <Row><Col><span className='text-danger'> {errorName && errorName}</span></Col></Row>
              <Form.Control type="text" value={name ? name : ''} placeholder="Enter email"/>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
              <Form.Label>Starting Date</Form.Label>
              <span className='text-danger'> {errorStartDate && errorStartDate}</span>
              <Form.Control type="date" value={startDate ? startDate : ''} placeholder="Password"/>
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
              <Form.Label>End Date</Form.Label>
              <span className='text-danger'> {errorEndDate && errorEndDate}</span>
              <Form.Control type="date" value={endDate ? endDate : ''} placeholder="Password"/>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formFile" className="mb-3">
              <Form.Label>Select Image for Cover</Form.Label>
              <Row><Col><span className='text-danger'> {errorEndDate && errorEndDate}</span></Col></Row>
              <Form.Control type="file"/>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Row><Col><span className='text-danger'>{errorDescription && errorDescription}</span></Col></Row>
              <Editor
                editorState={editorDescriptionState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onDescriptionEditorStateChange}
              />;
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
              <Form.Label>Rules and Regulations</Form.Label>
              <Row><Col><span className='text-danger'> {errorRules && errorRules}</span></Col></Row>
              <Editor
                editorState={editorRulesState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onRulesEditorStateChange}
              />;
            </Form.Group>
          </Row>
          {/*<div className="preview" dangerouslySetInnerHTML={createMarkup(convertedDescriptionContent)}/>*/}
          <Row>
            <Col className='text-right'>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  )
    ;
}


export default OrganizeNewCareerFair;