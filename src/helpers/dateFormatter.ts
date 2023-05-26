import { format } from "date-fns";

const dateFormatter = (dateString: string): string => {
  console.log(dateString);
  const date = new Date(dateString);
  return format(date, "MMM d, yyyy");
};

export default dateFormatter;
