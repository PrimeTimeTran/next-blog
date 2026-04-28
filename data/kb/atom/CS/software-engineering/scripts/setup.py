import os
import subprocess

current_directory = os.getcwd()
script_directory = os.path.dirname(os.path.realpath(__file__))

def create_initial_source_files():
  dirs = ['src', 'tmp', 'notes']
  files = ['.gitignore', 'README.md','main.py']
  for _, dir in enumerate(dirs):
    path = os.path.join(current_directory, dir)  
    os.mkdir(path)

  for _, file in enumerate(files):
    file_with_path = f'{current_directory}/{file}'
    with open(file_with_path, 'w') as f:
      if (file_with_path == '.gitignore'):
        f.write("""
          .vscode
          **/__pycache__
          **/venv
          **/tmp
          notes
        """)

def initialize_git():
  command = ['git', 'init', '.']
  # Run the command using subprocess.run()
  result = subprocess.run(command, capture_output=True, text=True)

  # Check if the command was successful
  if result.returncode == 0:
      print("Git repository initialized successfully.")
  else:
      print("Failed to initialize Git repository. Error:", result.stderr)


create_initial_source_files()
initialize_git()