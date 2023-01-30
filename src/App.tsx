import { Box, Flex, Input } from "@chakra-ui/react";
import { ChatHeader } from "./components/ChatHeader";
import { Sents } from "./components/Sents";
import { SendForm } from "./components/SendForm";

export function App() {
	return (
		<Box className="App" w="85.93%" h="89.84%">
			<Flex
				direction="column"
				fontFamily="Roboto, sans-serif"
				color="white"
				w="100%"
				h="100%"
			>
				<ChatHeader />
				<Sents />
				<SendForm />
			</Flex>
		</Box>
	);
}
