import React from "react";

function IntroReact() {
  return (
    <>
    

      {/* Component Content */}
      <div className="text-dark bg-warning p-3">
        <h1>REACT</h1>
        <hr />
        <h2>What is React, and Its Role in Web Development?</h2>
        <ul>
          <li>
            React is a JavaScript library developed by Facebook for building
            fast, interactive user interfaces, particularly for single-page
            applications (SPAs).
          </li>
          <li>
            It allows developers to build UIs by breaking them down into small,
            reusable pieces called components.
          </li>
          <li>
            React is often used in web development to manage and update the user
            interface of a web application in response to user actions, without
            needing to reload the whole page.
          </li>
          <li>
            In web development, React plays a crucial role in creating dynamic
            applications with high performance.
          </li>
          <li>
            Rather than directly manipulating the Document Object Model (DOM),
            which can be slow, React uses a "virtual DOM."
          </li>
          <li>
            This approach lets React efficiently update only the parts of the
            interface that need to change, enhancing speed and responsiveness.
          </li>
          <li>
            This makes React particularly suitable for complex, interactive web
            applications, where user interaction is frequent and requires
            immediate feedback.
          </li>
        </ul>
        <hr />
        <h2>History of React</h2>
        <p>
          The story of React began at Facebook as the company searched for a way
          to improve the user experience on its growing platform.
        </p>
        <ul>
          <li>
            React was created by Jordan Walke, a software engineer at Facebook.
          </li>
          <li>
            He developed React in 2011 as a way to improve the performance and
            efficiency of building UIs, especially for Facebook’s news feed and
            Instagram.
          </li>
          <li>
            React was open-sourced in 2013, allowing the wider development
            community to contribute to its growth and adoption.
          </li>
          <li>
            React has been maintained by Facebook (now Meta), along with
            contributions from a large community of developers.
          </li>
        </ul>
        <hr />
        <h2>Key Features of React</h2>
        <ul>
          <li>Component-Based Architecture</li>
          <li>Declarative Syntax</li>
          <li>Virtual DOM</li>
          <li>JSX (JavaScript XML)</li>
          <li>Unidirectional Data Flow</li>
          <li>React Ecosystem</li>
        </ul>
        <hr />
        <h2>Advantages of React</h2>
        <ul>
          <li>Component reusability and maintainability.</li>
          <li>Efficient updates using the Virtual DOM.</li>
          <li>Declarative syntax, making code easier to understand.</li>
          <li>A large community and ecosystem.</li>
          <li>The ability to build interactive UIs.</li>
          <li>SEO-friendly capabilities.</li>
          <li>Cross-platform support through React Native for mobile apps.</li>
        </ul>

        <div className="container text-white bg-dark border border-2 border-success">
          <h2>Question-Bank</h2>
          <ol>
            <li className="h3">What is React?</li>
            <p>
              React is a JavaScript library developed by Facebook for building
              user interfaces (UIs), especially for single-page applications. It
              helps you create dynamic and interactive web pages by breaking
              down the UI into reusable components. These components can manage
              their own state and render the UI based on that state.
            </p>

            <li className="h3">How does React help in web development?</li>
            <p>
              React helps developers build efficient and fast websites by using
              a Virtual DOM to update only parts of the page that change. This
              makes React apps faster and more responsive compared to
              traditional websites that reload the entire page. It also lets
              developers build reusable components, making code easier to
              maintain and scale.
            </p>

            <li className="h3">What is the history of React?</li>
            <p>
              React was created by Jordan Walke, a software engineer at
              Facebook, in 2011. It was initially developed for use in
              Facebook’s newsfeed and Instagram. React was open-sourced by
              Facebook in 2013, which allowed developers all around the world to
              use it and contribute to its growth. Since then, it has become one
              of the most popular JavaScript libraries for building web
              applications.
            </p>

            <li className="h3">What are some key features of React?</li>
            <ul>
              <li>
                <strong>Component-Based Architecture:</strong> React allows you
                to break down the UI into reusable components, which makes
                development faster and more organized.
              </li>
              <li>
                <strong>Virtual DOM:</strong> React uses a virtual DOM to
                improve performance by updating only the changed parts of the
                page.
              </li>
              <li>
                <strong>Declarative Syntax:</strong> React lets you describe how
                the UI should look based on the state, and React takes care of
                updating the DOM when the state changes.
              </li>
              <li>
                <strong>Unidirectional Data Flow:</strong> Data in React flows
                in one direction, making it easier to track and manage.
              </li>
            </ul>

            <li className="h3">Why is React so popular?</li>
            <p>
              React is popular because it’s easy to learn, efficient in updating
              the UI, and helps build large-scale applications. Its
              component-based structure makes code reusable and maintainable.
              React also has a huge community of developers, which makes it easy
              to find resources and support. Plus, with React Native, you can
              build mobile apps using the same knowledge.
            </p>
          </ol>
        </div>
      </div>
    </>
  );
}

export default IntroReact;
