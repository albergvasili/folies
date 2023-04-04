#! /bin/bash
# Run text-parser script
# Create destination file in dedicated folder

help() {
  echo "Usage: ./parse.sh [-h] source destination"
  echo "Run text-parser.py in virtual environment"
  echo "Create destination file in ../client/src/text/"
}

while getopts ":h" option; do
  case $option in
    h)
      help
      exit;;
  esac
done

destination=../client/src/text/$2
echo "$destinaton"

if [ -z "$1" ] || [ -z "$2" ]; then 
  echo "Missing arguments"
  echo "Please provide a source and a destination"
else
  source venv/bin/activate
  python text-parser.py $1 $destination
  deactivate
  echo "Checkout new file $destination? [Y/N]"
  read answer
  if [ $answer = "y" ] || [ $answer = "Y" ]; then
    vim $destination
  fi
fi
