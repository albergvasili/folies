import argparse
import os
from num2words import num2words

def add_spaces(source):
    """ Add spaces in 'source' file after characters in pauses """
    result = None
    pauses = [',', '.', '!', '?', ':']

    with open (source, 'r') as file:
        contents = [character
                       for line in file
                           for character in line]
        index = 0
        paragraph = 1;
        modules = f'\n  zero,';

        for character in contents:
            # Create JS constants for each paragraph
            if index == 0:
                contents[index] = f'const zero = `\n  {character}'
            elif index + 1 == len(contents):
                contents[index] = f'`;\n\nmodule.exports = {{ {modules}\n}}'
            elif character == '\n':
                contents[index] = f'`;\nconst { num2words(paragraph) } = `\n  '
                modules = f'{modules}\n  {num2words(paragraph)},'
                paragraph += 1
            # Add new line after characters in pauses
            elif character in pauses:
                # Handle ellipsis (don't separate each dot)
                if contents[index + 1] == '.':
                    pass
                # Add one space and a newline after a comma
                elif character == ',':
                    contents[index] = f'{character} \n'
                    # Add extra space after ponctuation in pauses for indentation
                    if contents[index + 1] == ' ':
                        contents[index + 1] = '  '
                # Add four spaces and a newline after punctuation in pauses
                else:
                    character = f'{character}    \n'
                    contents[index] = character
                    # Add extra space after ponctuation in pauses for indentation
                    if contents[index + 1] == ' ':
                        contents[index + 1] = '  '
            index += 1

        result = ''.join(contents)

    return result


if __name__ == "__main__":

    parser = argparse.ArgumentParser(description=
        "Add newlines to text file after each punctuation pause made while reading"
    )
    parser.add_argument("source", help="Path to the file to be parsed")
    parser.add_argument("destination", help="Path to the destination file")
    args = parser.parse_args()

    with open (args.destination, 'a') as file:
        file.write(add_spaces(args.source))
