import { QueryClient, QueryClientProvider } from "react-query";
import Calculator from "./components/Calculator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Calculator />
    </QueryClientProvider>
  );
};

export default App;
