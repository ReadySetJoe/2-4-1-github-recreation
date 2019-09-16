$(document).ready(function() {
  // console.log(this);

  const BASE_URL = 'https://api.github.com/users';
  const USER = 'readysetjoe';

  const CLIENT_ID = 'caabff772900094727f9';
  const CLIENT_SECRET = '525233b30edeebe9c66c0e01295362f715285af3';

  let requestRepos = $.ajax({
    method: "GET",
    url: `${BASE_URL}/${USER}/repos`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }
  });

  let success = (resp) => {
    console.log(resp.data);
    let context = {repos: resp.data};
    let source = $('#repo-template').html();
    let template = Handlebars.compile(source);
    let repoListHtml = template(context);

    $('.repo-list').html(repoListHtml);  };


  let requestUser = $.ajax({
    method: "GET",
    url: `${BASE_URL}/${USER}`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }

  });

  requestRepos.done(success);


});
