/* eslint-env jest, mocha */
const path = require('path');
const rimraf = require('rimraf');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('Functional component', () => {
  const componentName = 'testFnComponent';
  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, 'tmp'))
      .withPrompts({
        name: componentName,
        type: 'Functional'
      });
  });
  afterEach(() => {
    rimraf.sync(path.join(__dirname, 'tmp'));
  });
  it('create component with given name', () => {
    assert.file(path.join(__dirname, `tmp/${componentName}.jsx`));
  });
  it('function has given name', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}.jsx`), `const ${componentName}`);
  });
  it('create container component with given name', () => {
    assert.file(path.join(__dirname, `tmp/${componentName}Container.js`));
  });
  it('container is importing correct file', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}Container.js`), `import ${componentName} from './${componentName}';`);
  });
  it('container is wrapping correct file', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}Container.js`), `export default connect(mapStateToProps, mapDispatchToProps)(${componentName});`);
  });
});

describe('Class component', () => {
  const componentName = 'testClassComponent';
  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, 'tmp'))
      .withPrompts({
        name: componentName,
        type: 'Class'
      });
  });
  afterEach(() => {
    rimraf.sync(path.join(__dirname, 'tmp'));
  });
  it('create component with given name', () => {
    assert.file(path.join(__dirname, `tmp/${componentName}.jsx`));
  });
  it('function has given name', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}.jsx`), `class ${componentName}`);
  });
  it('create container component with given name', () => {
    assert.file(path.join(__dirname, `tmp/${componentName}Container.js`));
  });
  it('container is importing correct file', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}Container.js`), `import ${componentName} from './${componentName}';`);
  });
  it('container is wrapping correct file', () => {
    assert.fileContent(path.join(__dirname, `tmp/${componentName}Container.js`), `export default connect(mapStateToProps, mapDispatchToProps)(${componentName});`);
  });
});
