/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = <T>(callback: any, dependencies?: any[]) => {
  const [data, setData] = useState<T>();

  const fetchData = async () => {
    try {
      const resData = await callback();
      console.log("resData :", resData);
      setData(resData);
    } catch (error) {
      console.log("error :", error);
    }
  };

  useEffect(() => {
    console.log("zo");

    fetchData();
  }, dependencies || []);

  return { data };
};
