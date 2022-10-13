## Introduction
Create a button component that will act as a base for future button variants. The base component should focus on functionality and common button styles.

### Goals
Create a BaseButton component that can be used as the example below. 
 
```tsx
// Renders a html <button> element
<BaseButton text="En knapp" size="s" isFluid disabled />

// Renders a html <a> element 
<BaseButton text="En knapp" size="s" href="http://google.se" target="_blank" />

// Below should make typescript unhappy since target is not a Button element attribute. 
<BaseButton text="En knapp" size="s" isFluid target="_blank" />
```

### Actions
- [ ] It should receive the following props: text, href, full width and two size options.
- [ ] It should have styling to act on full width and size props. 
- [ ] It should render an Anchor html element if href has been passed. 
- [ ] It should render a Button html element if href has been omitted. 
- [ ] It should be able to pass Button element attributes if href has been omitted.
- [ ] It should be able to pass Anchor element attributes if href has been passed. 
- [ ] It should should be type safe, when in use typescript should let us know which types are allowed.

*Note: You have the liberty to change property names in the above example if something else makes more sense.*

### Things to consider
- File structure
- Naming
- Properties 
- Typescript
- Interfaces
- AnchorElementAttributes
- ButtonElementAttributes

### Technologies
React, Typescript

### Technical references
- [Design Systems: React Buttons with the Base + Variant Pattern | by Aditya Agarwal | Bits and Pieces](https://blog.bitsrc.io/design-systems-react-buttons-with-the-base-variant-pattern-c56a3b394aaf)
- [Writing Type-Safe Polymorphic React Components (Without Crashing TypeScript) ・ Andrew Branch](https://blog.andrewbran.ch/polymorphic-react-components/)
- [TypeScript: Documentation - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Typing Component Props | React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/#basic-prop-types-examples)

### Authors
Tina & Cajsa
