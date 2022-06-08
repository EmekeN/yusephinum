import { useEffect } from "react";

export const useEffectOnlyOnce = (func) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(func, []);
};
