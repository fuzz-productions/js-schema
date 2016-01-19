var RegexpSchema = require('../patterns/regexp')

String.of = function() {
	// Possible signatures : (charset)
	//                       (length, charset)
	//                       (minLength, maxLength, charset)
	var args = Array.prototype.slice.call(arguments).reverse(),
		charset = args[0] ? ('[' + args[0] + ']') : '.',
		max = args[1],
		min = (args.length > 2) ? args[2] : args[1],
		regexp = '^' + charset + '{' + (min || 0) + ',' + (max || '') + '}$';

	return new RegexpSchema(RegExp(regexp)).wrap();
}

String.atLeast = function() {
	// Possible signatures : (minLength)
	//                       (minLength, charset)
	var args = Array.prototype.slice.call(arguments),
		min = args[0],
		charset = args[1] ? ('[' + args[1] + ']') : '.',
		regexp = '^' + charset + '{' + (min || 0) + ',}$';

	return new RegexpSchema(RegExp(regexp)).wrap();
}

String.atMost = function() {
	// Possible signatures : (maxLength)
	//                       (maxLength, charset)
	var args = Array.prototype.slice.call(arguments),
		max = args[0],
		charset = args[1] ? ('[' + args[1] + ']') : '.',
		regexp = '^' + charset + '{0,' + (max || 0) + '}$';

	return new RegexpSchema(RegExp(regexp)).wrap();
}

String.schema = new RegexpSchema().wrap();
