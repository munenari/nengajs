const hyphen = '―' // 縦棒
const kanji = '1一2二3三4四5五6六7七8八9九0〇'

function charsReplacer(startChar, endChar, shiftToChar) {
	let res = ''
	const startCode = startChar.charCodeAt()
	const endCode = endChar.charCodeAt()
	const shiftToCode = shiftToChar.charCodeAt()
	for (let i = startCode; i <= endCode; i++) {
		const from = String.fromCharCode(i)
		const to = String.fromCharCode(shiftToCode + (i - startCode))
		res += `${from}${to}`
	}
	return res
}

const alphabet = charsReplacer('A', 'Z', 'Ａ')
function convertString2EM(str = '') {
	const s = hyphen
	str = str.replaceAll('_', ' ')
	str = replace(str, alphabet)
	str = replace(str, `ー${s}-${s}―${s}-${s}－${s}−${s}`)
	str = replace(str, kanji)
	str = str.replaceAll('\n', '<br>')
	str = str.replaceAll('<br>', '<br> ')
	return str.normalize('NFKC')
}

function replace(str, replacer) {
	const pairs = replacer.split('')
	if (pairs.length % 2 != 0) {
		throw new Error('replacer length must be devided by 2')
	}
	for (let i = 0; i < pairs.length; i += 2) {
		str = str.replaceAll(pairs[i], pairs[i + 1])
	}
	return str
}

export { replace, convertString2EM }
