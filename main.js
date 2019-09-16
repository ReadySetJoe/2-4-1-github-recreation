$(document).ready(function() {
  // console.log(this);

  const BASE_URL = 'https://api.github.com/users';
  const USER = 'readysetjoe';

  const CLIENT_ID = 'caabff772900094727f9';
  const CLIENT_SECRET = '525233b30edeebe9c66c0e01295362f715285af3';

  let success = (resp) => {
    console.log(resp.data);
  };

  let requestRepos = $.ajax({
    method: "GET",
    url: `${BASE_URL}/${USER}/repos`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }
  });

  let requestUser = $.ajax({
    method: "GET",
    url: `${BASE_URL}/${USER}`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }
  });

  // request.done(success);

  let source = $('#repo-template').html();

  let template = Handlebars.compile(source);

  let context = requestRepos;
  let html = template(context);

});
