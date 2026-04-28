use std::env;
use std::fs::{self, File};
use std::io::Write;
use std::path::PathBuf;
use std::process::Command;

fn create_initial_source_files(base_path: &PathBuf) {
    let dirs = vec!["src", "tmp", "notes"];
    let files = vec![".gitignore", "README.md", "main.py"];

    for dir in dirs {
        let path = base_path.join(dir);
        if let Err(e) = fs::create_dir(&path) {
            eprintln!("Failed to create directory {}: {}", path.display(), e);
        }
    }

    for file in files {
        let file_with_path = base_path.join(file);
        let mut f = match File::create(&file_with_path) {
            Ok(file) => file,
            Err(e) => {
                eprintln!("Failed to create file {}: {}", file_with_path.display(), e);
                continue;
            }
        };

        if file == ".gitignore" {
            if let Err(e) = f.write_all(
                b"
                .vscode
                **/__pycache__
                **/venv
                **/tmp
                notes
                ",
            ) {
                eprintln!("Failed to write to .gitignore: {}", e);
            }
        }
    }
}

fn initialize_git(base_path: &PathBuf) {
    let result = Command::new("git")
        .arg("init")
        .current_dir(base_path)
        .output()
        .expect("Failed to execute git command");

    if result.status.success() {
        println!("Git repository initialized successfully.");
    } else {
        eprintln!(
            "Failed to initialize Git repository. Error: {}",
            String::from_utf8_lossy(&result.stderr)
        );
    }
}

fn main() {
    // Get the current working directory
    let current_directory = env::current_dir().expect("Failed to get current working directory");

    create_initial_source_files(&current_directory);
    initialize_git(&current_directory);
}
