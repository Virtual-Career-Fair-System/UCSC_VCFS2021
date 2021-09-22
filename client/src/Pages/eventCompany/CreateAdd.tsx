import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import PublishAd from "../company/PublishAd";
import {ILoginData} from "../../types/login";
import {useSelector} from "react-redux";
import {AppState} from "../../state/reducers";
import Ads from "./Ads";
import {useQuery} from "@apollo/client";
import {GET_ALL_ADVERTISEMENTS} from "../../grapgQl/advertisement/advertisementQuary";

const CreateAdd = ({thisEvent}:any) => {
  const [allAds, setAllAds] = useState(null);
  const FetchAllAds = useQuery(GET_ALL_ADVERTISEMENTS);
  const renderAds = () => {
    if(!allAds){
      return;
    }
    return allAds.filter((ad: any) => {
      return ad.event_code === thisEvent.event_code && ad.companyComId === login.id
    })
  }

  useEffect(() => {
    if (!FetchAllAds.data) {
      return;
    }
    setAllAds(FetchAllAds.data.getAllAdvertisements)
  }, );

  const login: ILoginData = useSelector((state: AppState) => state.login.login);
  return (
    <React.Fragment>
      <Row className='py-3'>
        <Col className='text-center' xs={{span: 6, offset: 3}}
             style={{border: '3px solid Blue', borderRadius: '5px', marginBottom: 3}}>
          <PublishAd loginId={login && login.id}
                     eventId={thisEvent && thisEvent.id}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Ads advertisements={renderAds()} thisEvent={thisEvent}/>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default CreateAdd;