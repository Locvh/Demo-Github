This project is just a demo how to use git 

//git init 
//git status (xem tinh trang no)
//git add (them vao)
//git commit  (dong goi)
-
//git log (xem lich su co commit nao dc create )
//git show (show cai id commit trong git log)
//git diff (xem su thay doi gi trong file)

// working directory
//staging area
// git repository
// gitk (de mo cua so xem lenh da sua)

// git checkout -- <file> (xoa bo mot so thay doi khi chua len git)
//  git reset <file> (dung de reset file khi len git)

//git branch

//git checkout -b <branch> (branching) (git checkout -b <filename>) (vua chuyen den file moi vua tao file)
//git checkout <branch>
//git merge  ( dung de gop tat ca cac branch gom 2 buoc )
A <--- B

B1: git checkout A  (chon branch chua master)
B2: git merge B  ( chon branch se cho vao )

master <--- feature/dog-class

// git branch -D <filename>  ( dung de xoa nhanh trong branch)

//git reset  --soft <to_commit>
//git reset  --mixed <to_commit>
//git reset  --hard <to_commit>