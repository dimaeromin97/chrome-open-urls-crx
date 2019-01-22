const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;


module.exports = ( text ) => {
	const urls = text.match(urlRegex);

	if(
		!urls ||
		( Array.isArray(urls) && urls.length <= 0 )
	) {
		return [];
	}

	return urls;
};