N = int(input())
i = 1
while i * i <= N:
    print(i * i)
    i += 1

#B
n = int(input())
i = 2
while i <= n:
    if n % i == 0:
        print(i)
        break
    i += 1
#C
N = int(input())
power = 1
while power <= N:
    print(power, end=" ")
    power *= 2

#D
n = int(input())
power = 1
while power < n:
    power *= 2
if power == n:
    print("YES")
else:
    print("NO")

#E
n = int(input())
k = 0
power = 1
while power < n:
    power *= 2
    k += 1
print(k)