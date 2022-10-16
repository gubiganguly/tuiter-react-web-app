const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="wd-profile" src=${who.avatarIcon}>
                </div>
                <div class="col-6 col-lg-7 pe-0">
                    <span class="wd-main_text">${who.userName} <i class="fa-solid fa-circle-check"></i></span>
                    </br>
                    <span class="wd-supporting_text">${who.handle}</span>
                </div>
                <div class="col-4 col-lg-3 align-self-center">
                    <button class="btn-primary wd-follow_button border-0 rounded-pill ps-2 pe-2">Follow</button>
                </div>
            </div>
        </li>
    `);
   }
   export default WhoToFollowListItem;