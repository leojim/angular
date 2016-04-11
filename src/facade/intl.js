'use strict';(function (NumberFormatStyle) {
    NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
    NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
    NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
})(exports.NumberFormatStyle || (exports.NumberFormatStyle = {}));
var NumberFormatStyle = exports.NumberFormatStyle;
var NumberFormatter = (function () {
    function NumberFormatter() {
    }
    NumberFormatter.format = function (num, locale, style, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.minimumIntegerDigits, minimumIntegerDigits = _c === void 0 ? 1 : _c, _d = _b.minimumFractionDigits, minimumFractionDigits = _d === void 0 ? 0 : _d, _e = _b.maximumFractionDigits, maximumFractionDigits = _e === void 0 ? 3 : _e, currency = _b.currency, _f = _b.currencyAsSymbol, currencyAsSymbol = _f === void 0 ? false : _f;
        var intlOptions = {
            minimumIntegerDigits: minimumIntegerDigits,
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits
        };
        intlOptions.style = NumberFormatStyle[style].toLowerCase();
        if (style == NumberFormatStyle.Currency) {
            intlOptions.currency = currency;
            intlOptions.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
        }
        return new Intl.NumberFormat(locale, intlOptions).format(num);
    };
    return NumberFormatter;
})();
exports.NumberFormatter = NumberFormatter;
function digitCondition(len) {
    return len == 2 ? '2-digit' : 'numeric';
}
function nameCondition(len) {
    return len < 4 ? 'short' : 'long';
}
function extractComponents(pattern) {
    var ret = {};
    var i = 0, j;
    while (i < pattern.length) {
        j = i;
        while (j < pattern.length && pattern[j] == pattern[i])
            j++;
        var len = j - i;
        switch (pattern[i]) {
            case 'G':
                ret.era = nameCondition(len);
                break;
            case 'y':
                ret.year = digitCondition(len);
                break;
            case 'M':
                if (len >= 3)
                    ret.month = nameCondition(len);
                else
                    ret.month = digitCondition(len);
                break;
            case 'd':
                ret.day = digitCondition(len);
                break;
            case 'E':
                ret.weekday = nameCondition(len);
                break;
            case 'j':
                ret.hour = digitCondition(len);
                break;
            case 'h':
                ret.hour = digitCondition(len);
                ret.hour12 = true;
                break;
            case 'H':
                ret.hour = digitCondition(len);
                ret.hour12 = false;
                break;
            case 'm':
                ret.minute = digitCondition(len);
                break;
            case 's':
                ret.second = digitCondition(len);
                break;
            case 'z':
                ret.timeZoneName = 'long';
                break;
            case 'Z':
                ret.timeZoneName = 'short';
                break;
        }
        i = j;
    }
    return ret;
}
var dateFormatterCache = new Map();
var DateFormatter = (function () {
    function DateFormatter() {
    }
    DateFormatter.format = function (date, locale, pattern) {
        var key = locale + pattern;
        if (dateFormatterCache.has(key)) {
            return dateFormatterCache.get(key).format(date);
        }
        var formatter = new Intl.DateTimeFormat(locale, extractComponents(pattern));
        dateFormatterCache.set(key, formatter);
        return formatter.format(date);
    };
    return DateFormatter;
})();
exports.DateFormatter = DateFormatter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50bC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtek1vaWNQU3cudG1wL2FuZ3VsYXIyL3NyYy9mYWNhZGUvaW50bC50cyJdLCJuYW1lcyI6WyJOdW1iZXJGb3JtYXRTdHlsZSIsIk51bWJlckZvcm1hdHRlciIsIk51bWJlckZvcm1hdHRlci5jb25zdHJ1Y3RvciIsIk51bWJlckZvcm1hdHRlci5mb3JtYXQiLCJkaWdpdENvbmRpdGlvbiIsIm5hbWVDb25kaXRpb24iLCJleHRyYWN0Q29tcG9uZW50cyIsIkRhdGVGb3JtYXR0ZXIiLCJEYXRlRm9ybWF0dGVyLmNvbnN0cnVjdG9yIiwiRGF0ZUZvcm1hdHRlci5mb3JtYXQiXSwibWFwcGluZ3MiOiJBQTJDQSxXQUFZLGlCQUFpQjtJQUMzQkEsK0RBQU9BLENBQUFBO0lBQ1BBLCtEQUFPQSxDQUFBQTtJQUNQQSxpRUFBUUEsQ0FBQUE7QUFDVkEsQ0FBQ0EsRUFKVyx5QkFBaUIsS0FBakIseUJBQWlCLFFBSTVCO0FBSkQsSUFBWSxpQkFBaUIsR0FBakIseUJBSVgsQ0FBQTtBQUVEO0lBQUFDO0lBc0JBQyxDQUFDQTtJQXJCUUQsc0JBQU1BLEdBQWJBLFVBQWNBLEdBQVdBLEVBQUVBLE1BQWNBLEVBQUVBLEtBQXdCQSxFQUNyREEsRUFPTUE7aUNBQUZFLEVBQUVBLHFDQVBMQSxvQkFBb0JBLG1CQUFHQSxDQUFDQSxzQ0FBRUEscUJBQXFCQSxtQkFBR0EsQ0FBQ0Esc0NBQUVBLHFCQUFxQkEsbUJBQUdBLENBQUNBLE9BQzlFQSxRQUFRQSwwQ0FBRUEsZ0JBQWdCQSxtQkFBR0EsS0FBS0E7UUFPL0NBLElBQUlBLFdBQVdBLEdBQTZCQTtZQUMxQ0Esb0JBQW9CQSxFQUFFQSxvQkFBb0JBO1lBQzFDQSxxQkFBcUJBLEVBQUVBLHFCQUFxQkE7WUFDNUNBLHFCQUFxQkEsRUFBRUEscUJBQXFCQTtTQUM3Q0EsQ0FBQ0E7UUFDRkEsV0FBV0EsQ0FBQ0EsS0FBS0EsR0FBR0EsaUJBQWlCQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUMzREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsSUFBSUEsaUJBQWlCQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN4Q0EsV0FBV0EsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDaENBLFdBQVdBLENBQUNBLGVBQWVBLEdBQUdBLGdCQUFnQkEsR0FBR0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7UUFDckVBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE1BQU1BLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQ2hFQSxDQUFDQTtJQUNIRixzQkFBQ0E7QUFBREEsQ0FBQ0EsQUF0QkQsSUFzQkM7QUF0QlksdUJBQWUsa0JBc0IzQixDQUFBO0FBRUQsd0JBQXdCLEdBQVc7SUFDakNHLE1BQU1BLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLFNBQVNBLEdBQUdBLFNBQVNBLENBQUNBO0FBQzFDQSxDQUFDQTtBQUNELHVCQUF1QixHQUFXO0lBQ2hDQyxNQUFNQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxHQUFHQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQTtBQUNwQ0EsQ0FBQ0E7QUFDRCwyQkFBMkIsT0FBZTtJQUN4Q0MsSUFBSUEsR0FBR0EsR0FBK0JBLEVBQUVBLENBQUNBO0lBQ3pDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUNiQSxPQUFPQSxDQUFDQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUMxQkEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDTkEsT0FBT0EsQ0FBQ0EsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsSUFBSUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDM0RBLElBQUlBLEdBQUdBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2hCQSxNQUFNQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsS0FBS0EsR0FBR0E7Z0JBQ05BLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLGFBQWFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUM3QkEsS0FBS0EsQ0FBQ0E7WUFDUkEsS0FBS0EsR0FBR0E7Z0JBQ05BLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUMvQkEsS0FBS0EsQ0FBQ0E7WUFDUkEsS0FBS0EsR0FBR0E7Z0JBQ05BLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBO29CQUNYQSxHQUFHQSxDQUFDQSxLQUFLQSxHQUFHQSxhQUFhQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDakNBLElBQUlBO29CQUNGQSxHQUFHQSxDQUFDQSxLQUFLQSxHQUFHQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDbENBLEtBQUtBLENBQUNBO1lBQ1JBLEtBQUtBLEdBQUdBO2dCQUNOQSxHQUFHQSxDQUFDQSxHQUFHQSxHQUFHQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDOUJBLEtBQUtBLENBQUNBO1lBQ1JBLEtBQUtBLEdBQUdBO2dCQUNOQSxHQUFHQSxDQUFDQSxPQUFPQSxHQUFHQSxhQUFhQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDakNBLEtBQUtBLENBQUNBO1lBQ1JBLEtBQUtBLEdBQUdBO2dCQUNOQSxHQUFHQSxDQUFDQSxJQUFJQSxHQUFHQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDL0JBLEtBQUtBLENBQUNBO1lBQ1JBLEtBQUtBLEdBQUdBO2dCQUNOQSxHQUFHQSxDQUFDQSxJQUFJQSxHQUFHQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDL0JBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO2dCQUNsQkEsS0FBS0EsQ0FBQ0E7WUFDUkEsS0FBS0EsR0FBR0E7Z0JBQ05BLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUMvQkEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ25CQSxLQUFLQSxDQUFDQTtZQUNSQSxLQUFLQSxHQUFHQTtnQkFDTkEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsY0FBY0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxLQUFLQSxDQUFDQTtZQUNSQSxLQUFLQSxHQUFHQTtnQkFDTkEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsY0FBY0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxLQUFLQSxDQUFDQTtZQUNSQSxLQUFLQSxHQUFHQTtnQkFDTkEsR0FBR0EsQ0FBQ0EsWUFBWUEsR0FBR0EsTUFBTUEsQ0FBQ0E7Z0JBQzFCQSxLQUFLQSxDQUFDQTtZQUNSQSxLQUFLQSxHQUFHQTtnQkFDTkEsR0FBR0EsQ0FBQ0EsWUFBWUEsR0FBR0EsT0FBT0EsQ0FBQ0E7Z0JBQzNCQSxLQUFLQSxDQUFDQTtRQUNWQSxDQUFDQTtRQUNEQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUNSQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtBQUNiQSxDQUFDQTtBQUVELElBQUksa0JBQWtCLEdBQXFDLElBQUksR0FBRyxFQUErQixDQUFDO0FBRWxHO0lBQUFDO0lBVUFDLENBQUNBO0lBVFFELG9CQUFNQSxHQUFiQSxVQUFjQSxJQUFVQSxFQUFFQSxNQUFjQSxFQUFFQSxPQUFlQTtRQUN2REUsSUFBSUEsR0FBR0EsR0FBR0EsTUFBTUEsR0FBR0EsT0FBT0EsQ0FBQ0E7UUFDM0JBLEVBQUVBLENBQUNBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaENBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbERBLENBQUNBO1FBQ0RBLElBQUlBLFNBQVNBLEdBQUdBLElBQUlBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLE1BQU1BLEVBQUVBLGlCQUFpQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDNUVBLGtCQUFrQkEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ2hDQSxDQUFDQTtJQUNIRixvQkFBQ0E7QUFBREEsQ0FBQ0EsQUFWRCxJQVVDO0FBVlkscUJBQWEsZ0JBVXpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE1vZGlmaWVkIHZlcnNpb24gb2YgaW50ZXJuYWwgVHlwZXNjcmlwdCBpbnRsLmQudHMuXG4vLyBUT0RPKHBpbG9vcGluKTogcmVtb3ZlIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zNTIxIGlzIHNoaXBwZWQuXG5kZWNsYXJlIG1vZHVsZSBJbnRsIHtcbiAgaW50ZXJmYWNlIE51bWJlckZvcm1hdE9wdGlvbnMge1xuICAgIGxvY2FsZU1hdGNoZXI/OiBzdHJpbmc7XG4gICAgc3R5bGU/OiBzdHJpbmc7XG4gICAgY3VycmVuY3k/OiBzdHJpbmc7XG4gICAgY3VycmVuY3lEaXNwbGF5Pzogc3RyaW5nO1xuICAgIHVzZUdyb3VwaW5nPzogYm9vbGVhbjtcbiAgICBtaW5pbXVtSW50ZWdlckRpZ2l0cz86IG51bWJlcjtcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM/OiBudW1iZXI7XG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzPzogbnVtYmVyO1xuICB9XG5cbiAgaW50ZXJmYWNlIE51bWJlckZvcm1hdCB7XG4gICAgZm9ybWF0KHZhbHVlOiBudW1iZXIpOiBzdHJpbmc7XG4gIH1cblxuICB2YXIgTnVtYmVyRm9ybWF0OiB7bmV3IChsb2NhbGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBOdW1iZXJGb3JtYXRPcHRpb25zKTogTnVtYmVyRm9ybWF0fTtcblxuICBpbnRlcmZhY2UgRGF0ZVRpbWVGb3JtYXRPcHRpb25zIHtcbiAgICBsb2NhbGVNYXRjaGVyPzogc3RyaW5nO1xuICAgIHdlZWtkYXk/OiBzdHJpbmc7XG4gICAgZXJhPzogc3RyaW5nO1xuICAgIHllYXI/OiBzdHJpbmc7XG4gICAgbW9udGg/OiBzdHJpbmc7XG4gICAgZGF5Pzogc3RyaW5nO1xuICAgIGhvdXI/OiBzdHJpbmc7XG4gICAgbWludXRlPzogc3RyaW5nO1xuICAgIHNlY29uZD86IHN0cmluZztcbiAgICB0aW1lWm9uZU5hbWU/OiBzdHJpbmc7XG4gICAgZm9ybWF0TWF0Y2hlcj86IHN0cmluZztcbiAgICBob3VyMTI/OiBib29sZWFuO1xuICB9XG5cbiAgaW50ZXJmYWNlIERhdGVUaW1lRm9ybWF0IHtcbiAgICBmb3JtYXQoZGF0ZT86IERhdGUgfCBudW1iZXIpOiBzdHJpbmc7XG4gIH1cblxuICB2YXIgRGF0ZVRpbWVGb3JtYXQ6IHtuZXcgKGxvY2FsZT86IHN0cmluZywgb3B0aW9ucz86IERhdGVUaW1lRm9ybWF0T3B0aW9ucyk6IERhdGVUaW1lRm9ybWF0fTtcbn1cblxuZXhwb3J0IGVudW0gTnVtYmVyRm9ybWF0U3R5bGUge1xuICBEZWNpbWFsLFxuICBQZXJjZW50LFxuICBDdXJyZW5jeVxufVxuXG5leHBvcnQgY2xhc3MgTnVtYmVyRm9ybWF0dGVyIHtcbiAgc3RhdGljIGZvcm1hdChudW06IG51bWJlciwgbG9jYWxlOiBzdHJpbmcsIHN0eWxlOiBOdW1iZXJGb3JtYXRTdHlsZSxcbiAgICAgICAgICAgICAgICB7bWluaW11bUludGVnZXJEaWdpdHMgPSAxLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHMgPSAwLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHMgPSAzLFxuICAgICAgICAgICAgICAgICBjdXJyZW5jeSwgY3VycmVuY3lBc1N5bWJvbCA9IGZhbHNlfToge1xuICAgICAgICAgICAgICAgICAgbWluaW11bUludGVnZXJEaWdpdHM/OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM/OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM/OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeT86IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5QXNTeW1ib2w/OiBib29sZWFuXG4gICAgICAgICAgICAgICAgfSA9IHt9KTogc3RyaW5nIHtcbiAgICB2YXIgaW50bE9wdGlvbnM6IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiBtaW5pbXVtSW50ZWdlckRpZ2l0cyxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogbWluaW11bUZyYWN0aW9uRGlnaXRzLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBtYXhpbXVtRnJhY3Rpb25EaWdpdHNcbiAgICB9O1xuICAgIGludGxPcHRpb25zLnN0eWxlID0gTnVtYmVyRm9ybWF0U3R5bGVbc3R5bGVdLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHN0eWxlID09IE51bWJlckZvcm1hdFN0eWxlLkN1cnJlbmN5KSB7XG4gICAgICBpbnRsT3B0aW9ucy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgICAgaW50bE9wdGlvbnMuY3VycmVuY3lEaXNwbGF5ID0gY3VycmVuY3lBc1N5bWJvbCA/ICdzeW1ib2wnIDogJ2NvZGUnO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZSwgaW50bE9wdGlvbnMpLmZvcm1hdChudW0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpZ2l0Q29uZGl0aW9uKGxlbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIGxlbiA9PSAyID8gJzItZGlnaXQnIDogJ251bWVyaWMnO1xufVxuZnVuY3Rpb24gbmFtZUNvbmRpdGlvbihsZW46IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiBsZW4gPCA0ID8gJ3Nob3J0JyA6ICdsb25nJztcbn1cbmZ1bmN0aW9uIGV4dHJhY3RDb21wb25lbnRzKHBhdHRlcm46IHN0cmluZyk6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zIHtcbiAgdmFyIHJldDogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgPSB7fTtcbiAgdmFyIGkgPSAwLCBqO1xuICB3aGlsZSAoaSA8IHBhdHRlcm4ubGVuZ3RoKSB7XG4gICAgaiA9IGk7XG4gICAgd2hpbGUgKGogPCBwYXR0ZXJuLmxlbmd0aCAmJiBwYXR0ZXJuW2pdID09IHBhdHRlcm5baV0pIGorKztcbiAgICBsZXQgbGVuID0gaiAtIGk7XG4gICAgc3dpdGNoIChwYXR0ZXJuW2ldKSB7XG4gICAgICBjYXNlICdHJzpcbiAgICAgICAgcmV0LmVyYSA9IG5hbWVDb25kaXRpb24obGVuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5JzpcbiAgICAgICAgcmV0LnllYXIgPSBkaWdpdENvbmRpdGlvbihsZW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgICBpZiAobGVuID49IDMpXG4gICAgICAgICAgcmV0Lm1vbnRoID0gbmFtZUNvbmRpdGlvbihsZW4pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0Lm1vbnRoID0gZGlnaXRDb25kaXRpb24obGVuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkJzpcbiAgICAgICAgcmV0LmRheSA9IGRpZ2l0Q29uZGl0aW9uKGxlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRSc6XG4gICAgICAgIHJldC53ZWVrZGF5ID0gbmFtZUNvbmRpdGlvbihsZW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2onOlxuICAgICAgICByZXQuaG91ciA9IGRpZ2l0Q29uZGl0aW9uKGxlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaCc6XG4gICAgICAgIHJldC5ob3VyID0gZGlnaXRDb25kaXRpb24obGVuKTtcbiAgICAgICAgcmV0LmhvdXIxMiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSCc6XG4gICAgICAgIHJldC5ob3VyID0gZGlnaXRDb25kaXRpb24obGVuKTtcbiAgICAgICAgcmV0LmhvdXIxMiA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ20nOlxuICAgICAgICByZXQubWludXRlID0gZGlnaXRDb25kaXRpb24obGVuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzJzpcbiAgICAgICAgcmV0LnNlY29uZCA9IGRpZ2l0Q29uZGl0aW9uKGxlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneic6XG4gICAgICAgIHJldC50aW1lWm9uZU5hbWUgPSAnbG9uZyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnWic6XG4gICAgICAgIHJldC50aW1lWm9uZU5hbWUgPSAnc2hvcnQnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaSA9IGo7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxudmFyIGRhdGVGb3JtYXR0ZXJDYWNoZTogTWFwPHN0cmluZywgSW50bC5EYXRlVGltZUZvcm1hdD4gPSBuZXcgTWFwPHN0cmluZywgSW50bC5EYXRlVGltZUZvcm1hdD4oKTtcblxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXR0ZXIge1xuICBzdGF0aWMgZm9ybWF0KGRhdGU6IERhdGUsIGxvY2FsZTogc3RyaW5nLCBwYXR0ZXJuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciBrZXkgPSBsb2NhbGUgKyBwYXR0ZXJuO1xuICAgIGlmIChkYXRlRm9ybWF0dGVyQ2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBkYXRlRm9ybWF0dGVyQ2FjaGUuZ2V0KGtleSkuZm9ybWF0KGRhdGUpO1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBleHRyYWN0Q29tcG9uZW50cyhwYXR0ZXJuKSk7XG4gICAgZGF0ZUZvcm1hdHRlckNhY2hlLnNldChrZXksIGZvcm1hdHRlcik7XG4gICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoZGF0ZSk7XG4gIH1cbn1cbiJdfQ==