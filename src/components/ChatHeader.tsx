import { Flex, Heading, Image, Text, Box, Button } from "@chakra-ui/react";

export function ChatHeader() {
	return (
		<Flex w="100%" justify="space-between">
			<Image
				src="src/assets/chatImage.svg"
				alt="chat image"
				w="4.8rem"
				h="4.8rem"
			/>
			<Flex w="88.63%" direction="column">
				<Heading as="h1" size="1.6rem">
					Cecilia Sassaki
				</Heading>
				<Flex align="center" gap="0.4rem">
					<Box
						backgroundColor="#00B37E"
						w="0.8rem"
						h="0.8rem"
						borderRadius="50%"
					></Box>
					<Text size="1.2rem" color="#00B37E">
						Online
					</Text>
				</Flex>
			</Flex>
			<Button backgroundColor="transparent">
				<Image src="src/assets/close.svg" alt="close buton" />
			</Button>
		</Flex>
	);
}
