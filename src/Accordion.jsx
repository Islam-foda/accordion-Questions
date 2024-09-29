import React, { useState } from "react";

import Question from "./Question";
export default function Accordion({ items }) {
  const questions = items.map((question) => {
    return <Question key={question.id} question={question} />;
  });
  return <>{questions}</>;
}
