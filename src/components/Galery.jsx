import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


  return (
    <div className="h-screen">
      <div className="absolute w-full left-0 top-16">
        <ReactImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={true}
          showNav={false}
          showBullets={true}
          showNavigation={false}
          autoPlay={true}
          slideInterval={3000}
          slideDuration={1000}
        />
      </div>
    </div>
  );
};
