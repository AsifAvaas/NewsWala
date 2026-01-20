import React from "react";
import { Card } from "flowbite-react";
function NewsCard({ title, description, url, category, country, image }) {
  return (
    <Card className="max-w-sm">
      <img src={image} alt={title} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div className="flex justify-between items-center text-sm mt-3 text-gray-500">
        <span className="capitalize">{category}</span>
        <span className="uppercase">{country}</span>
      </div>

      <a
        href={url}
        target="_blank"
        className="mt-3 inline-block text-blue-600 hover:underline"
      >
        read more
      </a>
    </Card>
  );
}

export default NewsCard;
