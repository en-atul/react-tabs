## React Tabs

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

**React-Tabs is an animated tab navigation component which is designed for react
app.**

**[Live Demo](https://codesandbox.io/s/t-react-tab-mdnzqn?file=/src/App.js)**

![Alt text](visual/react-collapsible.png?raw=true 'React Tabs')

# Installation

```js
 # If you use npm:
 npm i @atul15r/react-tabs

 # If you use yarn:
 yarn add @atul15r/react-tabs


 ES6 Usage
 import { Collapsible } from '@atul15r/react-tabs';

 Commonjs Usage
 var Collapsible = require('@atul15r/react-tabs');

```

# Quick Start

![Alt text](visual/react-collapsible-simple.gif?raw=true 'React Collapsible')

```js
<Tabs items={items} />
```

# Usage With Custom Styles

> icon component can be HTMLElement (i.e. svg/image/div/section
> ...etc)/React-Component

![Alt text](visual/react-collapsible-black.gif?raw=true 'React Collapsible')

```js

import React from 'react';
import { Tabs } from '@atul15r/react-tabs';

const tabs = [
  {
    title: "TypeScript",

  {
    title: "JavaScript",

  },
];


const App = () => {
  return (
   <Tabs
 tabs={tabs}
 tabStyle={{
         background: `#fff`,
         font-weight: 500,
         color: "#333"
 }}
/>
  );
};

export default App;

```

# Props

| name          | type     | required | default   | description                                                    |
| ------------- | -------- | -------- | --------- | -------------------------------------------------------------- |
| tabs          | array    | true     | []        | it takes an array of object `{ title: string \| ReactNode }[]` |
| tabsClassName | string   | false    | undefined | add any custom class you want                                  |
| tabsStyle     | object   | false    | undefined | `wrapperStyle= {{ background:"#ccc", color:"#999", ...etc }}`  |
| tabClassName  | string   | false    | undefined | add any custom class you want                                  |
| tabStyle      | object   | false    | undefined | ` itemStyle= {{ padding:4, }}`                                 |
| onChange      | function | false    | undefined | ` onChange={(tabIndex)=>setCurrentTab(tabIndex)}`              |
