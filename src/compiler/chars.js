'use strict';exports.$EOF = 0;
exports.$TAB = 9;
exports.$LF = 10;
exports.$VTAB = 11;
exports.$FF = 12;
exports.$CR = 13;
exports.$SPACE = 32;
exports.$BANG = 33;
exports.$DQ = 34;
exports.$HASH = 35;
exports.$$ = 36;
exports.$PERCENT = 37;
exports.$AMPERSAND = 38;
exports.$SQ = 39;
exports.$LPAREN = 40;
exports.$RPAREN = 41;
exports.$STAR = 42;
exports.$PLUS = 43;
exports.$COMMA = 44;
exports.$MINUS = 45;
exports.$PERIOD = 46;
exports.$SLASH = 47;
exports.$COLON = 58;
exports.$SEMICOLON = 59;
exports.$LT = 60;
exports.$EQ = 61;
exports.$GT = 62;
exports.$QUESTION = 63;
exports.$0 = 48;
exports.$9 = 57;
exports.$A = 65;
exports.$E = 69;
exports.$Z = 90;
exports.$LBRACKET = 91;
exports.$BACKSLASH = 92;
exports.$RBRACKET = 93;
exports.$CARET = 94;
exports.$_ = 95;
exports.$a = 97;
exports.$e = 101;
exports.$f = 102;
exports.$n = 110;
exports.$r = 114;
exports.$t = 116;
exports.$u = 117;
exports.$v = 118;
exports.$z = 122;
exports.$LBRACE = 123;
exports.$BAR = 124;
exports.$RBRACE = 125;
exports.$NBSP = 160;
exports.$PIPE = 124;
exports.$TILDA = 126;
exports.$AT = 64;
function isWhitespace(code) {
    return (code >= exports.$TAB && code <= exports.$SPACE) || (code == exports.$NBSP);
}
exports.isWhitespace = isWhitespace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXpNb2ljUFN3LnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvY2hhcnMudHMiXSwibmFtZXMiOlsiaXNXaGl0ZXNwYWNlIl0sIm1hcHBpbmdzIjoiQUFBYSxZQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ1QsWUFBSSxHQUFHLENBQUMsQ0FBQztBQUNULFdBQUcsR0FBRyxFQUFFLENBQUM7QUFDVCxhQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ1gsV0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNULFdBQUcsR0FBRyxFQUFFLENBQUM7QUFDVCxjQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ1osYUFBSyxHQUFHLEVBQUUsQ0FBQztBQUNYLFdBQUcsR0FBRyxFQUFFLENBQUM7QUFDVCxhQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ1gsVUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNSLGdCQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2Qsa0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsV0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNULGVBQU8sR0FBRyxFQUFFLENBQUM7QUFDYixlQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2IsYUFBSyxHQUFHLEVBQUUsQ0FBQztBQUNYLGFBQUssR0FBRyxFQUFFLENBQUM7QUFDWCxjQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ1osY0FBTSxHQUFHLEVBQUUsQ0FBQztBQUNaLGVBQU8sR0FBRyxFQUFFLENBQUM7QUFDYixjQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ1osY0FBTSxHQUFHLEVBQUUsQ0FBQztBQUNaLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFdBQUcsR0FBRyxFQUFFLENBQUM7QUFDVCxXQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ1QsV0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNULGlCQUFTLEdBQUcsRUFBRSxDQUFDO0FBRWYsVUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNSLFVBQUUsR0FBRyxFQUFFLENBQUM7QUFFUixVQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ1IsVUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNSLFVBQUUsR0FBRyxFQUFFLENBQUM7QUFFUixpQkFBUyxHQUFHLEVBQUUsQ0FBQztBQUNmLGtCQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGlCQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ2YsY0FBTSxHQUFHLEVBQUUsQ0FBQztBQUNaLFVBQUUsR0FBRyxFQUFFLENBQUM7QUFFUixVQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ1IsVUFBRSxHQUFHLEdBQUcsQ0FBQztBQUNULFVBQUUsR0FBRyxHQUFHLENBQUM7QUFDVCxVQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ1QsVUFBRSxHQUFHLEdBQUcsQ0FBQztBQUNULFVBQUUsR0FBRyxHQUFHLENBQUM7QUFDVCxVQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ1QsVUFBRSxHQUFHLEdBQUcsQ0FBQztBQUNULFVBQUUsR0FBRyxHQUFHLENBQUM7QUFFVCxlQUFPLEdBQUcsR0FBRyxDQUFDO0FBQ2QsWUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNYLGVBQU8sR0FBRyxHQUFHLENBQUM7QUFDZCxhQUFLLEdBQUcsR0FBRyxDQUFDO0FBRVosYUFBSyxHQUFHLEdBQUcsQ0FBQztBQUNaLGNBQU0sR0FBRyxHQUFHLENBQUM7QUFDYixXQUFHLEdBQUcsRUFBRSxDQUFDO0FBRXRCLHNCQUE2QixJQUFZO0lBQ3ZDQSxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxZQUFJQSxJQUFJQSxJQUFJQSxJQUFJQSxjQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxhQUFLQSxDQUFDQSxDQUFDQTtBQUM3REEsQ0FBQ0E7QUFGZSxvQkFBWSxlQUUzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0ICRFT0YgPSAwO1xuZXhwb3J0IGNvbnN0ICRUQUIgPSA5O1xuZXhwb3J0IGNvbnN0ICRMRiA9IDEwO1xuZXhwb3J0IGNvbnN0ICRWVEFCID0gMTE7XG5leHBvcnQgY29uc3QgJEZGID0gMTI7XG5leHBvcnQgY29uc3QgJENSID0gMTM7XG5leHBvcnQgY29uc3QgJFNQQUNFID0gMzI7XG5leHBvcnQgY29uc3QgJEJBTkcgPSAzMztcbmV4cG9ydCBjb25zdCAkRFEgPSAzNDtcbmV4cG9ydCBjb25zdCAkSEFTSCA9IDM1O1xuZXhwb3J0IGNvbnN0ICQkID0gMzY7XG5leHBvcnQgY29uc3QgJFBFUkNFTlQgPSAzNztcbmV4cG9ydCBjb25zdCAkQU1QRVJTQU5EID0gMzg7XG5leHBvcnQgY29uc3QgJFNRID0gMzk7XG5leHBvcnQgY29uc3QgJExQQVJFTiA9IDQwO1xuZXhwb3J0IGNvbnN0ICRSUEFSRU4gPSA0MTtcbmV4cG9ydCBjb25zdCAkU1RBUiA9IDQyO1xuZXhwb3J0IGNvbnN0ICRQTFVTID0gNDM7XG5leHBvcnQgY29uc3QgJENPTU1BID0gNDQ7XG5leHBvcnQgY29uc3QgJE1JTlVTID0gNDU7XG5leHBvcnQgY29uc3QgJFBFUklPRCA9IDQ2O1xuZXhwb3J0IGNvbnN0ICRTTEFTSCA9IDQ3O1xuZXhwb3J0IGNvbnN0ICRDT0xPTiA9IDU4O1xuZXhwb3J0IGNvbnN0ICRTRU1JQ09MT04gPSA1OTtcbmV4cG9ydCBjb25zdCAkTFQgPSA2MDtcbmV4cG9ydCBjb25zdCAkRVEgPSA2MTtcbmV4cG9ydCBjb25zdCAkR1QgPSA2MjtcbmV4cG9ydCBjb25zdCAkUVVFU1RJT04gPSA2MztcblxuZXhwb3J0IGNvbnN0ICQwID0gNDg7XG5leHBvcnQgY29uc3QgJDkgPSA1NztcblxuZXhwb3J0IGNvbnN0ICRBID0gNjU7XG5leHBvcnQgY29uc3QgJEUgPSA2OTtcbmV4cG9ydCBjb25zdCAkWiA9IDkwO1xuXG5leHBvcnQgY29uc3QgJExCUkFDS0VUID0gOTE7XG5leHBvcnQgY29uc3QgJEJBQ0tTTEFTSCA9IDkyO1xuZXhwb3J0IGNvbnN0ICRSQlJBQ0tFVCA9IDkzO1xuZXhwb3J0IGNvbnN0ICRDQVJFVCA9IDk0O1xuZXhwb3J0IGNvbnN0ICRfID0gOTU7XG5cbmV4cG9ydCBjb25zdCAkYSA9IDk3O1xuZXhwb3J0IGNvbnN0ICRlID0gMTAxO1xuZXhwb3J0IGNvbnN0ICRmID0gMTAyO1xuZXhwb3J0IGNvbnN0ICRuID0gMTEwO1xuZXhwb3J0IGNvbnN0ICRyID0gMTE0O1xuZXhwb3J0IGNvbnN0ICR0ID0gMTE2O1xuZXhwb3J0IGNvbnN0ICR1ID0gMTE3O1xuZXhwb3J0IGNvbnN0ICR2ID0gMTE4O1xuZXhwb3J0IGNvbnN0ICR6ID0gMTIyO1xuXG5leHBvcnQgY29uc3QgJExCUkFDRSA9IDEyMztcbmV4cG9ydCBjb25zdCAkQkFSID0gMTI0O1xuZXhwb3J0IGNvbnN0ICRSQlJBQ0UgPSAxMjU7XG5leHBvcnQgY29uc3QgJE5CU1AgPSAxNjA7XG5cbmV4cG9ydCBjb25zdCAkUElQRSA9IDEyNDtcbmV4cG9ydCBjb25zdCAkVElMREEgPSAxMjY7XG5leHBvcnQgY29uc3QgJEFUID0gNjQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1doaXRlc3BhY2UoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoY29kZSA+PSAkVEFCICYmIGNvZGUgPD0gJFNQQUNFKSB8fCAoY29kZSA9PSAkTkJTUCk7XG59XG4iXX0=