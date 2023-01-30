import { Flex, Heading, Image, Text, Box } from "@chakra-ui/react";

export function ChatHeader() {
	return (
		<Flex>
			<Image src="" alt="chat image" />
			<Flex>
				<Heading as="h1" size="1.6rem">
					Cecilia Sassaki
				</Heading>
				<Box>
					<Box>.</Box>
					<Text>Oline</Text>
				</Box>
			</Flex>
			<Image src="src/assets/close.svg" alt="close buton" />
		</Flex>
	);
}
