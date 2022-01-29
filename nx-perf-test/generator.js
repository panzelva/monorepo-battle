const fs = require('fs');

// constants
const FOLDER = 'apps/web-no-deps/src/components/perf';

// helpers
function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad(`0${str}`, max) : str;
}

function component(index, color) {
  return `
import React from 'react';

export function Component${index}() {
  return <div css={{ width: 200, height: 100, color: "${color}" }}>component ${index}</div>;
}
  `;
}

// main
if (fs.existsSync(FOLDER)) {
  fs.rmdirSync(FOLDER, { recursive: true, force: true });
}

fs.mkdirSync(FOLDER, { recursive: true });

for (let i = 1; i <= 1000; i++) {
  const index = pad(i, 4);
  const componentPath = `${FOLDER}/Component${index}.tsx`;
  const color = `#${Math.floor(Math.random() * 16_777_215).toString(16)}`;

  fs.writeFileSync(componentPath, component(index, color));
}
