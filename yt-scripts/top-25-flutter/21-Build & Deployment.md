# 21 — Build & Deployment

Releasing and maintaining mobile apps.

- Building release artifacts for iOS and Android
- Code signing and provisioning profiles
- CI/CD basics and automating builds
- Versioning and migration strategies

Play Store and App Store checklist.

```text
# Build commands
flutter build apk --release
flutter build ios --release

# Note: macOS + Xcode required for iOS build and code signing setup
```

Also ensure CI signs artifacts and stores credentials securely.
