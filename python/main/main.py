import pandas as pd

data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Score': [85, 90, 95]
}

df = pd.DataFrame(data)

average_score = df['Score'].mean()
print(f"Average Score: {average_score}")

def add_numbers(a, b):
    return a + b
