 const usersDB =[
    {
    id:  1, 
    name: "mathias",
    time: "12:45pm",
    comment:"heelo frindr ,just arrive from london ",
    },

    {
        id:  2, 
        name: "papajasco",
        time: "12:20pm",
        comment:"helo im ggod ",
        },
    {
        id:  3, 
        name: "isah",
        time: "12:19pm",
        comment:" ",
        },
    {
        id:  4, 
        name: "lalan",
        time: "12:15pm",
        comment:"helo im ggod ",
        },
    {
        id:  5, 
        name: "obasanjo",
        time: "12:40pm",
        comment:"helo im ggod ",
        },
    {
        id:  6, 
        name: "buhari",
        time: "12:40pm",
        comment:"our dear president ",
        },
    {
        id:  7, 
        name: "atiku",
        time: "12:40pm",
        comment:"the legend ",
        },
    {
        id:  8, 
        name: "kwankwaso",
        time: "12:40pm",
        comment:"our upcoming president ",
        },
    {
        id:  9, 
        name: "kabara",
        time: "12:40pm",
        comment:"helo im ggod ",
        },
];
    const displyFeed = document.getElementById("displayFeed");

    let html = "";

    usersDB.map((user,index,array) => {
        html = 
        html + ` 
        <div class="my-timeline-feed-grp">
        <div class="my-timeline-feed-grp-col-1">
            <img src="./bluesky.JPG" alt="" >
        </div>
        <div class="my-timeline-feed-grp-col-2">
        <div class="my-timeline-feed-grp-col-2-row-1">
            ${user.name}
        </div>
        <div class="my-timeline-feed-grp-col-2-row-2">
            ${user.time}
        </div>
        <div class="my-timeline-feed-grp-col-2-row-3">
            ${user.comment}
        </div>

    </div>
</div>`;
    }
    );
    displyFeed.innerHTML = html;







