n_english = int(input())
english_subs = set(map(int, input().split()))
n_french = int(input())
french_subs = set(map(int, input().split()))
only_english = english_subs - french_subs
print(len(only_english))