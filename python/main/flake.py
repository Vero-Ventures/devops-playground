# This variable is redefined later
x = 5


def addition(a, b):
    return a + b


def complex_function():
    # This function has too many statements
    x = addition(1, 2)
    y = addition(3, 4)
    z = addition(x, y)
    return z


# This has no clear assertion
def test_complex_function():
    result = complex_function()
    assert result == 10, "Result should be 10"
