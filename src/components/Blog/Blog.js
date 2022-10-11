import React from "react";

const Blog = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Important question to know for React Router
        </h2>
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          Let's get some knowldge
        </p>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold text-2xl">
              1. what is the purpose of react router?
            </h3>
            <p className="mt-1 text-gray-600">
              At its heart, React Router is a state container for the current
              location , or URL. It keeps track of the location and renders
              different s as it changes, and it also gives you tools to update
              the location using s and the history API.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">2. How does context api works?</h3>
            <p className="mt-1 text-gray-600">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">3.What is usehref hooks?</h3>
            <p className="mt-1 text-gray-600">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
              <br />
              useRef returns a mutable ref object whose .current property is
              initialized to the passed argument ( initialValue ). The returned
              object will persist for the full lifetime of the component.
              Essentially, useRef is like a “box” that can hold a mutable value
              in its .current property
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
