import React, { memo } from "react";

const WithoutMemo = () => {
  console.log("RENDER WITHOUT MEMO");
  return <div>Without Memo</div>;
};

export default memo(WithoutMemo);