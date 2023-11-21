import { convertString2EM } from './util'

export default class Atena {
	constructor(config) {
		this.postcode = config.postcode || ''
		this.address = config.address || ''
		this.names = config.names || []
	}
	getNormAddress() {
		return convertString2EM(this.address)
	}
}
