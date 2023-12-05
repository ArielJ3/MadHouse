import os
import csv

def fix_csv_files(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith('_section.csv'):
            # Construct the full file path
            file_path = os.path.join(folder_path, filename)

            with open(file_path, 'r', newline='') as file:
                reader = csv.reader(file)
                lines = list(reader)

            # Check if the file has at least 3 lines
            if len(lines) < 3:
                continue

            # Remove the last line (region names)
            lines.pop()

            # Combine the first line (header) with the second last line (category)
            combined_header = []
            for i, (header, category) in enumerate(zip(lines[0], lines[-1])):
                if i == 0:  # For the first column, just use the header
                    combined_header.append(header.strip())
                else:
                    new_header = f'{header.strip()} - {category.strip()}' if category else header.strip()
                    # Remove characters like brackets for PostgreSQL compatibility
                    new_header = new_header.replace('(', '').replace(')', '').replace(',', '').replace('"', '')
                    combined_header.append(new_header)

            lines[0] = combined_header

            # Remove the now duplicated last line (category line)
            lines.pop()

            # Construct new file name
            new_file_path = os.path.join(folder_path, filename.replace('.csv', '_fix.csv'))

            # Write the modified content to a new file
            with open(new_file_path, 'w', newline='') as file:
                writer = csv.writer(file)
                writer.writerows(lines)

# Your folder path
folder_path = '/Users/A/Code/MadHouse/database/import/housing-supply-and-rental'
fix_csv_files(folder_path)
