Full Height Column with Items on both ends

```dart
  return LayoutBuilder(
    builder: (BuildContext context, BoxConstraints constraints) {
      final height = constraints.maxHeight;
      final width = constraints.maxWidth;

      return SingleChildScrollView(
        child: SizedBox(
          width: width,
          height: height,
          child: Column(
            children: [
              Text('Top'),
              const Spacer(),
              Text('Bottom')
            ],
          ),
        ),
      );
    },
  );
```

## Layout

FittedBox
ConstrainedBox
UnconstrainedBox
IntrinsicHeight
