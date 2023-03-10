import { useStore } from "@nanostores/react";
import { invert } from "../stores/projectStore";
import { BsSortDown, BsSortUp } from "react-icons/bs/index.js";

const InvertSort = () => {
  const $invert = useStore(invert);
  return (
    <button
      onClick={() => invert.set(!$invert)}
      aria-label="invert"
      title="Invert list"
    >
      {$invert ? (
        <BsSortUp
          className="dark:fill-white hover:fill-slate-600 dark:hover:fill-slate-300"
          size={24}
        />
      ) : (
        <BsSortDown
          className="dark:fill-white hover:fill-slate-600 dark:hover:fill-slate-300"
          size={24}
        />
      )}
    </button>
  );
};

export default InvertSort;
