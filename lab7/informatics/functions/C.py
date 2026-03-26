def xor(x, y):
    if x == 1 and y == 0:
        return 1
    elif x == 0 and y == 1:
        return 1
    else:
        return 0

x, y = map(int, input().split())
print(xor(x, y))