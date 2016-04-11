import { MessageBasedPlatformLocation } from './platform_location';
import { CONST_EXPR } from 'angular2/src/facade/lang';
import { BrowserPlatformLocation } from 'angular2/src/router/location/browser_platform_location';
import { APP_INITIALIZER, Provider, Injector, NgZone } from 'angular2/core';
export const WORKER_RENDER_ROUTER = CONST_EXPR([
    MessageBasedPlatformLocation,
    BrowserPlatformLocation,
    CONST_EXPR(new Provider(APP_INITIALIZER, { useFactory: initRouterListeners, multi: true, deps: CONST_EXPR([Injector]) }))
]);
function initRouterListeners(injector) {
    return () => {
        let zone = injector.get(NgZone);
        zone.run(() => injector.get(MessageBasedPlatformLocation).start());
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtSGRRVkNJR3cudG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy91aS9yb3V0ZXJfcHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbImluaXRSb3V0ZXJMaXN0ZW5lcnMiXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxxQkFBcUI7T0FDekQsRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FDNUMsRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdEQUF3RDtPQUN2RixFQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWU7QUFFekUsYUFBYSxvQkFBb0IsR0FBRyxVQUFVLENBQUM7SUFDN0MsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixVQUFVLENBQ04sSUFBSSxRQUFRLENBQUMsZUFBZSxFQUNmLEVBQUMsVUFBVSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0NBQ2hHLENBQUMsQ0FBQztBQUVILDZCQUE2QixRQUFrQjtJQUM3Q0EsTUFBTUEsQ0FBQ0E7UUFDTEEsSUFBSUEsSUFBSUEsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFFaENBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLDRCQUE0QkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDckVBLENBQUNBLENBQUNBO0FBQ0pBLENBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZXNzYWdlQmFzZWRQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICcuL3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7QnJvd3NlclBsYXRmb3JtTG9jYXRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb24vYnJvd3Nlcl9wbGF0Zm9ybV9sb2NhdGlvbic7XG5pbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgUHJvdmlkZXIsIEluamVjdG9yLCBOZ1pvbmV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgV09SS0VSX1JFTkRFUl9ST1VURVIgPSBDT05TVF9FWFBSKFtcbiAgTWVzc2FnZUJhc2VkUGxhdGZvcm1Mb2NhdGlvbixcbiAgQnJvd3NlclBsYXRmb3JtTG9jYXRpb24sXG4gIENPTlNUX0VYUFIoXG4gICAgICBuZXcgUHJvdmlkZXIoQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgICAgICAgICAgIHt1c2VGYWN0b3J5OiBpbml0Um91dGVyTGlzdGVuZXJzLCBtdWx0aTogdHJ1ZSwgZGVwczogQ09OU1RfRVhQUihbSW5qZWN0b3JdKX0pKVxuXSk7XG5cbmZ1bmN0aW9uIGluaXRSb3V0ZXJMaXN0ZW5lcnMoaW5qZWN0b3I6IEluamVjdG9yKTogKCkgPT4gdm9pZCB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IHpvbmUgPSBpbmplY3Rvci5nZXQoTmdab25lKTtcblxuICAgIHpvbmUucnVuKCgpID0+IGluamVjdG9yLmdldChNZXNzYWdlQmFzZWRQbGF0Zm9ybUxvY2F0aW9uKS5zdGFydCgpKTtcbiAgfTtcbn1cbiJdfQ==