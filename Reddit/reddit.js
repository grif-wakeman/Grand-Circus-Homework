(function () {

    const container = document.getElementById("posts");
    const searchBar = document.getElementById("search-bar");
    const searchBtn = document.getElementById("search-btn");







    async function getPosts() {

        const response = await fetch(`https://www.reddit.com/r/${searchBar.value}/.json`)
        const data = await response.json();

        let currPost, markup = ``
        const posts = data.data.children;

        for (let i = 1; i <= 10; i++) {
            currPost = posts[i].data;

            markup += `
                <a class="post" href="https://www.reddit.com/${currPost.permalink}">
                <div class="author"> Posted by ${currPost.author} </div>
                    <div class="title"> ${currPost.title} </div>
                    <img src=${currPost.url} class="image"></img>
                    
                   
                </a>
             `;

        }
        container.insertAdjacentHTML('afterbegin', markup);

    }

    function removePosts() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    searchBtn.addEventListener("click", (event) => {
        removePosts();
        getPosts();

    })




















})();



