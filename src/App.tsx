import { Box, Flex, Input } from "@chakra-ui/react";
import { Chatheader } from "./components/Chatheader";
import { Sents } from "./components/Sents";
import { SendForm } from "./components/SendForm";

export function App() {
	return (
		<Box className="App">
			<Flex
				direction="column"
				fontFamily="Roboto, sans-serif"
				color="white"
				w="100%"
				h="4100%"
			>
				<Chatheader />
				<Sents />
				<SendForm />
			</Flex>
		</Box>
	);
}
