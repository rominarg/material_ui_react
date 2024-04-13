import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {

  const images = [
    {
      original: "https://motos.honda.com.ar/uploads/home/slides/70familia-xr.jpg/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://motos.honda.com.ar/uploads/home/slides/73slide-motos-tornado-3-anos-garantia.jpg",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://motos.honda.com.ar/uploads/home/slides/56slides-motos-2023-wave.jpg",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];


  return (
    <div style={{width:"100%", margin:"auto"}}>
      <ImageGallery items={images} 
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
      showBullets={true}
      />
    </div>
  );
}

export default App