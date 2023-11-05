import React, {FC} from "react";

const Loading: FC = () => {
    return (
      <div className="m-auto border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-blue-600"/>
    );
  };
  
export default React.memo(Loading);