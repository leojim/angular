/**
 * This indirection is needed to free up Component, etc symbols in the public API
 * to be used by the decorator versions of these annotations.
 */
import { makeDecorator } from 'angular2/src/core/util/decorators';
import { CanActivate as CanActivateAnnotation } from './lifecycle_annotations_impl';
export { routerCanReuse, routerCanDeactivate, routerOnActivate, routerOnReuse, routerOnDeactivate } from './lifecycle_annotations_impl';
/**
 * Defines route lifecycle hook `CanActivate`, which is called by the router to determine
 * if a component can be instantiated as part of a navigation.
 *
 * <aside class="is-right">
 * Note that unlike other lifecycle hooks, this one uses an annotation rather than an interface.
 * This is because the `CanActivate` function is called before the component is instantiated.
 * </aside>
 *
 * The `CanActivate` hook is called with two {@link ComponentInstruction}s as parameters, the first
 * representing the current route being navigated to, and the second parameter representing the
 * previous route or `null`.
 *
 * ```typescript
 * @CanActivate((next, prev) => boolean | Promise<boolean>)
 * ```
 *
 * If `CanActivate` returns or resolves to `false`, the navigation is cancelled.
 * If `CanActivate` throws or rejects, the navigation is also cancelled.
 * If `CanActivate` returns or resolves to `true`, navigation continues, the component is
 * instantiated, and the {@link OnActivate} hook of that component is called if implemented.
 *
 * ### Example
 *
 * {@example router/ts/can_activate/can_activate_example.ts region='canActivate' }
 */
export var CanActivate = makeDecorator(CanActivateAnnotation);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX2Fubm90YXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1IZFFWQ0lHdy50bXAvYW5ndWxhcjIvc3JjL3JvdXRlci9saWZlY3ljbGUvbGlmZWN5Y2xlX2Fubm90YXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztPQUVJLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUNBQW1DO09BQ3hELEVBQUMsV0FBVyxJQUFJLHFCQUFxQixFQUFDLE1BQU0sOEJBQThCO0FBR2pGLFNBQ0UsY0FBYyxFQUNkLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGtCQUFrQixRQUNiLDhCQUE4QixDQUFDO0FBRXRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBQ0gsV0FBVyxXQUFXLEdBRWxCLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGluZGlyZWN0aW9uIGlzIG5lZWRlZCB0byBmcmVlIHVwIENvbXBvbmVudCwgZXRjIHN5bWJvbHMgaW4gdGhlIHB1YmxpYyBBUElcbiAqIHRvIGJlIHVzZWQgYnkgdGhlIGRlY29yYXRvciB2ZXJzaW9ucyBvZiB0aGVzZSBhbm5vdGF0aW9ucy5cbiAqL1xuXG5pbXBvcnQge21ha2VEZWNvcmF0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3V0aWwvZGVjb3JhdG9ycyc7XG5pbXBvcnQge0NhbkFjdGl2YXRlIGFzIENhbkFjdGl2YXRlQW5ub3RhdGlvbn0gZnJvbSAnLi9saWZlY3ljbGVfYW5ub3RhdGlvbnNfaW1wbCc7XG5pbXBvcnQge0NvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tICcuLi9pbnN0cnVjdGlvbic7XG5cbmV4cG9ydCB7XG4gIHJvdXRlckNhblJldXNlLFxuICByb3V0ZXJDYW5EZWFjdGl2YXRlLFxuICByb3V0ZXJPbkFjdGl2YXRlLFxuICByb3V0ZXJPblJldXNlLFxuICByb3V0ZXJPbkRlYWN0aXZhdGVcbn0gZnJvbSAnLi9saWZlY3ljbGVfYW5ub3RhdGlvbnNfaW1wbCc7XG5cbi8qKlxuICogRGVmaW5lcyByb3V0ZSBsaWZlY3ljbGUgaG9vayBgQ2FuQWN0aXZhdGVgLCB3aGljaCBpcyBjYWxsZWQgYnkgdGhlIHJvdXRlciB0byBkZXRlcm1pbmVcbiAqIGlmIGEgY29tcG9uZW50IGNhbiBiZSBpbnN0YW50aWF0ZWQgYXMgcGFydCBvZiBhIG5hdmlnYXRpb24uXG4gKlxuICogPGFzaWRlIGNsYXNzPVwiaXMtcmlnaHRcIj5cbiAqIE5vdGUgdGhhdCB1bmxpa2Ugb3RoZXIgbGlmZWN5Y2xlIGhvb2tzLCB0aGlzIG9uZSB1c2VzIGFuIGFubm90YXRpb24gcmF0aGVyIHRoYW4gYW4gaW50ZXJmYWNlLlxuICogVGhpcyBpcyBiZWNhdXNlIHRoZSBgQ2FuQWN0aXZhdGVgIGZ1bmN0aW9uIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBpbnN0YW50aWF0ZWQuXG4gKiA8L2FzaWRlPlxuICpcbiAqIFRoZSBgQ2FuQWN0aXZhdGVgIGhvb2sgaXMgY2FsbGVkIHdpdGggdHdvIHtAbGluayBDb21wb25lbnRJbnN0cnVjdGlvbn1zIGFzIHBhcmFtZXRlcnMsIHRoZSBmaXJzdFxuICogcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHJvdXRlIGJlaW5nIG5hdmlnYXRlZCB0bywgYW5kIHRoZSBzZWNvbmQgcGFyYW1ldGVyIHJlcHJlc2VudGluZyB0aGVcbiAqIHByZXZpb3VzIHJvdXRlIG9yIGBudWxsYC5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ2FuQWN0aXZhdGUoKG5leHQsIHByZXYpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+KVxuICogYGBgXG4gKlxuICogSWYgYENhbkFjdGl2YXRlYCByZXR1cm5zIG9yIHJlc29sdmVzIHRvIGBmYWxzZWAsIHRoZSBuYXZpZ2F0aW9uIGlzIGNhbmNlbGxlZC5cbiAqIElmIGBDYW5BY3RpdmF0ZWAgdGhyb3dzIG9yIHJlamVjdHMsIHRoZSBuYXZpZ2F0aW9uIGlzIGFsc28gY2FuY2VsbGVkLlxuICogSWYgYENhbkFjdGl2YXRlYCByZXR1cm5zIG9yIHJlc29sdmVzIHRvIGB0cnVlYCwgbmF2aWdhdGlvbiBjb250aW51ZXMsIHRoZSBjb21wb25lbnQgaXNcbiAqIGluc3RhbnRpYXRlZCwgYW5kIHRoZSB7QGxpbmsgT25BY3RpdmF0ZX0gaG9vayBvZiB0aGF0IGNvbXBvbmVudCBpcyBjYWxsZWQgaWYgaW1wbGVtZW50ZWQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgcm91dGVyL3RzL2Nhbl9hY3RpdmF0ZS9jYW5fYWN0aXZhdGVfZXhhbXBsZS50cyByZWdpb249J2NhbkFjdGl2YXRlJyB9XG4gKi9cbmV4cG9ydCB2YXIgQ2FuQWN0aXZhdGU6IChob29rOiAobmV4dDogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXY6IENvbXBvbmVudEluc3RydWN0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlPGJvb2xlYW4+fCBib29sZWFuKSA9PiBDbGFzc0RlY29yYXRvciA9XG4gICAgbWFrZURlY29yYXRvcihDYW5BY3RpdmF0ZUFubm90YXRpb24pO1xuIl19