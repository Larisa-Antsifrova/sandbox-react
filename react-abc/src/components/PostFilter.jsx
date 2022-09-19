import React, { Fragment } from "react";
import InputBasic from "./ui/inputs/InputBasic";
import SelectBasic from "./ui/selects/SelectBasic";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <Fragment>
      <InputBasic
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />

      <SelectBasic
        defaultValue="Sort by"
        options={[
          { value: "title", name: "By title" },
          { value: "description", name: "By description" },
        ]}
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
      />
    </Fragment>
  );
};

export default PostFilter;
