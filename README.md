# react-configurable-modal

A react library for creating popped modals with configurable dimensions, multiple animations and position options.

The advantage of this library is to pass the modal content as `chidren` prop and therefore, you can turn any desired DOM and styles as a modal.

[![GitHub issues](https://img.shields.io/github/issues/Behfar90/react-configurable-modal)]()
![gzip size](http://img.badgesize.io/https://unpkg.com/react-configurable-modal@1.0.1/dist/index.js?compression=gzip)
[![GitHub license](https://img.shields.io/github/license/Behfar90/react-configurable-modal)](https://img.shields.io/github/license/Behfar90/react-configurable-modal)

## Demo

[![ReactConfigurableModal Playground](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/2tqmts?file=/src/App.js)

Here is a playground that you can set different props to the `Modal` and see which one you desire to use.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save react-configurable-modal
    $ yarn add react-configurable-modal

To install react-configurable-modal in React CDN app:

- Add this CDN script tag after React CDN scripts and before your JS files (for example from [cdnjs](https://cdnjs.com/)):

         <script src="https://cdnjs.cloudflare.com/ajax/libs/react-configurable-modal/3.14.3/react-configurable-modal.min.js"
         integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
         crossorigin="anonymous"
         referrerpolicy="no-referrer"></script>

- Use `<ReactConfigurableModal>` tag inside your React CDN app.

## Usage

The general usage is pretty straight forward. After [Installation](#installation), you can import the modal using

```js
import { Modal } from "react-configurable-modal";
```

Set a boolean state to toggle the modal, and place your desired content within the `<Modal>` tags.

`Width`, `height`, `position`, `animation`, and `coords` (in case you want to have the modal popped where is clicked) are the props you can set to the modal. You can find a thorough explanation on props as well as their default values in [API](#api).

Please see [Examples](#examples) for a better understanding on how to use props.

## API
