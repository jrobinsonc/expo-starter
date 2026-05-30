## 2024-05-23 - Prevent Malicious URIs in External Links

**Vulnerability:** The `<ExternalLink>` component accepted arbitrary `href` values and passed them to Expo's `openBrowserAsync` and `<Link>` without validation. This allows `javascript:`, `file:`, or deep link URIs that could be exploited for XSS or unintended native actions.
**Learning:** Expo Router's `<Link>` and Expo's WebBrowser do not enforce secure protocols out of the box. Any component taking user-provided or remote URLs and opening them needs strict protocol validation.
**Prevention:** Implement strict prefix checks (`http://` or `https://`) on any URL passed to link wrappers or browser APIs, failing securely if not matched.
