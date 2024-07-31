/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = <T>(callback: any, dependencies?: any[]) => {
  const [data, setData] = useState<T>();

  const fetchData = async () => {
    try {
      const resData = await callback;
      setData(resData);
    } catch (error) {}
  };

  useEffect(() => {
    if (dependencies?.every((dep) => dep)) {
      console.log("zo");

      fetchData();
    }
  }, dependencies);

  return { data };
};
