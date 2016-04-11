/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 */
export class ConnectionBackend {
}
/**
 * Abstract class from which real connections are derived.
 */
export class Connection {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtSGRRVkNJR3cudG1wL2FuZ3VsYXIyL3NyYy9odHRwL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOlsiQ29ubmVjdGlvbkJhY2tlbmQiLCJDb25uZWN0aW9uIl0sIm1hcHBpbmdzIjoiQUFPQTs7Ozs7R0FLRztBQUNIO0FBQStGQSxDQUFDQTtBQUVoRzs7R0FFRztBQUNIO0FBSUFDLENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWR5U3RhdGUsIFJlcXVlc3RNZXRob2QsIFJlc3BvbnNlVHlwZX0gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQge0hlYWRlcnN9IGZyb20gJy4vaGVhZGVycyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb24sIFdyYXBwZWRFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge1JlcXVlc3R9IGZyb20gJy4vc3RhdGljX3JlcXVlc3QnO1xuaW1wb3J0IHtVUkxTZWFyY2hQYXJhbXN9IGZyb20gJy4vdXJsX3NlYXJjaF9wYXJhbXMnO1xuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIGZyb20gd2hpY2ggcmVhbCBiYWNrZW5kcyBhcmUgZGVyaXZlZC5cbiAqXG4gKiBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIGEgYENvbm5lY3Rpb25CYWNrZW5kYCBpcyB0byBjcmVhdGUgbmV3IGNvbm5lY3Rpb25zIHRvIGZ1bGZpbGwgYSBnaXZlblxuICoge0BsaW5rIFJlcXVlc3R9LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29ubmVjdGlvbkJhY2tlbmQgeyBhYnN0cmFjdCBjcmVhdGVDb25uZWN0aW9uKHJlcXVlc3Q6IGFueSk6IENvbm5lY3Rpb247IH1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmcm9tIHdoaWNoIHJlYWwgY29ubmVjdGlvbnMgYXJlIGRlcml2ZWQuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb25uZWN0aW9uIHtcbiAgcmVhZHlTdGF0ZTogUmVhZHlTdGF0ZTtcbiAgcmVxdWVzdDogUmVxdWVzdDtcbiAgcmVzcG9uc2U6IGFueTsgIC8vIFRPRE86IGdlbmVyaWMgb2YgPFJlc3BvbnNlPjtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIG9wdGlvbnMgdG8gY29uc3RydWN0IGEgUmVxdWVzdE9wdGlvbnMsIGJhc2VkIG9uXG4gKiBbUmVxdWVzdEluaXRdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNyZXF1ZXN0aW5pdCkgZnJvbSB0aGUgRmV0Y2ggc3BlYy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICB1cmw/OiBzdHJpbmc7XG4gIG1ldGhvZD86IHN0cmluZyB8IFJlcXVlc3RNZXRob2Q7XG4gIHNlYXJjaD86IHN0cmluZyB8IFVSTFNlYXJjaFBhcmFtcztcbiAgaGVhZGVycz86IEhlYWRlcnM7XG4gIC8vIFRPRE86IFN1cHBvcnQgQmxvYiwgQXJyYXlCdWZmZXIsIEpTT04sIFVSTFNlYXJjaFBhcmFtcywgRm9ybURhdGFcbiAgYm9keT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXF1aXJlZCBzdHJ1Y3R1cmUgd2hlbiBjb25zdHJ1Y3RpbmcgbmV3IFJlcXVlc3QoKTtcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0QXJncyBleHRlbmRzIFJlcXVlc3RPcHRpb25zQXJncyB7IHVybDogc3RyaW5nOyB9XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBvcHRpb25zIHRvIGNvbnN0cnVjdCBhIFJlc3BvbnNlLCBiYXNlZCBvblxuICogW1Jlc3BvbnNlSW5pdF0oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3Jlc3BvbnNlaW5pdCkgZnJvbSB0aGUgRmV0Y2ggc3BlYy5cbiAqL1xuZXhwb3J0IHR5cGUgUmVzcG9uc2VPcHRpb25zQXJncyA9IHtcbiAgLy8gVE9ETzogU3VwcG9ydCBCbG9iLCBBcnJheUJ1ZmZlciwgSlNPTlxuICBib2R5Pzogc3RyaW5nIHwgT2JqZWN0IHwgRm9ybURhdGE7XG4gIHN0YXR1cz86IG51bWJlcjtcbiAgc3RhdHVzVGV4dD86IHN0cmluZztcbiAgaGVhZGVycz86IEhlYWRlcnM7XG4gIHR5cGU/OiBSZXNwb25zZVR5cGU7XG4gIHVybD86IHN0cmluZztcbn1cbiJdfQ==