/// <reference types="astro/astro-jsx" />
import { useStore } from "@nanostores/react";
import type { portfolioData } from "../content.config";
import ProjectCard from "./PCard";
import { invert, method } from "../stores/projectStore";
import { useEffect, useMemo, useState } from "react";

interface SortableCardListProps {
  data: (portfolioData & {
    imgProps: astroHTML.JSX.ImgHTMLAttributes | null;
    slug: string;
  })[];
}

const SortableCardList = ({ data }: SortableCardListProps) => {
  const $invert = useStore(invert);
  const $method = useStore(method);

  const sortedData = useMemo(
    () =>
      [...data].sort((a, b) => {
        if ($method === 0) {
          return $invert
            ? a.lastUpdated.getTime() - b.lastUpdated.getTime()
            : b.lastUpdated.getTime() - a.lastUpdated.getTime();
        }
        return $invert
          ? b.title.localeCompare(a.title)
          : a.title.localeCompare(b.title);
      }),
    [data, $invert, $method]
  );

  return (
    <ul>
      {sortedData.map((d) => (
        <li key={d.title}>
          <ProjectCard
            title={d.title}
            description={d.description}
            slug={d.slug}
            lastUpdated={d.lastUpdated}
            imgProps={d.imgProps}
            key={d.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default SortableCardList;
