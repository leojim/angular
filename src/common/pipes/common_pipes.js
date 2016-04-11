'use strict';/**
 * @module
 * @description
 * This module provides a set of common Pipes.
 */
var async_pipe_1 = require('./async_pipe');
var uppercase_pipe_1 = require('./uppercase_pipe');
var lowercase_pipe_1 = require('./lowercase_pipe');
var json_pipe_1 = require('./json_pipe');
var slice_pipe_1 = require('./slice_pipe');
var date_pipe_1 = require('./date_pipe');
var number_pipe_1 = require('./number_pipe');
var replace_pipe_1 = require('./replace_pipe');
var i18n_plural_pipe_1 = require('./i18n_plural_pipe');
var i18n_select_pipe_1 = require('./i18n_select_pipe');
var lang_1 = require('angular2/src/facade/lang');
/**
 * A collection of Angular core pipes that are likely to be used in each and every
 * application.
 *
 * This collection can be used to quickly enumerate all the built-in pipes in the `pipes`
 * property of the `@Component` decorator.
 */
exports.COMMON_PIPES = lang_1.CONST_EXPR([
    async_pipe_1.AsyncPipe,
    uppercase_pipe_1.UpperCasePipe,
    lowercase_pipe_1.LowerCasePipe,
    json_pipe_1.JsonPipe,
    slice_pipe_1.SlicePipe,
    number_pipe_1.DecimalPipe,
    number_pipe_1.PercentPipe,
    number_pipe_1.CurrencyPipe,
    date_pipe_1.DatePipe,
    replace_pipe_1.ReplacePipe,
    i18n_plural_pipe_1.I18nPluralPipe,
    i18n_select_pipe_1.I18nSelectPipe
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uX3BpcGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC16TW9pY1BTdy50bXAvYW5ndWxhcjIvc3JjL2NvbW1vbi9waXBlcy9jb21tb25fcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNILDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUN2QywrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQywrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQywwQkFBdUIsYUFBYSxDQUFDLENBQUE7QUFDckMsMkJBQXdCLGNBQWMsQ0FBQyxDQUFBO0FBQ3ZDLDBCQUF1QixhQUFhLENBQUMsQ0FBQTtBQUNyQyw0QkFBcUQsZUFBZSxDQUFDLENBQUE7QUFDckUsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsaUNBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQsaUNBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQscUJBQXlCLDBCQUEwQixDQUFDLENBQUE7QUFFcEQ7Ozs7OztHQU1HO0FBQ1Usb0JBQVksR0FBRyxpQkFBVSxDQUFDO0lBQ3JDLHNCQUFTO0lBQ1QsOEJBQWE7SUFDYiw4QkFBYTtJQUNiLG9CQUFRO0lBQ1Isc0JBQVM7SUFDVCx5QkFBVztJQUNYLHlCQUFXO0lBQ1gsMEJBQVk7SUFDWixvQkFBUTtJQUNSLDBCQUFXO0lBQ1gsaUNBQWM7SUFDZCxpQ0FBYztDQUNmLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBhIHNldCBvZiBjb21tb24gUGlwZXMuXG4gKi9cbmltcG9ydCB7QXN5bmNQaXBlfSBmcm9tICcuL2FzeW5jX3BpcGUnO1xuaW1wb3J0IHtVcHBlckNhc2VQaXBlfSBmcm9tICcuL3VwcGVyY2FzZV9waXBlJztcbmltcG9ydCB7TG93ZXJDYXNlUGlwZX0gZnJvbSAnLi9sb3dlcmNhc2VfcGlwZSc7XG5pbXBvcnQge0pzb25QaXBlfSBmcm9tICcuL2pzb25fcGlwZSc7XG5pbXBvcnQge1NsaWNlUGlwZX0gZnJvbSAnLi9zbGljZV9waXBlJztcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gJy4vZGF0ZV9waXBlJztcbmltcG9ydCB7RGVjaW1hbFBpcGUsIFBlcmNlbnRQaXBlLCBDdXJyZW5jeVBpcGV9IGZyb20gJy4vbnVtYmVyX3BpcGUnO1xuaW1wb3J0IHtSZXBsYWNlUGlwZX0gZnJvbSAnLi9yZXBsYWNlX3BpcGUnO1xuaW1wb3J0IHtJMThuUGx1cmFsUGlwZX0gZnJvbSAnLi9pMThuX3BsdXJhbF9waXBlJztcbmltcG9ydCB7STE4blNlbGVjdFBpcGV9IGZyb20gJy4vaTE4bl9zZWxlY3RfcGlwZSc7XG5pbXBvcnQge0NPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIEFuZ3VsYXIgY29yZSBwaXBlcyB0aGF0IGFyZSBsaWtlbHkgdG8gYmUgdXNlZCBpbiBlYWNoIGFuZCBldmVyeVxuICogYXBwbGljYXRpb24uXG4gKlxuICogVGhpcyBjb2xsZWN0aW9uIGNhbiBiZSB1c2VkIHRvIHF1aWNrbHkgZW51bWVyYXRlIGFsbCB0aGUgYnVpbHQtaW4gcGlwZXMgaW4gdGhlIGBwaXBlc2BcbiAqIHByb3BlcnR5IG9mIHRoZSBgQENvbXBvbmVudGAgZGVjb3JhdG9yLlxuICovXG5leHBvcnQgY29uc3QgQ09NTU9OX1BJUEVTID0gQ09OU1RfRVhQUihbXG4gIEFzeW5jUGlwZSxcbiAgVXBwZXJDYXNlUGlwZSxcbiAgTG93ZXJDYXNlUGlwZSxcbiAgSnNvblBpcGUsXG4gIFNsaWNlUGlwZSxcbiAgRGVjaW1hbFBpcGUsXG4gIFBlcmNlbnRQaXBlLFxuICBDdXJyZW5jeVBpcGUsXG4gIERhdGVQaXBlLFxuICBSZXBsYWNlUGlwZSxcbiAgSTE4blBsdXJhbFBpcGUsXG4gIEkxOG5TZWxlY3RQaXBlXG5dKTtcbiJdfQ==