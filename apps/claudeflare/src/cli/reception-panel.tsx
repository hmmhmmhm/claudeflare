import { render, Box, Text, useInput } from "ink";
import { FancyTerminal } from "./fancy-terminal.js";

const receptionMessage = `
 ██████╗██╗      █████╗ ██╗   ██╗██████╗ ███████╗
██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██╔════╝
██║     ██║     ███████║██║   ██║██║  ██║█████╗
██║     ██║     ██╔══██║██║   ██║██║  ██║██╔══╝
╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝███████╗
 ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝

███████╗██╗      █████╗ ██████╗ ███████╗
██╔════╝██║     ██╔══██╗██╔══██╗██╔════╝
█████╗  ██║     ███████║██████╔╝█████╗
██╔══╝  ██║     ██╔══██║██╔══██╗██╔══╝
██║     ███████╗██║  ██║██║  ██║███████╗
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
`;

export const ReceptionPanel = () => {
  useInput((_input, key) => {
    if (key.return) {
      render(<FancyTerminal />);
    }
  });

  return (
    <Box flexDirection="column">
      <Box borderStyle="round" borderColor="#d97757" paddingX={1} width="30">
        <Text color="white" bold>
          Welcome to Claudeflare
        </Text>
      </Box>

      <Text color="#d97757" bold>
        {receptionMessage}
      </Text>

      <Text color="#d97757">
        Press{" "}
        <Text color="#d97757" bold>
          Enter
        </Text>{" "}
        to continue
      </Text>
    </Box>
  );
};
