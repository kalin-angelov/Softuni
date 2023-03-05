function getArticleGenerator(articles) {

    let div = document.getElementById("content");
    let article;
    return function showNext() {
        if (articles.length !== 0) {
            article = articles.shift();
            let newArticles = document.createElement("article");
            newArticles.textContent = article;
            div.appendChild(newArticles);
        }
    }
    // TODO
}
