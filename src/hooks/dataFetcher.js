import { useState, useEffect } from 'react'
import fetchData, { fetchLatestDate } from '../utils/apis'

const useDataFetcher = (page) => {
	const [photos, setPhotos] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const fetcher = async () => {
			setIsLoading(true)

			const date = await fetchLatestDate()

			fetchData(date, page)
				.then(({ photos }) => {
					setPhotos(photos)
					setIsLoading(false)
				})
				.catch((err) => {
					setIsLoading(false)
				})
		}

		fetcher()
	}, [page])

	return { isLoading, photos }
}

export default useDataFetcher
