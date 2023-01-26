import { Switch } from "@headlessui/react";
import { AiOutlineClockCircle } from "react-icons/ai/index.js";
import { MdOutlineSortByAlpha } from 'react-icons/md/index.js'
import { useStore } from '@nanostores/react'
import { method } from "../stores/projectStore";

const SortParamBox = () => {
  const $method = useStore(method)

  return (
    <div className='flex flex-row gap-2'>
      <AiOutlineClockCircle size={24} className="dark:fill-white cursor-pointer" onClick={() => method.set(0)}/>
      <Switch
        aria-label='Sort method'
        checked={$method === 1}
        onClick={() => method.set($method === 0 ? 1 : 0)}
        className={`${$method === 1 ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[24px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${$method === 1 ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <MdOutlineSortByAlpha size={24} className="dark:fill-white cursor-pointer" onClick={() => method.set(1)}/>
      </div>
  );
};

export default SortParamBox;
