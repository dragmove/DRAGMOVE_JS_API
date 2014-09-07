define(['ArrayUtil'], function(ArrayUtil) {
	'use strict';

	describe('ArrayUtil', function() {
		describe('getCloseDistance', function() {
			it('should return null when param _array is undefined', function() {
				var result = ArrayUtil.getCloseDistance(null, null, null);
				expect(result).toEqual(null);
			});

			it('should return null when param _array length is 0', function() {
				var result = ArrayUtil.getCloseDistance([], null, null);
				expect(result).toEqual(null);
			});

			it("should return null when _array don't have _obj_base", function() {
				var result = ArrayUtil.getCloseDistance([1,2,3], null, 2);
				expect(result).toEqual(null);
			});

			it('should return 0 when [1, 2, 3], 1, 1', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3], 1, 1);
				expect(result).toEqual(0);
			});

			it('should return 1 when [1,2,3], 1, 2', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3], 1, 2);
				expect(result).toEqual(1);
			});

			it('should return -1 when [1,2,3], 2, 1', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3], 2, 1);
				expect(result).toEqual(-1);
			});

			it('should return -1 when [1,2,3], 1, 3', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3], 1, 3);
				expect(result).toEqual(-1);
			});

			it('should return 1 when [1,2,3], 3, 1', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3], 3, 1);
				expect(result).toEqual(1);
			});

			it('should return 1 when [1,2,3], 2, 3', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3], 2, 3);
				expect(result).toEqual(1);
			});

			it('should return -1 when [1,2,3], 3, 2', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3], 3, 2);
				expect(result).toEqual(-1);
			});

			it('should return 1 when [1,2,3,4], 1, 2', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4], 1, 2);
				expect(result).toEqual(1);
			});

			it('should return -1 when [1,2,3,4], 2, 1', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4], 2, 1);
				expect(result).toEqual(-1);
			});

			it('should return 2 when [1,2,3,4], 1, 3', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4], 1, 3);
				expect(result).toEqual(2);
			});

			it('should return -2 when [1,2,3,4], 3, 1', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4], 3, 1);
				expect(result).toEqual(-2);
			});

			it('should -1 when [1,2,3,4], 1, 4', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4], 1, 4);
				expect(result).toEqual(-1);
			});

			it('should return 1 when [1,2,3,4], 4, 1', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4], 4, 1);
				expect(result).toEqual(1);
			});

			it('should return 2 when [1,2,3,4], 2, 4', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4], 2, 4);
				expect(result).toEqual(2);
			});

			it('should return -2 when [1,2,3,4], 4, -2', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4], 4, 2);
				expect(result).toEqual(-2);
			});

			it('should return 3 when [1,2,3,4,5,6], 1, 4', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4,5,6], 1, 4);
				expect(result).toEqual(3);
			});

			it('should return -3 when [1,2,3,4,5,6], 4, 1', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4,5,6], 4, 1);
				expect(result).toEqual(-3);
			});

			it('should return 3 when [1,2,3,4,5,6,7,8], 1, 6', function() {
				var result = ArrayUtil.getCloseDistance([1,2,3,4,5,6,7,8], 1, 6);
				expect(result).toEqual(-3);
			});

		});
	});
});