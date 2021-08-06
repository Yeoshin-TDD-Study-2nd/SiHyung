import { useCallback, useState } from "react";
import styled from "@emotion/styled/macro";

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

const Main = () => {
	const [number, setNumber] = useState("");
	const [fiboResult, setFiboResult] = useState(0);

	const onClickEnter = useCallback(
		e => {
			if (e.key === "Enter") {
				setFiboResult(fibonacci(parseInt(number)));
			}
		},
		[number]
	);

	return (
		<Container>
			<Title>
				TDD 스터디 2기
				<br />
				FOR REACT
			</Title>
			<SubTitle>
				<p>5주차 피보나치 수열</p>
			</SubTitle>
			<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
				<InputContainer>
					<NumberInput
						placeholder="숫자를 입력하세요."
						value={number}
						onChange={e => setNumber(e.target.value)}
						data-testid="number-input"
						type={"number"}
						onKeyDown={onClickEnter}
					/>
				</InputContainer>
			</div>
			{fiboResult != 0 && (
				<Result>
					<ResultTitle>정답 : </ResultTitle>
					<h1 data-testid="fibo-result">{fiboResult}</h1>
				</Result>
			)}
		</Container>
	);
};

export default Main;

const Container = styled.div`
	margin: auto 0;
`;

const Title = styled.div`
	opacity: 0;
	animation: appear 0.8s cubic-bezier(0.1, 0, 0.175, 1) forwards;
	animation-delay: 1.2s;
	font-size: 52px;
	line-height: 1.4;
	letter-spacing: -0.05em;
	font-weight: 700;
	text-align: center;
	margin: 0 0 25px;

	@media (min-width: 768px) {
		font-size: 80px;
	}

	@keyframes appear {
		to {
			opacity: 1;
		}
	}
`;
const SubTitle = styled.div`
	opacity: 0;
	font-size: 20px;
	line-height: 1.4;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 32px;
	color: #845ef7;
	animation: appear 0.8s cubic-bezier(0.1, 0, 0.175, 1) forwards;
	animation-delay: 1.6s;

	@media (min-width: 768px) {
		font-size: 30px;
	}

	@keyframes appear {
		to {
			opacity: 1;
		}
	}
`;

const InputContainer = styled.div`
	background-color: #252729;
	border-radius: 8px;
	width: 90%;
	max-width: 480px;
`;

const NumberInput = styled.input`
	border: none;
	width: 100%;
	background: transparent;
	outline: none;
	height: 56px;
	padding-left: 15px;
	padding-right: 15px;
	font-size: var(--text-md);
	color: #fff;
	font-family: inherit;
	::placeholder {
		text-align: center;
	}
`;

const Result = styled.div`
	margin: 20px 0 0 0;
	opacity: 0;
	display: flex;
	justify-content: center;
	animation: appear 0.8s cubic-bezier(0.1, 0, 0.175, 1) forwards;
	animation-delay: 0.8s;
	@keyframes appear {
		to {
			opacity: 1;
		}
	}
`;

const ResultTitle = styled.div`
	margin: 0 10px 0 0;
	font-weight: bold;
	font-size: 2em;
`;
