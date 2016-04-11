'use strict';var lang_1 = require('angular2/src/facade/lang');
var collection_1 = require('angular2/src/facade/collection');
var TouchMap = (function () {
    function TouchMap(map) {
        var _this = this;
        this.map = {};
        this.keys = {};
        if (lang_1.isPresent(map)) {
            collection_1.StringMapWrapper.forEach(map, function (value, key) {
                _this.map[key] = lang_1.isPresent(value) ? value.toString() : null;
                _this.keys[key] = true;
            });
        }
    }
    TouchMap.prototype.get = function (key) {
        collection_1.StringMapWrapper.delete(this.keys, key);
        return this.map[key];
    };
    TouchMap.prototype.getUnused = function () {
        var _this = this;
        var unused = {};
        var keys = collection_1.StringMapWrapper.keys(this.keys);
        keys.forEach(function (key) { return unused[key] = collection_1.StringMapWrapper.get(_this.map, key); });
        return unused;
    };
    return TouchMap;
})();
exports.TouchMap = TouchMap;
function normalizeString(obj) {
    if (lang_1.isBlank(obj)) {
        return null;
    }
    else {
        return obj.toString();
    }
}
exports.normalizeString = normalizeString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXpNb2ljUFN3LnRtcC9hbmd1bGFyMi9zcmMvcm91dGVyL3V0aWxzLnRzIl0sIm5hbWVzIjpbIlRvdWNoTWFwIiwiVG91Y2hNYXAuY29uc3RydWN0b3IiLCJUb3VjaE1hcC5nZXQiLCJUb3VjaE1hcC5nZXRVbnVzZWQiLCJub3JtYWxpemVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzVELDJCQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRWhFO0lBSUVBLGtCQUFZQSxHQUF5QkE7UUFKdkNDLGlCQXdCQ0E7UUF2QkNBLFFBQUdBLEdBQTRCQSxFQUFFQSxDQUFDQTtRQUNsQ0EsU0FBSUEsR0FBNkJBLEVBQUVBLENBQUNBO1FBR2xDQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLDZCQUFnQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsVUFBQ0EsS0FBS0EsRUFBRUEsR0FBR0E7Z0JBQ3ZDQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsUUFBUUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQzNEQSxLQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUN4QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFFREQsc0JBQUdBLEdBQUhBLFVBQUlBLEdBQVdBO1FBQ2JFLDZCQUFnQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVERiw0QkFBU0EsR0FBVEE7UUFBQUcsaUJBS0NBO1FBSkNBLElBQUlBLE1BQU1BLEdBQXlCQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsSUFBSUEsR0FBR0EsNkJBQWdCQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM1Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsR0FBR0EsSUFBSUEsT0FBQUEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsNkJBQWdCQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFqREEsQ0FBaURBLENBQUNBLENBQUNBO1FBQ3ZFQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFDSEgsZUFBQ0E7QUFBREEsQ0FBQ0EsQUF4QkQsSUF3QkM7QUF4QlksZ0JBQVEsV0F3QnBCLENBQUE7QUFHRCx5QkFBZ0MsR0FBUTtJQUN0Q0ksRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDakJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ05BLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO0lBQ3hCQSxDQUFDQTtBQUNIQSxDQUFDQTtBQU5lLHVCQUFlLGtCQU05QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1N0cmluZ01hcFdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBUb3VjaE1hcCB7XG4gIG1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAga2V5czoge1trZXk6IHN0cmluZ106IGJvb2xlYW59ID0ge307XG5cbiAgY29uc3RydWN0b3IobWFwOiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIGlmIChpc1ByZXNlbnQobWFwKSkge1xuICAgICAgU3RyaW5nTWFwV3JhcHBlci5mb3JFYWNoKG1hcCwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgdGhpcy5tYXBba2V5XSA9IGlzUHJlc2VudCh2YWx1ZSkgPyB2YWx1ZS50b1N0cmluZygpIDogbnVsbDtcbiAgICAgICAgdGhpcy5rZXlzW2tleV0gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBTdHJpbmdNYXBXcmFwcGVyLmRlbGV0ZSh0aGlzLmtleXMsIGtleSk7XG4gICAgcmV0dXJuIHRoaXMubWFwW2tleV07XG4gIH1cblxuICBnZXRVbnVzZWQoKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHZhciB1bnVzZWQ6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgdmFyIGtleXMgPSBTdHJpbmdNYXBXcmFwcGVyLmtleXModGhpcy5rZXlzKTtcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHVudXNlZFtrZXldID0gU3RyaW5nTWFwV3JhcHBlci5nZXQodGhpcy5tYXAsIGtleSkpO1xuICAgIHJldHVybiB1bnVzZWQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplU3RyaW5nKG9iajogYW55KTogc3RyaW5nIHtcbiAgaWYgKGlzQmxhbmsob2JqKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmoudG9TdHJpbmcoKTtcbiAgfVxufVxuIl19