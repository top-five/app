import { addDecorator, configure } from '@storybook/react';
import decorator from './decorator';

// automatically import all story.js files
const req = require.context('./src', true, /story\.(tsx?|jsx?)$/);

addDecorator(decorator);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
