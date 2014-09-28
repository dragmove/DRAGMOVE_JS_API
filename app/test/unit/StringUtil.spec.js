define(['StringUtil'], function(StringUtil) {
	'use strict';

	describe('StringUtil', function() {
		describe('isStrHasContinueAlphabet', function() {
			it('abcd... type match continue alphabet', function() {
				var result = StringUtil.isStrHasContinueAlphabet('efgabHiJk', 5);
				expect(result).toEqual( false );
			});

			it('abcd... type match continue alphabet', function() {
				var result = StringUtil.isStrHasContinueAlphabet('efgabHiJk', 3);
				expect(result).toEqual( true );
			});
		});

		describe('isStrHasContinueNumber', function() {
			it('1234... type number match continue number', function() {
				var result = StringUtil.isStrHasContinueNumber('33341781234253', 3);
				expect(result).toEqual( true );
			});

			it('1234... type number match continue number', function() {
				var result = StringUtil.isStrHasContinueNumber('11123', 4);
				expect(result).toEqual( false );
			});
		});

		describe('getArrHasRepeatStr', function() {
			it('should return array when param getArrHasRepeatStr has repeat str', function() {
				var result = StringUtil.getArrHasRepeatStr('1122333344445577778899', 4);
				expect(result).toEqual(['3333', '4444', '7777']);
			});

			it('should return array when param getArrHasRepeatStr has repeat str', function() {
				var result = StringUtil.getArrHasRepeatStr('aaAabbbCcCcCc12333344444444556', 3);
				expect(result).toEqual(['aaAa', 'bbb', 'CcCcCc', '3333', '44444444']);
			});

			it("should return empty array when param getArrHasRepeatStr doesn't have repeat str", function() {
				var result = StringUtil.getArrHasRepeatStr('aaAabbbCcCcCc12333344444444556', 9);
				expect(result).toEqual([]);
			});
		});

		describe('isContinueAlphabet', function() {
			it('should return true when param A, b', function() {
				var result = StringUtil.isContinueAlphabet('A', 'b');
				expect(result).toEqual(true);
			});

			it('should return true when param g, h', function() {
				var result = StringUtil.isContinueAlphabet('g', 'h');
				expect(result).toEqual(true);
			});

			it('should return true when param b, h', function() {
				var result = StringUtil.isContinueAlphabet('b', 'h');
				expect(result).toEqual(false);
			});

			it('should return true when param x, Y', function() {
				var result = StringUtil.isContinueAlphabet('x', 'Y');
				expect(result).toEqual(true);
			});
		});

	});
});