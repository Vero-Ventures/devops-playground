from main.main import add_numbers, df


def test_addition():
    result = add_numbers(2, 3)
    assert result == 5, "Addition result is incorrect"


def test_average_score():
    expected_average = 90
    calculated_average = df["Score"].mean()
    assert (
        calculated_average == expected_average
    ), "Average score is incorrect in DataFrame"


def test_division():
    assert 10 / 2 == 5, "Division result is incorrect"
