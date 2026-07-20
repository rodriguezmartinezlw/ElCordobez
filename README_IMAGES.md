Instrucciones para añadir las 4 imágenes a la web

He creado la carpeta public/images (con un .gitkeep) y un componente que muestra 4 imágenes desde esa carpeta.

Qué debes hacer ahora:

1. Añade las 4 imágenes que me diste a la carpeta public/images en la raíz del proyecto y nómbralas exactamente así:
   - image1.jpg
   - image2.jpg
   - image3.jpg
   - image4.jpg

   Puedes repetir las mismas imágenes si quieres que aparezcan más de una vez en la web.

2. Arranca la aplicación de desarrollo (usa el comando que tenga tu proyecto, por ejemplo):
   - npm run dev
   o
   - pnpm dev

3. Abre la ruta /gallery en tu navegador: http://localhost:3000/gallery

Detalles técnicos:
- Se ha añadido:
  - public/images/.gitkeep  (para crear la carpeta en el repositorio)
  - app/components/ImageGallery.tsx (componente que renderiza las 4 imágenes usando Tailwind)
  - app/gallery/page.tsx (página que importa el componente)

Si quieres que suba yo las imágenes al repositorio directamente, dímelo y las subiré (necesito que me confirmes los nombres de archivo finales y que quieres que las incluya en el repo).