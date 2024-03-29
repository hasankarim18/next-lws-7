"use client";

import { useSearchParams } from "next/navigation";
import Button from "./Button";

export default function SortProducts() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <>
      <Button
        varient="outline"
        className="mx-2"
        onClick={() => updateSorting("asc")}
      >
        Sort Ascending
      </Button>
      <Button
        varient="outline"
        className="mx-2"
        onClick={() => updateSorting("desc")}
      >
        Sort Descending
      </Button>
    </>
  );
}
