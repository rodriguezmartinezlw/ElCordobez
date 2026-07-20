export default function ImageGallery() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
  ];

  return (
    <section className="max-w-5xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Galería</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded shadow">
            <img src={src} alt={`Imagen ${i + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
