import { useMemo } from "react";

export const useFilter = (records, search) => {
    return useMemo(
        () => records.filter((record) => record.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
        [search, records]
      );
}