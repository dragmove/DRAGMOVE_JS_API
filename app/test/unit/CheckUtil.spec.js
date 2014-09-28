define(['CheckUtil'], function(CheckUtil) {
	'use strict';

	describe('CheckUtil', function() {
		describe('existy', function() {
			it('should return false when param null', function() {
				var result = CheckUtil.existy(null);
				expect(result).toEqual(false);
			});

			it('should return false when param undefined', function() {
				var result = CheckUtil.existy(undefined);
				expect(result).toEqual(false);
			});

			it('should return false when param undefine variable', function() {
				var result = CheckUtil.existy({}.notHere);
				expect(result).toEqual(false);
			});

			it('should return false when param temp function', function() {
				var result = CheckUtil.existy((function(){})());
				expect(result).toEqual(false);
			});

			it('should return true when param 0', function() {
				var result = CheckUtil.existy(0);
				expect(result).toEqual(true);
			});

			it('should return true when param false', function() {
				var result = CheckUtil.existy(false);
				expect(result).toEqual(true);
			});
		});

		describe('truthy', function() {
			it('should return false when param false', function() {
				var result = CheckUtil.truthy(false);
				expect(result).toEqual(false);
			});

			it('should return false when param undefined', function() {
				var result = CheckUtil.truthy(undefined);
				expect(result).toEqual(false);
			});

			it('should return true when param 0', function() {
				var result = CheckUtil.truthy(0);
				expect(result).toEqual(true);
			});

			it('should return true when param empty string', function() {
				var result = CheckUtil.truthy('');
				expect(result).toEqual(true);
			});

		});
	});
});