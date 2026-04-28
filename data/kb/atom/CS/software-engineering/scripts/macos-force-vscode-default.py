import subprocess

# List of file types
file_types = [
    '.css',
    '.txt',
    '.json',
    '.js',
    '.dart',
    '.txt',
    '.xml',
    '.yml',
    '.sh',
    '.yaml',
]

# Iterate over the list and run the command for each file type
for file_type in file_types:
    command = ['duti', '-s', 'com.microsoft.VSCode', file_type, 'all']
    try:
        result = subprocess.run(command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(f"Successfully set {file_type} to open with VSCode.")
    except subprocess.CalledProcessError as e:
        print(f"Failed to set {file_type} to open with VSCode. Error: {e.stderr.decode()}")

