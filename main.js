$(document).ready(function() {

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

  let successRepos = (resp) => {
    let reposData = resp.data;

    console.log(reposData);

    reposData.sort(function(a,b){
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    reposData.map( x => x.updated_ago = moment(x.updated_at).fromNow());

    // reposData.map( x => x.relative_datetime_Mill = x.relative_datetime.getMilliseconds())
    // reposData.map( x => x.relative_datetime_Seco = x.relative_datetime.getSeconds())
    // reposData.map( x => x.relative_datetime_Minu = x.relative_datetime.getMinutes())
    // reposData.map( x => x.relative_datetime_Hour = x.relative_datetime.getHours())
    // reposData.map( x => x.relative_datetime_Days = x.relative_datetime.getDate())
    // reposData.map( x => x.relative_datetime_Mont = x.relative_datetime.getMonth())


    console.log(reposData);




    let context = {repos: resp.data};
    let source = $('#repo-template').html();
    let template = Handlebars.compile(source);
    let repoListHtml = template(context);

    $('.repo-list').html(repoListHtml);
  };


  let requestUser = $.ajax({
    method: "GET",
    url: `${BASE_URL}/${USER}`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }

  });

  requestRepos.done(successRepos);



});

var date_sort_desc = function (date1, date2) {
  // This is a comparison function that will result in dates being sorted in
  // DESCENDING order.
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
};
