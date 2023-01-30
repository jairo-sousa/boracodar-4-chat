import { Button, Flex, Input, Image } from "@chakra-ui/react";

export function SendForm() {
	return (
		<Flex
			align="center"
			justify="space-between"
			w="100%"
			h="5.2rem"
			backgroundColor="#282843"
			borderRadius="3rem"
			px="2.4rem"
			gap="1rem"
		>
			<Input
				type="text"
				w="100%"
				placeholder="Digite sua mensagem"
				size="1.2rem"
				color="#E1E1E6"
				border="none"
				focusBorderColor="transparent"
				outline="transparent"
			></Input>
			<Button backgroundColor="transparent">
				<Image src="src/assets/send.svg" alt="chat image" />
			</Button>
		</Flex>
	);
}
