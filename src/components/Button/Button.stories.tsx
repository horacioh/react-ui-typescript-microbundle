import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number } from '@storybook/addon-knobs';

import { Button } from "./Button";

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <div>
//     <h1>Coeli UI Library Design System</h1>
//   </div>
// ));

storiesOf("Button", module)
.addParameters({
  info: {
    // Make a default for all stories in this book,
    inline: true, // where the components are inlined
    styles: {
      header: {
        h1: {
          color: 'red', // and the headers of the sections are red.
        },
      },
    },
  },
})
  .add("Primary Button", () => (
    <Button variant="primary" onClick={action("clicked")}>{text('Label', 'Primary Button')}</Button>
  ))
  .add("Secondary Button", () => (
    <Button variant="secondary" onClick={action("clicked")}>{text('Label', 'Secondary Button')}</Button>
  ));
