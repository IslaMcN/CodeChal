def matrixElementsSum(matrix):
    row = col = 0
    result = 0
    while col < len(matrix[0]):
        if row < len(matrix) and matrix[row][col] != 0:
            result += matrix[row][col]
            row += 1
        else:
            col += 1
            row = 0
    return result