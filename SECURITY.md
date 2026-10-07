# Security maintenance

Use Node.js 24 and Java 21. The frontend runs on maintained Angular 21 and the backend runs on Spring Boot 4.0.8. Spring Boot 4 uses Jakarta APIs and the new `spring.mongodb.*` connection properties; update deployment overrides that still use `spring.data.mongodb.host/port/database/uri`.

Install and verify the frontend from the repository root:

```sh
npm ci --ignore-scripts
npm audit --audit-level=low
npm run build
npm test
npm run lint
npx playwright install chromium
CI=true npm run e2e
```

Build and test the backend from `.` with `mvn -B verify`. Production still requires the application's configured MongoDB. Context tests do not replace database integration testing; frontend HTTP and browser regressions use controlled mock responses.

The camera details and edit screens now call the camera lookup endpoint correctly. Browser regressions exercise list, details, edit, deletion, and creation against mocked HTTP responses. Generated Java classes are no longer tracked; rebuild the backend instead of running old checked-in binaries.

The lockfile removes the old vulnerable Angular/build/test dependency trees. Spring, Jackson, and embedded Tomcat are upgraded to patched versions. Weekly Dependabot updates and pinned GitHub Actions run clean installs, npm advisories, production builds, tests, and Maven verification. Maven vulnerability findings should also be reviewed through GitHub's dependency graph/Dependabot; the Maven build alone is not a vulnerability scanner.

Bundle-size and legacy typing warnings remain visible. No production error budget or advisory is suppressed. A clean advisory scan is limited to vulnerabilities known to its database and is not a guarantee against application security issues.

This application remains a prototype with API endpoints that do not enforce a complete authenticated identity and resource authorization policy. Keep it on a trusted local network. Public deployment requires a separate authentication and authorization migration, including WebSocket access where applicable; dependency patches do not provide those controls.
