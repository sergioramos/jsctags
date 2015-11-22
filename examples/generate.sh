#!/bin/bash
FILES=test/cases/*.js
JSX=test/cases/*.jsx
DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

rm $DIR/*.md

echo "Readmes JS"
for f in $FILES
do
	filename=$(basename "$f")
	filename="${filename%.*}"

	echo -e "\`\`\`js\n$(cat $f)\n\`\`\`" > $DIR/$filename.md
	echo "  $filename"
	echo -e "\`\`\`json\n$($DIR/../bin/jsctags $f)\n\`\`\`" >> $DIR/$filename.md
	echo "  $filename json"
	echo -e "\`\`\`ctags\n$($DIR/../bin/jsctags $f -f)\n\`\`\`" >> $DIR/$filename.md
	echo "  $filename tags"
done

echo "Readmes JSX"
for f in $JSX
do
	filename=$(basename "$f")
	filename="${filename%.*}"
	echo -e "\`\`\`js\n$(cat $f)\n\`\`\`" > $DIR/$filename.md
	echo "  $filename"
	echo -e "\`\`\`json\n$($DIR/../bin/jsctags $f)\n\`\`\`" >> $DIR/$filename.md
	echo "  $filename json"
	echo -e "\`\`\`ctags\n$($DIR/../bin/jsctags $f -f)\n\`\`\`" >> $DIR/$filename.md
	echo "  $filename tags"
done

echo "Cases JS"
for f in $FILES
do
	filename=$(basename "$f")
	filename="${filename%.*}"
	echo -e "$($DIR/../bin/jsctags $f)" > test/cases/$filename.json
	echo "  $filename json"
	echo -e "$($DIR/../bin/jsctags $f -f)" > test/cases/$filename.tags
	echo "  $filename tags"
done

echo "Cases JSX"
for f in $JSX
do
	filename=$(basename "$f")
	filename="${filename%.*}"
	echo -e "$($DIR/../bin/jsctags $f)" > test/cases/$filename.json
	echo "  $filename json"
	echo -e "$($DIR/../bin/jsctags $f -f)" > test/cases/$filename.tags
	echo "  $filename tags"
done

node test/clean.js
