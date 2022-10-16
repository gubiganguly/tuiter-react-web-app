import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row d-inline">
                <i class="fa-solid fa-magnifying-glass wd-search-icon ms-2"></i>
                <input class="wd-search position-relative ps-5" type="text" placeholder="Search Tuiter">
                <a class="wd-gear" href="explore-settings.html"><i class="fa-sharp fa-solid fa-gear" style="font-size: 1.3em; float: right; color: rgb(29, 161, 242);"></i></a>
           </div>
           <ul class="nav mt-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-sm-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div class="wd-big_image position-relative mt-2">
                <img class="card-img-top" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
                <h1 class="position-absolute bottom-0 start-0 ms-2">SpaceX's Starship</h1>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
