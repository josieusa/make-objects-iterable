module.exports.makeObjectsIterable = () => {
	Object.prototype[Symbol.iterator] = function* () {
		for (const e of Object.entries(this)) {
			yield {
				k: e[0],
				v: e[1],
			};
		}
	};
};
