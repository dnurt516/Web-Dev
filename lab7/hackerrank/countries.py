n = int(input())
countries = set()
for _ in range(n):
    country = input().strip()
    countries.add(country)  
print(len(countries))