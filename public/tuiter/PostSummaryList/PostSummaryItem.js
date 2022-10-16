const PostSummaryItem = (post) => {
    
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-md-10 col-sm-9 pe-4">
                <span class="wd-supporting_text">${post.topic}</span>
                </br>
                <span class="wd-main_text">${post.userName} <i class="fa-solid fa-circle-check"></i></span>
                <span class="wd-supporting_text"> - ${post.time}</span>
                </br>
                <span class="wd-main_text d-inline">${post.title}</span>
                <p id="tweet_count" class="wd-supporting_text">${post.tweets} Tweets</p>
                <script>
                    const tweets = $('#tweet_count');
                    tweets.hide();
                </script>
               
            </div>
            <div class="col-md-2 col-sm-3">
                <img class="wd-clickbait" src=${post.image}>
            </div>
        </div>
    </li>
    `);
   }
   export default PostSummaryItem;