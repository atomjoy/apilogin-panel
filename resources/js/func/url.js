function replaceUrl(text) {
	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
	return text.replace(exp, "<a href='$1' target='_blank'>$1</a>")
}

function replaceUrlLinks(text) {
	const Rexp = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/gi
	return text.replace(Rexp, "<a href='$1' target='_blank'>$3</a>")
}

export { replaceUrl, replaceUrlLinks }
