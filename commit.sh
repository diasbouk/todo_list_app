echo "Type your commit message"
read commit
git add .
git commit -m "$commit"
git push
