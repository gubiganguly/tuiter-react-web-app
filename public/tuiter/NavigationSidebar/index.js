const NavigationSidebar = () => {
    return (`
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="#"><i class="fa-brands fa-twitter"></i></a>
        <a class="list-group-item list-group-item-action" href="#"><i class="fa-sharp fa-solid fa-house"></i> <span class="d-none d-xl-inline">Home</span></a>
        <a class="list-group-item list-group-item-action active" href="#"><i class="fa-solid fa-hashtag"></i> <span class="d-none d-xl-inline">Explore</span></a>
        <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-bell"></i> <span class="d-none d-xl-inline">Notifications</span></a>
        <a class="list-group-item list-group-item-action" href="#"><i class="fa-sharp fa-solid fa-envelope"></i> <span class="d-none d-xl-inline">Messages</span></a>
        <a class="list-group-item list-group-item-action" href="#"><i class="fa-sharp fa-solid fa-bookmark"></i> <span class="d-none d-xl-inline">Bookmarks</span></a>
        <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-list"></i> <span class="d-none d-xl-inline">Lists</span></a>
        <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-user"></i> <span class="d-none d-xl-inline">Profile</span></a>
        <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-circle"></i> <span class="d-none d-xl-inline">More</span></a>
    </div>
    <button class="btn btn-primary rounded-pill mt-2 w-100">Tweet</button>
    `);
}
export default NavigationSidebar; 