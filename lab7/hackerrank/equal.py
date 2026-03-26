string = input()
sub = input()
count = 0
for i in range(len(string) - len(sub) + 1):
    if string[i:i+len(sub)] == sub:
        count += 1

print(count)