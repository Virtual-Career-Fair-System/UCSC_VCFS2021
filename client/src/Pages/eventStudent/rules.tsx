import React from 'react';
import DOMPurify from "dompurify";

function Rules(props:any) {
  const createMarkup = (html: any) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }
  const rules=()=>{
    if(!props.thisEvent){
      return '';
    }
    return props.thisEvent.rules;
  }
  return (
    <div className="preview" dangerouslySetInnerHTML={createMarkup(rules())}/>
  );
}

export default Rules;