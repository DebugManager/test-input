import { useQuery } from "react-query";

const fetchAutocompleteSuggestions = async (searchTerm) => {
  const response = await fetch(
    `https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch autocomplete suggestions");
  }

  return response.json();
};

const useAutocompleteStore = () => {
  const fetchSuggestions = async (context) => {
    const { searchTerm } = context;
    return fetchAutocompleteSuggestions(searchTerm);
  };

  const { data, isLoading, isError } = useQuery(
    "autocomplete",
    fetchSuggestions
  );

  return { data, isLoading, isError };
};

export default useAutocompleteStore;
