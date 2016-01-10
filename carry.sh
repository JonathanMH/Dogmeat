#!/bin/bash
declare -a files=("atom-packages.txt" "npm-globals.txt" "packages.txt" "ppa.txt")

figlet "Dogmeat carry"

for i in ${files[*]}
do
  echo 'sorting and uniquifying:' $i;
  mv $i $i.tmp
  cat $i.tmp | sort | uniq -u > $i;
  rm $i.tmp
  echo "---------------------------------------------------------------------#";
done
