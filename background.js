const r = /her @/gm;

setInterval(() => {
    const section = document.getElementsByTagName('section')[1];
    const mainContainer = section.children[0];
    const postsContainer = mainContainer.children[1];

    try {
        const postList = postsContainer.children[0];

        const posts = postList.children;

        for (let i = 0; i < posts.length; ++i) {
            let post = posts[i];

            if (r.test(post.innerHTML)) {
                // vanish stupid whore
                post.remove();
                console.log('Stupid hoe vanished. Stay halal.');
            }
        }
    } catch (err) {
        //
    }
}, 1500);