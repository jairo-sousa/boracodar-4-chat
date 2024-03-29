import { Flex, Heading, Image, Text, Box, Button } from "@chakra-ui/react";

export function ChatHeader() {
	return (
		<Flex w="100%" justify="space-between" gap="1.6rem">
			<Image
				src="https://raw.githubusercontent.com/jairo-sousa/boracodar-4-chat/main/.github/chatImage.svg"
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
				<Image
					src="https://raw.githubusercontent.com/jairo-sousa/boracodar-4-chat/main/.github/close.svg"
					alt="close buton"
				/>
			</Button>
		</Flex>
	);
}
