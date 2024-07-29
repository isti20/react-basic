import React, { memo } from "react";

const WithMemo = ({ withMemoCounter }) => {
  console.log("RENDER WITH MEMO");
  return <div>With Memo: {withMemoCounter}</div>;
};

export default memo(WithMemo);
