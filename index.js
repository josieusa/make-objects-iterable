module.exports.makeObjectsIterable = () => {
	Object.prototype[Symbol.iterator] = function* () {
		for (const e of Object.entries(this)) {
			yield Object.assign(e, {
			  k: e[0],
			  key: e[0],
			  v: e[1],
			  val: e[1],
			  value: e[1],
			});
		}
	};
};
