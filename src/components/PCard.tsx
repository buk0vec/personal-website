/// <reference types="astro/astro-jsx" />

export interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image?: any;
  lastUpdated: Date;
  imgProps: astroHTML.JSX.ImgHTMLAttributes | null;
}

const ProjectCard = ({
  title,
  description,
  slug,
  imgProps,
  lastUpdated
}: ProjectCardProps) => {
  return (
    <a href={`/portfolio/${slug}`}>
      <div className="border-4 rounded-md border-black dark:border-teal-200 my-4 overflow-hidden group hover:scale-101 transition-transform">
        <div className="max-w-xl overflow-hidden">
          {
            // @ts-ignore
            imgProps && <img {...imgProps} loading="lazy" decoding="async" className="group-hover:scale-105 transition-transform" />
          }
        </div>
        <h2 className="font-bold text-2xl px-4 pt-4 dark:text-white">
          {title}
        </h2>
        <p className="px-4 dark:text-white">{description}</p>
        <p className="px-4 pb-4 dark:text-white">Last updated {lastUpdated.toDateString()}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
