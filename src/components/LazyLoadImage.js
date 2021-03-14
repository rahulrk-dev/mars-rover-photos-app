import {
	LazyLoadImage,
	trackWindowScroll,
} from 'react-lazy-load-image-component'
import './LazyLoadImage.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import placeholder from '../assets/img/placeholder.png'

const LazyImageLoad = ({ image, scrollPosition }) => {
	return (
		<div className="lazyLoadImage">
			<LazyLoadImage
				src={image.img_src} // use normal <img> attributes
				placeholderSrc={placeholder}
				effect="blur"
				width={250}
				height={250}
				threshold={1000}
				scrollPosition={scrollPosition}
			/>
			<span className="lazyLoadImage__caption">{image.camera.full_name}</span>
		</div>
	)
}

export default trackWindowScroll(LazyImageLoad)
