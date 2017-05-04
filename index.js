module.exports = fn => (...args) => new Promise((resolve, reject) => {
	args.push((err, data) => err ? reject(err) : resolve(data));
	fn.apply(fn, args);
})
