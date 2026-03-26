correct_answer = int(input())
student_answer = int(input())
if student_answer == 1:
    if correct_answer == 1:
        print("YES")
    else:
        print("NO")
else:
    if correct_answer != 1:
        print("YES")
    else:
        print("NO")