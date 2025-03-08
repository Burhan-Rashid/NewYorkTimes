import { http, HttpResponse } from 'msw';

const mockArticles = {
  status: "OK",
  copyright: "Copyright (c) 2024 The New York Times Company",
  num_results: 2,
  results: [
    {
      id: 1,
      title: "Test Article 1",
      published_date: "2024-03-20",
      url: "https://www.nytimes.com/test1"
    },
    {
      id: 2,
      title: "Test Article 2",
      published_date: "2024-03-21",
      url: "https://www.nytimes.com/test2"
    }
  ]
};

export const handlers = [
  http.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/:period.json', () => {
    return HttpResponse.json(mockArticles);
  }),
]; 