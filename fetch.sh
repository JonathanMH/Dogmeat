#!/bin/bash

echo "Dogmeat fetch"

# add-apt-repository in sequence
readarray -t ppas < ppa.txt # Exclude newline.
for i in ${ppas[*]}
do
  echo 'adding: ' $i
  sudo add-apt-repository $i --yes
done
echo "---------------------------------------------------------------------#";

# apt-get update
sudo apt-get update

# apt-get install
readarray -t packages < packages.txt # Exclude newline.
sudo apt-get install -y ${packages[*]}
echo "---------------------------------------------------------------------#";

# custom
./custom.sh
echo "---------------------------------------------------------------------#";

# apm install
readarray -t atompackages < atom-packages.txt # Exclude newline.
apm install ${atompackages[*]}
echo "---------------------------------------------------------------------#";
