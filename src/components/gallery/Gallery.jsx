import "./Gallery.scss";

const galleryImages = [
  "Agave 1.png",
  "Agave 2.png",
  "Agave 3.png",
  "Agave 4.png",
  "Agave 5.png",
  "Agave 6.png",
];

const GalleryItem = ({ img }) => {
  return (
    <div className="grid-item">
      <img src={img} alt={img} />
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="image-grid">
        {galleryImages.map((img, index) => (
          <GalleryItem key={index} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
