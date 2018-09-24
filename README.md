# gatsby-theme-crash
Reproduction of a Gatsby bug (prod build crashes when using themes of styled components)

# Problem
Styled components works in dev (`gatsby develop`) but not when building for prod (`gatsby build`).
The project illustrates the problem at 2 different places:
* The `StyledA` component (`src/pages/index/WorkWithUs/index.js`)
* The `StyledFontAwesomeIcon` component (`src/pages/index/StyledFontAwesomeIcon.js`)

However, there is a styled component that works both in dev and prod:
* The `ThisWorksInProd` component (`src/pages/index.js`)

# How to reproduce
* Clone the project
* `yarn` or `npm install`
* `gatsby develop` => il all works fine, theme colors are applied
* `gatsby build` => it produces the error message below

```
error Building static HTML for pages failed

See our docs page on debugging HTML builds for help https://goo.gl/yL9lND

  3 |
  4 | const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
> 5 |   color: ${props => props.theme.colors.green};
    |                                        ^
  6 |   margin-right: 15px;
  7 | `
  8 |
```
