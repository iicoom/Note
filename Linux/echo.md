Parenthesize first character of each word : This sed example prints the first character of every word in paranthesis.

$ echo "Welcome To The Geek Stuff" | sed 's/\(\b[A-Z]\)/\(\1\)/g'

Output:

(W)elcome (T)o (T)he (G)eek (S)tuff