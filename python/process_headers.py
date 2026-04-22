import os
import re

def process_md_file(filepath):
    print(f"Processing {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    if not lines:
        return
    
    first_line_stripped = lines[0].strip()
    print(f"First line: {repr(first_line_stripped)}")
    if first_line_stripped.startswith('#'):
        # First line is header
        match = re.match(r'^(#+)', first_line_stripped)
        if match:
            level = len(match.group(1))
            print(f"Level: {level}")
            if level > 1:
                # Change to #
                lines[0] = '#' + lines[0][level:]
                delta = 1 - level
                print(f"Delta: {delta}")
                # Adjust all other headers
                for i in range(1, len(lines)):
                    line = lines[i]
                    stripped = line.strip()
                    if stripped.startswith('#'):
                        match2 = re.match(r'^(#+)', stripped)
                        if match2:
                            h = len(match2.group(1))
                            new_h = h + delta
                            if new_h < 1:
                                new_h = 1
                            new_hashes = '#' * new_h
                            lines[i] = new_hashes + line[len(match2.group(1)):]
    else:
        # First line not header, make it H1
        print("Making first line H1")
        lines[0] = '# ' + first_line_stripped + '\n'
        # Decrement all headers by 1
        delta = -1
        for i, line in enumerate(lines):
            stripped = line.strip()
            if stripped.startswith('#'):
                match = re.match(r'^(#+)', stripped)
                if match:
                    h = len(match.group(1))
                    new_h = h + delta
                    if new_h < 1:
                        new_h = 1
                    new_hashes = '#' * new_h
                    lines[i] = new_hashes + line[len(match.group(1)):]
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(lines)

# Directory
directory = '/Users/future/Documents/work/blog-react/notes/journal'

for filename in os.listdir(directory):
    if filename.endswith('.md'):
        filepath = os.path.join(directory, filename)
        process_md_file(filepath)

print("Done")
