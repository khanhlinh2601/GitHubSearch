class UI{
    render(profile, repos){
        const _main = document.querySelector("main");
        if (_main) {
            _main.remove();
        }
        const main = document.createElement("main");
        main.className = "mb-3"
        const cards = repos.reduce((total, current) =>{
            return (total += `     
            <div class=" mb-3 card p-2">
                <a href="${current.html_url}" class="mb-3 fs-4">${current.name}</a>
                <p class="mb-3">${current.description}</p>

                <div class="mb-3">
                    <span class="badge bg-primary">Language: ${current.language}</span>
                    <span class="badge bg-info">Star: ${current.stargazers_count}</span>
                    <span class="badge bg-success">Fork: ${current.forks_count}</span>
                </div>
            </div>
            `)
        },'')
        main.innerHTML =`
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <!-- avatar user -->
                    <figure>
                        <img src="${profile.avatar_url}" style="width: 150px; height: 150px; object-fit: cover;">
                    </figure>
                    <h1 class="fs-1">${profile.name}</h1>
                    <p>${profile.company}</p>
                    <a href="${profile.html_url}" target="__blank" class="btn btn-primary">View Profile</a>
                    <!-- Following/Repos/Follower -->
                    <div class="mb-3">
                        <span class="badge bg-primary">Following: ${profile.following}</span>
                        <span class="badge bg-info">Repos: ${profile.public_repos}</span>
                        <span class="badge bg-success">Follower: ${profile.followers}</span>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">Website <a href="${profile.blog}" target="__blank"></a></li>
                        <li class="list-group-item">Location: ${profile.location}</li>
                        <li class="list-group-item">CreateAt: ${profile.created_at} </li>
                        <li class="list-group-item">Twitter: ${profile.twitter_username} </li>
                    </ul>
                </div>
                <div class="col-sm-8">
                    <h2>Reponsitories</h2>
                    ${cards}
                </div>
            </div>
        </div>
        `
        document.body.insertBefore(main, document.querySelector("footer"))
    }
    alert(msg, type = "success"){
        const newAlert = document.createElement("div")
        newAlert.className = `alert alert-${type}`
        newAlert.innerHTML = msg;
        document.querySelector("#notification").appendChild(newAlert)
        setTimeout(() =>{
            newAlert.remove()
        },2000)
    }
}