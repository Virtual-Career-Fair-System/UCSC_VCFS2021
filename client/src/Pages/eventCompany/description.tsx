import React from 'react';
import DOMPurify from "dompurify";

function Description(props:any) {
  const createMarkup = (html: any) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }
  const renderDescription=()=>{
    if(!props.thisEvent){
      return '';
    }
    return props.thisEvent.description;
  }
  return (
    <div className="preview" dangerouslySetInnerHTML={createMarkup(renderDescription())}/>
  );
}

export default Description;