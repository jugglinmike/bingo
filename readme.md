# Standards Testing

## Part I - Interpreting specifications and tests

The `test262` directory contains a subset of [the Test262 test
suite](https://github.com/tc39/test262).  Specifically: it only contains tests
for the built-in method `Array.prototype.reduce`.

The `src` directory contains a single JavaScript file. This file is used by the
tests to define a custom implementation of `Array.prototype.reduce`.

**Setup**

1. Install [git](https://git-scm.com/) and [Node.js](https://nodejs.org/)
2. Clone this repository
3. Install the Node.js dependencies by running the following command in a
   terminal in the root of this project:

       npm install

**Instruction**

Edit the source file to define the method according to [this
specification](https://bocoup.github.io/emca595/) document such that the tests
pass. To run the tests, execute the following command from the root of this
project:

    npm test

Remember that writing specifications is hard work, and so is writing tests!
Both the test files and the specification may be incorrect. To get the tests to
pass, you may have to correct errors in the test logic, and your implementation
may diverge from the specification. Be sure to have a justification for these
corrections.

## Part II - Contributing tests

As of Tuesday, July 4, 2017, the "real" Test262 project was missing tests for
the built-in value `Symbol.asyncIterator`. We don't tolerate missing coverage!

**Setup**

1. Install [git](https://git-scm.com/)
2. Clone [the official Test262 repository](https://github.com/tc39/test262) by
   running the following command in a terminal:

       git clone git@github.com:tc39/test262.git

3. Check out the problematic commit by running the following command from the
   root of the Test262 project:

       git checkout 'master@{2017-07-04}'

**Instruction**

Determine where tests for the `Symbol.asyncIterator` value belong in the
Test262 directory structure. Use [ECMA262 (the official language
specification)](https://github.com/tc39/ecma262) (and any existing tests) to
determine exactly what needs to be tested, and write the tests! [The Test262
contribution
guidelines](https://github.com/tc39/test262/blob/master/CONTRIBUTING.md) have
useful information on the practical details of writing tests.
