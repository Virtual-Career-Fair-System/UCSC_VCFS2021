import React, {useEffect, useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../components/header/Header";
import {Container} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Event from "./event/Event";
import {IEvent, ILoginData} from "../../types/login";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../state/reducers";


const CurrentEvents = () => {

  const events: IEvent[] = useSelector((state: AppState) => state.events.events);
  const login: ILoginData = useSelector((state: AppState) => state.login.login);


  const renderEvents = () => {
    if (!events) {
      return;
    }
    if (login.type === 'admin') {
      return events.map((event) => {
        return <Event event={event} key={event.event_code}/>
      });

    } else if (login.type === 'student' || login.type === 'company' || login.type === 'unknown') {
      return events.map((event) => {
        if(!event){
          return ;
        }
        return (event.status === 'requested' && Number(event.organizer) != login.id) ? '' :
          <Event event={event} key={event.event_code}/>
      })
    }
  }

  return (
    <React.Fragment>
      <CssBaseline/>
      <Header title="Career Fair UCSC"/>
      <Container fluid={true} className='current-events'>
        <main>
          {renderEvents()}
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default CurrentEvents;
