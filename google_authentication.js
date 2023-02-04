var request = gapi.client.request({
  path: "/v4/reports:batchGet",
  method: "POST",
  body: {
    reportRequests: [
      {
        viewId: "YOUR_VIEW_ID",
        dateRanges: [
          {
            startDate: "2022-01-01",
            endDate: "2022-01-31",
          },
        ],
        metrics: [
          {
            expression: "ga:pageviews",
          },
        ],
      },
    ],
  },
});

request.execute(function (response) {
  console.log(response);
});
