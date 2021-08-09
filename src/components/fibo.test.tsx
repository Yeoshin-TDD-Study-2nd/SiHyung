import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Main from "./curriculum/5/Main";

describe("Fibo Test", () => {
	test("should return fibo value", () => {
		render(<Main />);

		const INPUT_NUMBER = 5;

		const inputEL = screen.getByTestId("number-input");

		// TEST : input Element가 있어야 한다
		expect(inputEL).toBeInTheDocument();

		// TEST : input type이 number이어야 한다
		expect(inputEL).toHaveAttribute("type", "number");

		// TEST : 5를 넣으면 5가 입력되어야한다.
		fireEvent.change(inputEL, { target: { value: INPUT_NUMBER } });

		expect(screen.getByTestId("number-input")).toHaveValue(INPUT_NUMBER);

		// TEST : 엔터키 입력, 13번
		fireEvent.keyDown(inputEL, { key: "Enter", code: 13 });

		// TEST : 피보나치 값이 적혀야한다. string 값으로
		expect(screen.getByRole("heading")).toHaveTextContent(
			fibonacci(INPUT_NUMBER).toString()
		);
	});
});

// NOTE : FIBO CALC

function fibonacci(num: number) {
	var a = 1,
		b = 0,
		temp;

	while (num >= 0) {
		temp = a;
		a = a + b;
		b = temp;
		num--;
	}

	return b;
}
