import * as React from "react";
import { InputSearch } from "@washingtonpost/wpds-ui-kit";

const suggestedTags = [
  {
    id: "001",
    topic_name: "boop"
  },
  {
    id: "002",
    topic_name: "city"
  }
];

export default function App() {
  return (
    <InputSearch.Root openOnFocus css={{ zIndex: 100000, width: "100%" }}>
      <InputSearch.Input
        name="search"
        id="search"
        label="Enter a URL or Topic to search"
        // css={{ height }}
        autocomplete={true}
        selectOnClick={true}
        // value={value}
        // onChange={onChange}
        // onButtonIconClick={onSearch}
        // onKeyDown={onEnter}
      />
      {suggestedTags && (
        <InputSearch.Popover portal={false} css={{ marginTop: "8px" }}>
          {suggestedTags.length > 0 && (
            <InputSearch.List persistSelection={false}>
              {suggestedTags.map((topic) => (
                <InputSearch.ListItem
                  css={{ cursor: "pointer", backgroundColor: "#fff" }}
                  key={`${topic.topic_name.toLowerCase()}, ${topic.id}`}
                  value={`${topic.topic_name}`}
                  // onClick={() => onSelectTag(topic)}
                />
              ))}
            </InputSearch.List>
          )}
        </InputSearch.Popover>
      )}
    </InputSearch.Root>
  );
}
