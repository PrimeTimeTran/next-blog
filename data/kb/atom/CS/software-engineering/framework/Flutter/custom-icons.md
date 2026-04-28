## Exporting from Illustrator

Assets for assets folder in Flutter

- Export from Illustrator:
  - Make line from stroke
  - Make compound path
  - [Recommended](https://github.com/dnfield/flutter_svg/tree/master/packages/flutter_svg)
  - Exporting from Asset Export(Options Config):
    - Styling: Presentation Attributes
    - Font: SVG
    - Images: Embed
    - Object IDs: Layer Names
    - Decimal: 1
    - Minify unchecked, responsive checked

### Benefits

- Change color
- Change size

```dart
SvgPicture.asset(
  'assets/icons/tangent-line.svg',
  height: 100,
  width: 100,
  color: Colors.red,
),
```

## Exporting for fluttericon.com generation

Assets for upload to FlutterIcon for bundling

- Export from illustrator

  - Make line from stroke
  - Make compound path
  - Exporting from Asset Export(Options Config):
    - Styling: Internal CSS
    - Font: SVG
    - Images: Preserve
    - Object IDs: Layer Names
    - Decimal: 1
    - Minify unchecked, responsive checked

- Run script to remove style attribute from SVGs

```sh
  python3 ./assets/svgs/remove-style-attribute.py
```

```py
import os
from xml.dom import minidom

def remove_style_attribute(svg_file):
    try:
        doc = minidom.parse(svg_file)
        paths = doc.getElementsByTagName('path')
        for path in paths:
            if path.hasAttribute('style'):
                path.removeAttribute('style')
        with open(svg_file, 'w') as f:
            doc.writexml(f)

        print(f"Style attribute removed from {svg_file}")

    except Exception as e:
        print(f"Error processing {svg_file}: {e}")

def remove_style_from_svg_files(directory):
    for filename in os.listdir(directory):
        if filename.endswith('.svg'):
            svg_file = os.path.join(directory, filename)
            remove_style_attribute(svg_file)

directory = './assets'
remove_style_from_svg_files(directory)
```
