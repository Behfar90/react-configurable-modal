# react-configurable-modal

A react library for creating popped modals with configurable dimensions, multiple animations and position options.

The advantage of this library is to pass the modal content as `chidren` prop and therefore, you can turn any desired DOM and styles as a modal.

[![GitHub issues](https://img.shields.io/github/issues/Behfar90/react-configurable-modal)]()
![gzip size](http://img.badgesize.io/https://unpkg.com/react-configurable-modal@1.0.1/dist/index.js?compression=gzip)
[![](https://data.jsdelivr.com/v1/package/npm/react-configurable-modal/badge)](https://www.jsdelivr.com/package/npm/react-configurable-modal)
[![GitHub license](https://img.shields.io/github/license/Behfar90/react-configurable-modal)](https://img.shields.io/github/license/Behfar90/react-configurable-modal)

## Demo

[![ReactConfigurableModal Playground](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/2tqmts?file=/src/App.js)

Here is a playground that you can set different props to the `Modal` and see which one you desire to use.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save react-configurable-modal
    $ yarn add react-configurable-modal

To install react-configurable-modal in React CDN app:

- Add this CDN script tag after React CDN scripts and before your JS files (for example from [cdnjs](https://cdnjs.com/)):

         <script src="https://cdn.jsdelivr.net/npm/react-configurable-modal@1/dist/index.min.js"></script>

- Use `<Modal>` tag inside your React CDN app.

## Usage

The general usage is pretty straight forward. After [Installation](#installation), you can import the modal using

```js
import { Modal } from "react-configurable-modal";
```

Set a boolean state to toggle the modal, and place your desired content within the `<Modal>` tags.

`Width`, `height`, `position`, `animation`, and `coords` (in case you want to have the modal popped where is clicked) are the props you can set to the modal. You can find a thorough explanation on props as well as their default values in [Props](#props).

- Press`esc` or click anywhere outside of the modal content to closec the modal!

Please see [Examples](#examples) for a better understanding on how to use props.

## Props

- The option you set on a specific element, for example: `<a data-type="warning"></a>` will only affect this specific tooltip

| Global    | Type                               | Required | Values                                                     | Default      | Description                                                                                                                                |
| :-------- | :--------------------------------- | :------- | :--------------------------------------------------------- | :----------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| setShow   | Function                           | ✔        | e.g. modalSetShow(false)                                   | -            | The setState function of the boolean defined to toggle the modal - Used for modal closing on close button and outside of the content click |
| children  | Node                               | -        | DOM                                                        | -            | Any markup desired to be shown in the modal                                                                                                |
| width     | String                             | -        | e.g. "300px", "50%"                                        | "33.3%"      | Specified width of the modal                                                                                                               |
| Height    | String                             | -        | e.g. "200px", "40%"                                        | "auto"       | Specified width of the modal                                                                                                               |
| Position  | String                             | -        | "", "top", "center", "bottom", "target"                    | "top"        | position: `target` makes the modal to pop up on the provided coordinates (coords).                                                         |
| animation | String                             | -        | "", "top", "bottom", "right", "left", "zoom-in", "fade-in" | No animation | To set the animation on modal popup                                                                                                        |
| coords    | Object <top: Number, left: Number> | -        | e.g. {top: 850, left: 300}                                 | -            | Only applies if the position is set to `target`. See [Examples](#examples) on how it's passed                                              |

- UPDATE: On position: `target`, there's a viewport checker hook that keeps the modal within the viewport if left-bottom is out of page

## Examples

Here is two simple examples of react-configurable-modal being used in an app with modal content (as children). First simply shows how to import and set the props and second one illustrates when positioned `target` and how to pass the coords:

```JSX
import React, { useState } from "react";
import { Modal } from "react-configurable-modal";

const App = () => {
  const [modalShow, modalSetShow] = useState(false);

  return (
    <div>
      {modalShow && (
        <Modal
          setShow={modalSetShow}
          width={"300px"}
          height={"350px"}
          animation={"top"}
          position={"top"}
        >

        /* -----Your modal content comes here----- */
          <div className="modal__header">
            <span
              onClick={() => modalSetShow(!modalShow)}
              className="modal__close"
            >
              &times;
            </span>
            <h2>Modal Header</h2>
          </div>
          <div className="modal__body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div className="modal__footer">
            <h3>Modal Footer</h3>
          </div>
          /* -----Your modal content comes here----- */

        </Modal>
      )}

      /*
       button click as the modal trigger
      */

      <button onClick={() => modalSetShow(!modalShow)}>
        Click
      </button>
    </div>
  );
};

export default App;
```

Example 2 with modal popped in the passed coordinates:

(To pop the modal on the passed coordinates, position prop should be set to `target`)

```JSX
import React, { useState } from "react";
import { Modal } from "react-configurable-modal";

const App = () => {
  const [modalShow, modalSetShow] = useState(false);
  const [coords, setCoords] = useState({});

  const handleClick = (e) => {
    modalSetShow(!modalShow);
    setCoords({ top: e.clientY, left: e.clientX });
  };

  return (
    <div>
      {modalShow && (
        <Modal
          setShow={modalSetShow}
          width={"50%"}
          animation={"fade-in"}
          position={"target"}
          coords={coords}
        >

        /* -----Your modal content comes here----- */
          <div className="modal__header">
            <span
              onClick={() => modalSetShow(!modalShow)}
              className="modal__close"
            >
              &times;
            </span>
            <h2>Modal Header</h2>
          </div>
          <div className="modal__body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div className="modal__footer">
            <h3>Modal Footer</h3>
          </div>
          /* -----Your modal content comes here----- */

        </Modal>
      )}

      /*
       button click as the modal trigger
      */

      <button onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default App;
```
