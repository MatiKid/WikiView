var Article = function(article) {
    this.title = article.title;
    this.snippet = article.snippet;
    this.url = makeArticleUrl(article.title);
};

function makeArticleUrl(title) {
    return 'https://en.wikipedia.org/wiki/' + title.replace(/ /, '_');
}