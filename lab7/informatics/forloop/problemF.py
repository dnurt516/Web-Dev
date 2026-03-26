x = input()
reversed_x = ''
for digit in x:
    reversed_x = digit + reversed_x
print(int(reversed_x))