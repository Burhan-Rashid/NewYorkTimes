import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NyTimesMostPopularArticlesApi } from "../../Api";
import { NyTimesArticle } from "../../Types";
import ErrorPage from "../ErrorPage";
import Loader from "../Loader";

function NyTimesListView() {
  const [duration, setDuration] = useState<number>(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["nyTimesMostPopularArticles", duration],
    queryFn: () => NyTimesMostPopularArticlesApi(duration),
    staleTime: 5 * 60 * 1000,
    retry: 0,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage errorMessage={error.message} />;
  }

  return (
    <div>
      <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-gray-900 text-white p-4 px-8 shadow-md z-50">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          Most Popular Articles of NY Times
        </h1>
        <select
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value={1}>Last 1 day</option>
          <option value={7}>Last 7 days</option>
          <option value={30}>Last 30 days</option>
        </select>
      </div>

      <ul className="divide-y divide-gray-300 px-8 pt-20">
        {data.results.map((article: NyTimesArticle) => (
          <li
            key={article.id}
            className="py-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-gray-500 text-sm">
                Published on: {article.published_date}
              </p>
            </div>
            <button
              onClick={() => window.open(article.url, "_blank")}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer  whitespace-nowrap"
            >
              Read Article
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NyTimesListView;
