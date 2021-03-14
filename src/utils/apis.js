export const BASE_API_URL =
	'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'

const API_KEY = 'DEMO_KEY'

export const fetchLatestDate = async () => {
	const date = await fetch(
		`https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity/?api_key=${API_KEY}`
	)
		.then((res) => res.json())
		.then((json) =>
			json.photo_manifest.photos.reverse().find((d) => d.total_photos > 50)
		)
		.then((data) => data.earth_date)

	return date
}

const fetchData = async (date, page) => {
	const data = await fetch(
		`${BASE_API_URL}?earth_date=${date}&api_key=${API_KEY}&page=${page}`
	).then((res) => res.json())

	return data
}

export default fetchData
