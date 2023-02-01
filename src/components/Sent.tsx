import { Flex, Text } from "@chakra-ui/react";

type SentProps = {
	sentByYou: Boolean;
	userId: Number;
	time: String;
	message: String;
};
export function Sent(props: SentProps) {
	const users = [
		{
			id: 1,
			username: "sassakiceci",
			password: "1234",
			name: "Cecilia",
			last_name: "Sassaki",
			status: "Online",
			profile_picture: "",
		},
		{
			id: 2,
			username: "ramsaygord",
			password: "1234",
			name: "Gordom",
			last_name: "Ramsay",
			status: "Online",
			profile_picture: "",
		},
	];
	const authorName = users
		.map((user) => {
			if (user.id == props.userId) return user.name;
		})
		.toString()
		.replace(",", "");

	const sentStyle = {
		justify: "end",
		bg: "#07847E",
		borderRadius: "0.8rem 0 0.8rem 0.8rem",
	};
	const recivedStyle = {
		justify: "start",
		bg: "#633BBC",
		borderRadius: "0 0.8rem 0.8rem 0.8rem",
	};

	const style = props.sentByYou ? sentStyle : recivedStyle;
	return (
		<Flex align={style.justify} w="100%" direction="column" gap="1rem">
			<Text> {`${authorName} - ${props.time}`} </Text>
			<Text
				backgroundColor={style.bg}
				borderRadius={style.borderRadius}
				p="1.4rem"
				w="fit-content"
				maxW="50%"
			>
				{props.message}
			</Text>
		</Flex>
	);
}
