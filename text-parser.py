import argparse
import os

def add_spaces(source):
    """ Add spaces in 'source' file after characters in pauses """
    result = None
    pauses = ['.', '!', '?', ':']

    with open (source, 'r') as file:
        contents = [character
                       for line in file
                           for character in line]
        index = 0
        for character in contents:
            # Add new line after characters in pauses
            if character in pauses:
                if contents[index + 1] == '.':
                    pass
                else:
                    character = f'{character}    \n'
                    contents[index] = character
                    # Eliminate extra space after ponctuation in pauses
                    if contents[index + 1] == ' ':
                        contents.pop(index + 1)
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
#    add_spaces(args.source)

    with open (args.destination, 'a') as file:
        file.write(add_spaces(args.source))
