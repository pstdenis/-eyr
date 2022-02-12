import csv
import json
with open('cl_a_all.csv', 'r') as f:
    mycsv = csv.reader(f)
    columnCount= len(next(mycsv))-1
    heatmap =  [ [0]*columnCount for i in range(columnCount)]

    for rowIndex, row in enumerate(mycsv):
        for pair1Index, val1 in enumerate(row[1:]):
            for pair2Index, val2 in enumerate(row[1:]):
                heatmap[pair1Index][pair2Index] += abs(int(val1)-int(val2))
    print(json.dumps(heatmap))
  
