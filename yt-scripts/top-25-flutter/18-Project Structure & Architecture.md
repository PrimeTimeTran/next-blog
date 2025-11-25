# 18 — Project Structure & Architecture

Patterns for growing codebases sustainably.

- Feature-first folder layout
- Clean Architecture and MVVM variants
- Separation of UI, domain, data layers
- Modules, packages, and mono-repo considerations

Refactoring tips for long-lived apps.

```text
// Example feature-first layout
lib/
	features/
		auth/
			data/
			domain/
			ui/
		home/
	shared/
		widgets/
		services/

// Keep UI, domain logic, and data separate for testability.
```
