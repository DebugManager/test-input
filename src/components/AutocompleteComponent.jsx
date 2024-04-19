import Autosuggest from "react-autosuggest";

const AutocompleteComponent = ({ setInput, options, input }) => {
  const handleInputChange = (event, { newValue }) => {
    setInput(newValue);
  };

  const handleSuggestionClick = (name) => {
    setInput(name);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : options.filter(
          (option) =>
            option.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const renderSuggestion = (suggestion) => (
    <div
      onClick={() => handleSuggestionClick(suggestion.name)}
      style={{ cursor: "pointer" }}
    >
      {suggestion.name}
    </div>
  );

  return (
    <Autosuggest
      suggestions={getSuggestions(input)}
      onSuggestionsFetchRequested={() => {}}
      onSuggestionsClearRequested={() => {}}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={renderSuggestion}
      inputProps={{
        value: input,
        onChange: handleInputChange,
      }}
      renderSuggestionsContainer={({ containerProps, children }) => (
        <div
          {...containerProps}
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {children}
        </div>
      )}
    />
  );
};

export default AutocompleteComponent;
