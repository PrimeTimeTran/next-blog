with open('requirements.txt', 'r') as f:
    lines = f.readlines()

with open('requirements.in', 'w') as f:
    for line in lines:
        if line.startswith('#') or not line.strip():
            continue
        package = line.split('==')[0].split('>=')[0].split('<')[0].strip()
        f.write(package + '\n')
