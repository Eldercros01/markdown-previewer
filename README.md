# 📝 Markdown Previewer

Este proyecto es una solución al desafío **"Build a Markdown Previewer"** de [freeCodeCamp](https://www.freecodecamp.org/learn/). Es una aplicación React que convierte texto escrito en Markdown en una vista previa en HTML en tiempo real.

## 🚀 Características

- ✅ Actualización en tiempo real del contenido Markdown.
- ✅ Soporte completo para GitHub Flavored Markdown (GFM).
- ✅ Diseño responsive con Bootstrap.
- ✅ Previsualización segura usando `dangerouslySetInnerHTML` con [`marked`](https://marked.js.org/).
- ✅ Compatible con el bundle de pruebas de freeCodeCamp.

## 📸 Vista previa

![Demo del proyecto](https://codepen.io/eldercross/pen/Pwqydgj)

## 🎯 Historias de Usuario

1. Puedo ver un elemento `textarea` con `id="editor"`.
2. Puedo ver un elemento con `id="preview"`.
3. Cuando escribo en `#editor`, el contenido se muestra en tiempo real en `#preview`.
4. El contenido escrito en Markdown se convierte correctamente a HTML usando `marked`.
5. Al cargar, el editor contiene un texto por defecto con:
   - Título `#`
   - Subtítulo `##`
   - Enlace `[texto](url)`
   - Código en línea
   - Bloque de código
   - Lista
   - Cita en bloque
   - Imagen
   - Texto en negrita
6. El contenido inicial se renderiza correctamente al cargar.

## 🛠️ Tecnologías usadas

- [React](https://reactjs.org/)
- [Marked](https://marked.js.org/)
- [Bootstrap](https://getbootstrap.com/)
- [FreeCodeCamp Test Bundle](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js)

## ▶️ Cómo ejecutarlo localmente

```bash
git clone https://github.com/Eldercros01/markdown-previewer.git
cd markdown-previewer
npm install
npm start
