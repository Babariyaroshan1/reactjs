import React, { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("");

  function countWords(text) {
    let count = 0;
    let inWord = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char !== " " && char !== "\n" && char !== "\t") {
        if (!inWord) {
          count++;
          inWord = true;
        }
      } else {
        inWord = false;
      }
    }

    return count;
  }

  const wordCount = countWords(text.trim());
  return (
    <>
      <div className="container ">
        <div className="row p-2 flex-column">
          <div className="col d-flex">
            <h4 className="text-decoration-underline">5.Word Counter</h4>
          </div>
          <div className="col">
            <textarea
              placeholder="write here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <p className="mt-3">
              Word Count: <strong>{wordCount}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WordCounter;