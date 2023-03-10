function posts() {

    class Post {
        constructor (title, content) {
            this.title = title;
            this.content = content;
        };
        toString () {
            
            let result = [`Post: ${this.title}`, `Content: ${this.content}`];
            return result.join('\n');
        };
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title,content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }
        addComment (comment) {
            this.comments.push(comment);
        };
        toString () {

            let result = [
                super.toString(),
                `Rating: ${this.likes - this.dislikes}`
            ];
            if (this.comments.length > 0) {
                result.push(`Comments:`);
                this.comments.forEach((comment) => result.push(` * ${comment}`));
            }

            return result.join('\n');
        };
    }

    class BlogPost extends Post {
        constructor (title, content, views) {
            super(title, content);
            this.views = Number(views);
        };
        view () {
            this.views++;
            return this;
        };
        toString () {
            let result = [
                super.toString(),
                `Views: ${this.views}`
            ];
            return result.join('\n');
        };
    }

    return{Post, SocialMediaPost, BlogPost}
}
