from math import sqrt

#A
a = int(input())
b = int(input())
print(sqrt(a * a + b * b))

#B
x = int(input())
print("The next number for the number", x, "is", x + 1)
print("The previous number for the number", x, "is", x - 1)

#C
p = int(input())
apples = int(input())
print(apples // p)
#D
print(apples % p)

#E
v = int(input())
t = int(input())
s = (v * t) % 109
if s < 0:
    print(s + 109)
else:
    print(s)