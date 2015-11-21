#!/bin/bash
FILES=test/cases/*.js
DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

for f in $FILES
do
	filename=$(basename "$f")
	filename="${filename%.*}"
	echo -e "\`\`\`js\n$(cat $f)\n\`\`\`" > $DIR/$filename.md
	echo -e "\`\`\`json\n$($DIR/../bin/jsctags $f)\n\`\`\`" >> $DIR/$filename.md
	echo -e "\`\`\`ctags\n$($DIR/../bin/jsctags $f -f)\n\`\`\`" >> $DIR/$filename.md
done


for f in $FILES
do
	filename=$(basename "$f")
	filename="${filename%.*}"
	echo -e "$($DIR/../bin/jsctags $f)" > test/cases/$filename.json
	echo -e "$($DIR/../bin/jsctags $f -f)" > test/cases/$filename.tags
done

node test/clean.js
