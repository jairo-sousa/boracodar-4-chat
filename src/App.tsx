import { Box, Flex, Input } from "@chakra-ui/react";
import { ChatHeader } from "./components/ChatHeader";
import { Sents } from "./components/Sents";
import { SendForm } from "./components/SendForm";

export function App() {
	return (
		<Flex
			className="App"
			w="85.93%"
			h="89.84%"
			direction="column"
			justify="space-between"
			fontFamily="Roboto, sans-serif"
			color="white"
		>
			<ChatHeader />
			<Sents />
			<SendForm />
		</Flex>
	);
}
