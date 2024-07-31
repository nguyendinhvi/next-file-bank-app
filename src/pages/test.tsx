import React, { useEffect } from "react";

const TestPage = () => {
  useEffect(() => {
    const a: any = {
      i: 1,
      valueOf: function () {
        return this.i++;
      },
    };

    if (a == 1 && a == 2 && a == 3) {
    }
  }, []);

  return <div></div>;
};

export default TestPage;
