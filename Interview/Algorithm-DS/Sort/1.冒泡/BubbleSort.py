rawArr = [1, 3, 5, 10, 9, 8]
print rawArr
for i in range(0, len(rawArr))
    print rawArr[i]

def bubbleSort(arr):
    for i in range(1, len(arr)):
        for j in range(0, len(arr)-i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr