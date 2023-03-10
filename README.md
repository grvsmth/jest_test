# jest_test

In 2018 I created a small repo to demonstrate using #JestJS to
create unit tests for #javascript.  At the time Jest only supported
"common" JS (used with Node) natively; anything else required
transpiling with Babel.

## ECMAScript modules

A few years ago Node released "experimental" support for ECMAscript
modules (the kind used in the browser), and Jest added some functions
to test that kind of mmodule.  This branch aims to demonstrate how to
implement Jest's new [native support for ECMAScript
modules](https://jestjs.io/docs/ecmascript-modules).
