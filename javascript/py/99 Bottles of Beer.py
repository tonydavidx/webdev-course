bottles = 99
while bottles >= 1:
    print(f"{bottles} bottles of beer on the wall, 99 bottles of beer.")
    bot = bottles - 1
    print(
        f"Take one down and pass it around, {bottles} bottles of beer on the wall.\n")
    if bottles == 0:
        print(f"No more bottles of beer on the wall, no more bottles of beer.")
        print(f"Go to the store and buy some more, 99 bottles of beer on the wall.\n")
