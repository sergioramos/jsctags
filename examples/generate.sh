FILES=test/cases/*
DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"

for f in $FILES
do
	filename=$(basename "$f")
	filename="${filename%.*}"
	echo "\`\`\`js\n$(cat $f)\n\`\`\`" > $DIR/$filename.md
	echo "\`\`\`json\n$($DIR/../bin/jsctags $f)\n\`\`\`" >> $DIR/$filename.md
	echo "\`\`\`ctags\n$($DIR/../bin/jsctags $f -c)\n\`\`\`" >> $DIR/$filename.md
done