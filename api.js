//class
//await fetch
class API{
    constructor(){
        this.client_id = "24217aa67078c713ca4b"
        this.client_secret = "aecebb136f0c3e21b018d7b16e8fdd587d5a1e27"
    }

    async getInfor(username){
        const [profile, repos] = await Promise.all([
            fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`).then(response => {
                if (!response.ok){
                    return response.message
                }else{
                    return response.json()
                }
            }),
            fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`).then(response => {
                if (!response.ok){
                    return response.message
                }else{
                    return response.json()
                }
            }),
        ])
        return {
            profile,
            repos
        }           
    } 
}
let http = new API();

// (async () => {
//   const {profile, repos} = await http.getInfor("LeHoDiep");
//   console.log({profile, repos})
//   let ui = new UI()
//   ui.render(profile,repos)
// })();