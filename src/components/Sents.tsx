import { Flex, Text } from "@chakra-ui/react";
import { Sent } from "./Sent";

export function Sents() {
	const sents = [
		{
			date: "11:20",
			message: {
				media: [""],
				text: "Tive uma ideia incrível para um projeto! 😍",
			},
			user_id: 1,
		},
		{
			date: "11:22",
			message: {
				media: [""],
				text: "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?",
			},
			user_id: 1,
		},
		{
			date: "11:21",
			message: {
				media: [""],
				text: "Sério? Me conta mais.",
			},
			user_id: 2,
		},
		{
			date: "11:23",
			message: {
				media: [""],
				text: "#boraCodar! 🚀",
			},
			user_id: 2,
		},
		{
			date: "11:24",
			message: {
				media: [""],
				text: "Tive uma ideia incrível para um projeto! 😍",
			},
			user_id: 1,
		},
		{
			date: "11:26",
			message: {
				media: [""],
				text: "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?",
			},
			user_id: 1,
		},
		{
			date: "11:25",
			message: {
				media: [""],
				text: "Sério? Me conta mais.",
			},
			user_id: 2,
		},
		{
			date: "11:27",
			message: {
				media: [""],
				text: "#boraCodar! 🚀",
			},
			user_id: 2,
		},
	];

	sents.sort(function (a, b) {
		var key1 = a.date;
		var key2 = b.date;

		if (key1 < key2) {
			return -1;
		} else if (key1 == key2) {
			return 0;
		} else {
			return 1;
		}
	});
	return (
		<Flex
			my="1.4rem"
			align="start"
			h="100%"
			direction="column"
			gap="3rem"
			overflow="scroll"
			sx={{
				"::-webkit-scrollbar": {
					display: "none",
				},
			}}
		>
			<Text
				pb="0.5rem"
				size="1.2rem"
				color="#E1E1E6"
				w="85.93%"
				align="center"
				position="fixed"
				backgroundColor="#1a1924"
			>
				Hoje {sents[0].date}
			</Text>

			{sents.map((sent, i) => {
				return (
					<Sent
						key={`${sent.user_id} - ${i}`}
						sentByYou={sent.user_id == 2}
						time={sent.date}
						userId={sent.user_id}
						message={sent.message.text}
					/>
				);
			})}
		</Flex>
	);
	function extractTime(date: Date) {
		return "11:10";
	}
}
