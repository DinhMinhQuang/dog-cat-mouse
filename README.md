Demo hear
//git init 
//git status 
//git commit 

//git log 
//git show 
//git diff 

//working directory 
//staging area
//git repository

//git checkout -- <file>
//git reset 

//git checkout -b <branch> (branching)
//git checkout <branch>
//git merge
//git branch -D <branch> 

//git reset --soft <to_commit>
//git reset --mixed <to-commit>
//git reset ---hard <to-commit>

//git revert <commit>

//.gitignore

//git remote add origin <url>


//git push 
//git clone 
//git pull

//Pull Request 
// 1. git checkout -b <feature-branch>
// 2. git push origin <branch>
// 3. create a pull request on GitHub
// 4. review code
// 5. merge to master 

//Resolve conflicts
When will conflicts happen ? 
    1. Change the same file + same line
    2. A deleted file X, B modified file X

Method 1: 
    1. Using `git rebase` 
    2. Resolve Conflicts 
    3. push again with -f 
Method 2: 
    1. Merge updated master to feature branch 
    2. Resolve Conflicts 
    3. Commit and Push 