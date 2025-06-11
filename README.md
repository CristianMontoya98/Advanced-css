# Advanced-css
Project to practice advanced css features

## Pseudoclase has

La pseudoclase `:has()` nos permite seleccionar un elemento **en función de si contiene un descendiente** (hijo, nieto, etc.) que cumpla con ciertas características.
```
div:has(p) {
    border: 2px solid blue;
    padding: 10px;
    background-color: lightyellow;
}
```
