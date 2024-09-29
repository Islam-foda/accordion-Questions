import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
export default function Question({ question }) {
  const [isShown, setIsShown] = React.useState(false);
  function toggle() {
    setIsShown(!isShown);
  }

  return (
    <>
      <article className="question" key={question.id}>
        <header>
          <h4>{question.title}</h4>
          <button className="btn" onClick={toggle}>
            {isShown ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {isShown && <p>{question.info}</p>}
      </article>
     
    </>
  );
}
