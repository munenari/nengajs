import { expect, test } from 'vitest'
import { replace, convertString2EM } from './util'

test('replacer', () => {
	const value = 'abcabc'
	expect(replace(value, 'aAbBcC')).toBe('ABCABC')
})

test('em', () => {
	const value = '1234567890'
	expect(convertString2EM(value)).toBe('一二三四五六七八九〇')
})
