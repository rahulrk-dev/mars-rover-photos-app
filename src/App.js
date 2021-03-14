import { useState, useEffect } from 'react'
import './App.css'
import LazyImageLoad from './components/LazyLoadImage'
import banner from './assets/img/rover-banner.jpg'
import useDataFetcher from './hooks/dataFetcher'

function App() {
	const { isLoading, photos } = useDataFetcher(1)
	const [scrollPosition, setScrollPosition] = useState(0)

	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className="app">
			<div className="app__header">
				<h1>MARS Rover Photo Gallery</h1>
				<img src={banner} alt="banner" />
				{!isLoading && photos.length > 0 && (
					<h3>Data Date: {new Date(photos[0].earth_date).toDateString()}</h3>
				)}
			</div>
			<div className="app__gallery">
				{isLoading && <h1>Loading...</h1>}
				{photos &&
					photos.map((photo) => (
						<LazyImageLoad
							key={photo.id}
							image={photo}
							scrollPosition={scrollPosition}
						/>
					))}
			</div>
		</div>
	)
}

export default App
