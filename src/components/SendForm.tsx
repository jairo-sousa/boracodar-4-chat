import { Flex, Input } from "@chakra-ui/react";

export function SendForm() {
	return (
		<Flex>
			<Input type="text"></Input>
			<Input type="submit" />
		</Flex>
	);
}
