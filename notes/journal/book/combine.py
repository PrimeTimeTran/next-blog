import os

def combine_markdown_files(directory, output_file):
    # Get a sorted list of all Markdown files in the directory
    files = sorted([f for f in os.listdir(directory) if f.endswith(".md")])

    with open(output_file, "w") as outfile:
        for fname in files:
            file_path = os.path.join(directory, fname)
            with open(file_path, "r") as infile:
                # Write the content of the file to the output file
                outfile.write(infile.read())
                # Add the page break HTML snippet and a newline
                outfile.write('\n<div style="page-break-after: always;"></div>\n\n')


if __name__ == "__main__":
    # Define the directory containing the markdown files
    directory = "./content"
    # Define the output file
    output_file = "book.md"
    # Combine the markdown files
    combine_markdown_files(directory, output_file)
