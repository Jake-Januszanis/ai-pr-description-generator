export const samplePR = {
  title: "Add user authentication",
  commits: [
    "Add JWT authentication middleware",
    "Add login endpoint",
    "Add authentication tests"
  ],
  diff: `
diff --git a/src/auth/middleware.js b/src/auth/middleware.js
new file mode 100644
--- /dev/null
+++ b/src/auth/middleware.js
@@ -0,0 +1,20 @@
+export function authenticate(req, res, next) {
+  const token = req.headers.authorization;
+
+  if (!token) {
+    return res.status(401).json({ error: "Unauthorized" });
+  }
+
+  next();
+}

diff --git a/src/auth/login.js b/src/auth/login.js
new file mode 100644
--- /dev/null
+++ b/src/auth/login.js
@@ -0,0 +1,15 @@
+export function login(username, password) {
+  // Authentication logic
+}

diff --git a/tests/auth.test.js b/tests/auth.test.js
new file mode 100644
--- /dev/null
+++ b/tests/auth.test.js
@@ -0,0 +1,10 @@
+test("rejects unauthenticated requests", () => {
+  // Test implementation
+});
`
};