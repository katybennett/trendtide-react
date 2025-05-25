import { Box } from "@chakra-ui/react";
import { ArrowDown, ArrowUp } from "lucide-react";

function OrderByButton({ orderBy, onOrderChange }) {
  return (
    <Box onClick={onOrderChange}>
      {orderBy === "asc" ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
    </Box>
  );
}

export default OrderByButton;
