import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const read = (name) => readFileSync(`css/${name}`, 'utf8').replaceAll('../fonts/', 'fonts/');

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
cpSync('fonts', 'dist/fonts', { recursive: true });

writeFileSync('dist/miarma.css', ['fonts.css', 'tokens.css', 'base.css', 'shell.css', 'footer.css'].map(read).join('\n'));
writeFileSync('dist/tokens.css', read('tokens.css'));
writeFileSync('dist/bootstrap.css', read('bootstrap.css'));
writeFileSync('dist/miarma.js', ['header.js', 'footer.js'].map((name) => readFileSync(`js/${name}`, 'utf8')).join('\n'));
