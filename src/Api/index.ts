import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const API_URLS = {
  MOST_POPULAR_ARTICLES: `https://api.nytimes.com/svc/mostpopular/v2/viewed/`,
};

const NyTimesMostPopularArticlesApi = async (period: number) => {
  const response = await axios.get(
    `${API_URLS.MOST_POPULAR_ARTICLES}${period}.json?api-key=${apiKey}`
  );
  return response.data;
};

export { NyTimesMostPopularArticlesApi };
