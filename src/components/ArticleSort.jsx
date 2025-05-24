import { Portal, Select, createListCollection } from "@chakra-ui/react";

const sortOptions = createListCollection({
  items: [
    { label: "Waves", value: "votes" },
    { label: "Comments count", value: "comment_count" },
    { label: "Created at", value: "created_at" },
  ],
});

function ArticleSort({ onChange, sortBy }) {
  return (
    <Select.Root
      data-test-id="select-root"
      collection={sortOptions}
      defaultValue={[sortBy]}
      value={[sortBy]}
      size="sm"
      onValueChange={onChange}
      flexDirection="row"
      alignItems="center"
      justifyContent="right"
      mb={4}
      as="span"
    >
      <Select.HiddenSelect />
      <Select.Label>Sort by</Select.Label>
      <Select.Control width="180px">
        <Select.Trigger>
          <Select.ValueText placeholder="" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {sortOptions.items.map((sortOption) => (
              <Select.Item item={sortOption} key={sortOption.value}>
                {sortOption.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}

export default ArticleSort;
