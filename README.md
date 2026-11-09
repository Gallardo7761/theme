# theme

Tema común de las webs de killobyte.es: todo en JetBrains Mono, como un `.txt` con enlaces. Títulos con `## `, tablas sin bordes, botones como `[enlaces]` y el verde y naranja de killobyte. Con `prefers-color-scheme: dark` cambia solo al verde oscuro de siempre.

```html
<link rel="stylesheet" href="https://cdn.killobyte.es/files/theme/v4/kb.css">
<script type="module" src="https://cdn.killobyte.es/files/theme/v4/kb.js"></script>
```

`kb.css` ya da estilo a los elementos sueltos (`h1`–`h3`, `table`, `figure`, `input`, `button`…), así que basta con HTML semántico.
`kb.js` define `<kb-header site tag href>` y `<kb-footer>`.

| Clase | Uso |
| --- | --- |
| `.kb-shell` | columna a pantalla completa con el pie abajo |
| `.kb-container` | ancho de lectura (`--kb-width`) |
| `.kb-scroll` | envuelve tablas anchas para que hagan scroll ellas y no la página |
| `.kb-muted`, `.kb-mono` | texto secundario, texto monoespaciado |

| Variable | Claro |
| --- | --- |
| `--kb-paper` | `#FDFCF8` |
| `--kb-ink` | `#18201B` |
| `--kb-muted` | `#5B6B61` |
| `--kb-rule` | `#2C4B3B` |
| `--kb-rule-soft` | `#C9D6CD` |
| `--kb-shade` | `#E4EFE7` |
| `--kb-tint` | `#F2F7F3` |
| `--kb-green` | `#2C4B3B` |
| `--kb-green-light` | `#7DB896` |
| `--kb-accent` | `#E2621A` |
| `--kb-accent-soft` | `#F6CBA8` |
| `--kb-link` | `#1F6B45` |
| `--kb-link-visited` | `#8F3D10` |
| `--kb-font-body` | JetBrains Mono (400, 500, 700) |
| `--kb-width` | `880px` |
