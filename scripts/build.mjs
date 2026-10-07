import { mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const files = ['index.html', 'style.css', 'assets/coffee.svg', 'assets/bean.svg'];
await mkdir(resolve(root, 'dist/assets'), { recursive: true });
for (const file of files) {
  await copyFile(resolve(root, file), resolve(root, 'dist', file));
}
console.log('Prepared ' + files.length + ' static website files in dist/.');
