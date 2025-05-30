import React from "react";

function UnderstandingOfJsx() {
  return (
    <>
      {/* Fragements */}
      <h1>Understanding Of Jsx</h1>
      <p>
        JSX stands for JavaScript XML, a syntax extension to JavaScript that
        allows you to write HTML-like markup within JavaScript files, primarily
        used in React for building user interfaces.
      </p>
      <h2>Rules for Writing JSX In React</h2>
      <p>
        JSX, used in React, has key rules: always return a single root element,
        close all tags, use className instead of class, and use camelCase for
        attributes.
      </p>

      <h2>Here's a more detailed breakdown of the rules:</h2>

      <ol>
        <li>
          <strong>Single Root Element:</strong>
          <p>
            A React component must return a single top-level element (a "parent"
            element).
            <br />
            This allows React to efficiently update the DOM.
          </p>
        </li>

        <li>
          <strong>Closing Tags:</strong>
          <p>
            All JSX tags, including those that appear empty in HTML, must be
            closed.
            <br />
            Use a self-closing tag (e.g., <code>&lt;hr /&gt;</code>) for
            elements that don't have a closing tag in HTML.
          </p>
        </li>

        <li>
          <strong>Component Naming:</strong>
          <p>
            React component names must start with a capital letter.
            <br />
            If a component name starts with a lowercase letter, React treats it
            as a built-in HTML element (like <code>div</code> or
            <code>span</code>).
          </p>
        </li>

        <li>
          <strong>Attributes:</strong>
          <ul>
            <li>
              Use <code>className</code> instead of <code>class</code> in JSX,
              as "class" is a reserved keyword in JavaScript.
            </li>
            <li>
              Use camelCase for attribute names (e.g., <code>tabIndex</code>
              instead of <code>tabindex</code>).
            </li>
            <li>
              Use quotes for string literals in attributes (e.g.,{" "}
              <code>&lt;a href="https://www.example.com"&gt;</code>).
            </li>
            <li>
              Use curly braces <code>{}</code> to embed JavaScript expressions
              within attributes (e.g.,{" "}
              <code>&lt;img src=&rcub;user.avatarUrl&lcub; /&gt;</code>).
            </li>
            <li>
              Don't put quotes around curly braces when embedding JavaScript
              expressions in attributes.
            </li>
          </ul>
        </li>

        <li>
          <strong>JavaScript Expressions:</strong>
          <p>
            Use curly braces <code>{}</code> to include JavaScript expressions
            within JSX.
            <br />
            Content within curly braces will be evaluated as JavaScript.
          </p>
        </li>

        <li>
          <strong>Fragments:</strong>
          <p>
            You can use empty tags <code>&lt;&gt;</code> and{" "}
            <code>&lt;/&gt;</code> to return multiple elements without a parent
            element. This is called a Fragment.
            <br />
            Fragments are useful for grouping elements without adding
            unnecessary DOM nodes.
          </p>
        </li>
      </ol>
    </>
  );
}

export default UnderstandingOfJsx;
