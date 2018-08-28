<p align="center">
  <img src='https://i.imgur.com/5fgTysV.jpg' alt='Tetrahedron Logo'/>
</p>

<p align="center">
  <a href="https://travis-ci.org/tetrahedron/grid">
    <img src="https://travis-ci.org/tetrahedron/grid.svg?branch=master" alt="Travis CI build status">
  </a>
  <a href="https://spectrum.chat/tetrahedron">
    <img src="https://withspectrum.github.io/badge/badge.svg" alt="Join the community on Spectrum">
  </a>
</p>

# Tetrahedron Grid

Tetrahedron Grid is a responsive flexbox grid system for [styled-components](https://github.com/styled-components/styled-components) that is unopinionated.

## Quick Jump

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Documentation](#documentation)
   1. [`Grid.Provider`](#gridprovider)
   2. [`Grid.Bounds`](#gridbounds)
   3. [`Grid.Box`](#gridbox)

## Features

- Add unlimited breakpoints
- Any property can be altered by a breakpoint
- Debug mode that allows easy visualization of your layout

## Installation

#### Using yarn

```bash
yarn add @tetrahedron/grid
```

#### Using npm

```bash
npm install @tetrahedron/grid
```

## Usage

#### Basic Example

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Grid from "@tetrahedron/grid";

const App = () => (
  <Grid.Bounds direction="vertical">
    <Grid.Box>Header</Grid.Box>
    <Grid.Box>Content</Grid.Box>
    <Grid.Box>Footer</Grid.Box>
  </Grid.Bounds>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

#### Responsive Example

To make your layout responsive, use the `Grid.Provider` to define breakpoints. You can add as many or as few breakpoints as you'd like.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Grid from "@tetrahedron/grid";

const App = () => (
  <Grid.Provider
    padding="20px"
    breakpoints={{ sm: [0, 500], md: [501, 750], lg: [751, 1200] }}
  >
    <Grid.Bounds direction="vertical">
      <Grid.Box sm={{ hidden: true }}>
        This header hides on small screens
      </Grid.Box>
      <Grid.Box>Content</Grid.Box>
      <Grid.Box lg={{ padding: "50px" }}>
        This footer gains extra padding on large screens
      </Grid.Box>
    </Grid.Bounds>
  </Grid.Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

If you want to be more verbose with your naming convention, that's perfectly fine too! Go ahead and name your breakpoints whatever feels right

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Grid from "@tetrahedron/grid";

const App = () => (
  <Grid.Provider
    breakpoints={{ mobile: [0, 500], tablet: [501, 750], laptop: [751, 1200] }}
  >
    <Grid.Bounds direction="vertical">
      <Grid.Box>Header</Grid.Box>
      <Grid.Box>Content</Grid.Box>
      <Grid.Box>Footer</Grid.Box>
    </Grid.Bounds>
  </Grid.Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

You don't need to fill all screen sizes either, if you only need elements to change on a single resolution, just add a single breakpoint! To learn more about breakpoints, check out the documentation for [`Grid.Provider`](#gridprovider).

## Documentation

### `Grid.Provider`

#### Props

- `padding`: `string` - structure: `20px`
  - Default padding to use for child `Grid.Box` components
- `breakpoints`: `{ key: [int, int] }` - structure: `{ name: [min, max]}`
  - Breakpoints for setting resolution-specific properties on child `Grid.Box` components

<details><summary><strong>Defining Breakpoints</strong></summary><p>

Defining breakpoints gives you strong control over the way your content is rendered at various screen sizes. Any property that can be set on `Grid.Box` can be set per-breakpoint. Here's a few things to keep in mind when defining breakpoints:

- Breakpoints can be named whatever you'd like (with a few exceptions laid out in the next section)
- When defining breakpoints, you must pass an array object containing **only** two values: the min and max (both must be integers)
- Breakpoints can have overlapping values. Use responsibly though, as it's possible to produce unexpected results when setting conflicting values on a `Grid.Box` with overlapping breakpoints. i.e. if `mobile` and `tablet` have overlapping pixels, don't make a `Grid.Box` hide on mobile and show on tablet.

</p></details>

<details><summary><strong>Restricted Breakpoint Names</strong></summary><p>

Although you can name breakpoints whatever you want, there are a few names that we do not recommend using because they will conflict with existing property names. Most of these are pretty obvious and would never come up in real usage, but it's worth having a list here just to be sure!

- `background`
- `border`
- `checked`
- `className`
- `dangerouslySetInnerHTML`
- `display`
- `height`
- `hidden`
- `htmlFor`
- `margin`
- `onChange`
- `opacity`
- `padding`
- `selected`
- `style`
- `suppressContentEditableWarning`
- `suppressHydrationWarning`
- `value`
- `visibility`
- `width`

</p></details>

### `Grid.Bounds`

#### Props

- `debug` : `boolean`
  - Outlines the grid system so you can visualize the layout
- `flex`: `string` - structure: `grow shrink basis`
  - Controls the CSS `flex` property
- `direction`: `string` - `horizontal` or `vertical`
  - Sets the primary axis the children should be in line with
- `wrap`: `boolean`
  - Sets whether the children should wrap when there's no more room on the primary axis
- `valign`: `string` - `top`, `center`, or `bottom`
  - Alignment of children along the vertical axis
- `halign`: `string` - `left`, `center`, or `right`
  - Alignment of children along the horizontal axis

### `Grid.Box`

#### Props

- `debug` : `boolean`
  - Outlines the grid system so you can visualize the layout
- `debug` : `boolean`
  - Outlines the grid system so you can visualize the layout
- `flex`: `string` - structure: `grow shrink basis`
  - Controls the CSS `flex` property
- `fill`: `boolean`
  - Sets whether the `Box` should fill up all available space
- `fluid`: `boolean`
  - Convenience property for disabling padding
- `shiftRight`: `boolean`
  - Shifts the box to the right of the parent `Bounds`
- `shiftLeft`: `boolean`
  - Shifts the box to the ;eft of the parent `Bounds`
- `shiftUp`: `boolean`
  - Shifts the box to the top of the parent `Bounds`
- `shiftDown`: `boolean`
  - Shifts the box to the bottom of the parent `Bounds`

## Credits

Tetrahedron Grid is a project by [Garet McKinley](https://github.com/garetmckinley)

## License

MIT
