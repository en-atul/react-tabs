## React Tabs

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

**React-Tabs is an animated tab navigation component which is designed for react
app.**

**[Live Demo](https://codesandbox.io/s/t-react-collapsible-zcrjlw?file=/src/App.js)**

![Alt text](visual/react-collapsible.png?raw=true 'React Tabs')

# Installation

```js
 # If you use npm:
 npm i @atul15r/react-collapsible

 # If you use yarn:
 yarn add @atul15r/react-collapsible


 ES6 Usage
 import { Collapsible } from '@atul15r/react-collapsible';

 Commonjs Usage
 var Collapsible = require('@atul15r/react-collapsible');

```

# Quick Start

![Alt text](visual/react-collapsible-simple.gif?raw=true 'React Collapsible')

```js
<Collapsible items={items} />
```

# Usage With Custom Styles

> icon component can be HTMLElement (i.e. svg/image/div/section
> ...etc)/React-Component

![Alt text](visual/react-collapsible-black.gif?raw=true 'React Collapsible')

```js

import React from 'react';
import { Tabs } from 'react-tabs';

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
 itemTitleStyle={{
         background: `repeating-radial-gradient(
         circle,
         purple,
         purple 10px,
         #4b026f 10px,
         #4b026f 20px
  )`,
  font-weight: 500,
  color: "#fff"
 }}
/>
  );
};

export default App;

```

# Props

| name                 | type   | required | default   | description                                                                                |
| -------------------- | ------ | -------- | --------- | ------------------------------------------------------------------------------------------ |
| items                | array  | true     | []        | it takes an array of object `{ key: number title: string content: string \| ReactNode }[]` |
| wrapperClassName     | string | false    | undefined | add any custom class you want                                                              |
| wrapperStyle         | object | false    | undefined | `wrapperStyle= {{ background:"#ccc", color:"#999", ...etc }}`                              |
| itemClassName        | string | false    | undefined | add any custom class you want                                                              |
| itemStyle            | object | false    | undefined | ` itemStyle= {{ padding:4, }}`                                                             |
| itemTitleClassName   | string | false    | undefined | add any custom class you want eg: "text-lg italic" ...etc                                  |
| itemTitleStyle       | object | false    | undefined | `itemTitleStyle= {{ fontSize:12 }}`                                                        |
| itemContentClassName | string | false    | undefined | add any custom class you want eg: "p-4 mx-3" ...etc                                        |
| itemContentStyle     | object | false    | undefined | `itemContentStyle= {{ padding:"4px 12px", background:"#fefefe" }}`                         |
| icon                 | func   | false    | undefined | `<Collapsible icon={(isOpen:boolean) => <IconComponent isOpen={isOpen}/>} />`              |
| iconStyle            | object | false    | undefined | ` iconStyle= {{ activeColor:"#fff", inactiveColor: "#fff", width: 20, height: 20 }}`       |
