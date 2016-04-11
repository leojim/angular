'use strict';var lang_1 = require('angular2/src/facade/lang');
var instruction_1 = require('../../instruction');
var AsyncRouteHandler = (function () {
    function AsyncRouteHandler(_loader, data) {
        if (data === void 0) { data = null; }
        this._loader = _loader;
        /** @internal */
        this._resolvedComponent = null;
        this.data = lang_1.isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
    }
    AsyncRouteHandler.prototype.resolveComponentType = function () {
        var _this = this;
        if (lang_1.isPresent(this._resolvedComponent)) {
            return this._resolvedComponent;
        }
        return this._resolvedComponent = this._loader().then(function (componentType) {
            _this.componentType = componentType;
            return componentType;
        });
    };
    return AsyncRouteHandler;
})();
exports.AsyncRouteHandler = AsyncRouteHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfcm91dGVfaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtek1vaWNQU3cudG1wL2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcnVsZXMvcm91dGVfaGFuZGxlcnMvYXN5bmNfcm91dGVfaGFuZGxlci50cyJdLCJuYW1lcyI6WyJBc3luY1JvdXRlSGFuZGxlciIsIkFzeW5jUm91dGVIYW5kbGVyLmNvbnN0cnVjdG9yIiwiQXN5bmNSb3V0ZUhhbmRsZXIucmVzb2x2ZUNvbXBvbmVudFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLHFCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBR3pELDRCQUEwQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRzlEO0lBTUVBLDJCQUFvQkEsT0FBNEJBLEVBQUVBLElBQWlDQTtRQUFqQ0Msb0JBQWlDQSxHQUFqQ0EsV0FBaUNBO1FBQS9EQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFxQkE7UUFMaERBLGdCQUFnQkE7UUFDaEJBLHVCQUFrQkEsR0FBa0JBLElBQUlBLENBQUNBO1FBS3ZDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxnQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsdUJBQVNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLDhCQUFnQkEsQ0FBQ0E7SUFDdkVBLENBQUNBO0lBRURELGdEQUFvQkEsR0FBcEJBO1FBQUFFLGlCQVNDQTtRQVJDQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQTtRQUNqQ0EsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxhQUFhQTtZQUNqRUEsS0FBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsYUFBYUEsQ0FBQ0E7WUFDbkNBLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBO1FBQ3ZCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUNIRix3QkFBQ0E7QUFBREEsQ0FBQ0EsQUFwQkQsSUFvQkM7QUFwQlkseUJBQWlCLG9CQW9CN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50LCBUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5pbXBvcnQge1JvdXRlSGFuZGxlcn0gZnJvbSAnLi9yb3V0ZV9oYW5kbGVyJztcbmltcG9ydCB7Um91dGVEYXRhLCBCTEFOS19ST1VURV9EQVRBfSBmcm9tICcuLi8uLi9pbnN0cnVjdGlvbic7XG5cblxuZXhwb3J0IGNsYXNzIEFzeW5jUm91dGVIYW5kbGVyIGltcGxlbWVudHMgUm91dGVIYW5kbGVyIHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcmVzb2x2ZWRDb21wb25lbnQ6IFByb21pc2U8VHlwZT4gPSBudWxsO1xuICBjb21wb25lbnRUeXBlOiBUeXBlO1xuICBwdWJsaWMgZGF0YTogUm91dGVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRlcjogKCkgPT4gUHJvbWlzZTxUeXBlPiwgZGF0YToge1trZXk6IHN0cmluZ106IGFueX0gPSBudWxsKSB7XG4gICAgdGhpcy5kYXRhID0gaXNQcmVzZW50KGRhdGEpID8gbmV3IFJvdXRlRGF0YShkYXRhKSA6IEJMQU5LX1JPVVRFX0RBVEE7XG4gIH1cblxuICByZXNvbHZlQ29tcG9uZW50VHlwZSgpOiBQcm9taXNlPFR5cGU+IHtcbiAgICBpZiAoaXNQcmVzZW50KHRoaXMuX3Jlc29sdmVkQ29tcG9uZW50KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVkQ29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlZENvbXBvbmVudCA9IHRoaXMuX2xvYWRlcigpLnRoZW4oKGNvbXBvbmVudFR5cGUpID0+IHtcbiAgICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IGNvbXBvbmVudFR5cGU7XG4gICAgICByZXR1cm4gY29tcG9uZW50VHlwZTtcbiAgICB9KTtcbiAgfVxufVxuIl19