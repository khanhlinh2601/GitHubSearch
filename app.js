//main
//project thao tác với API github
//client id 09a9b915d5aafe57818c
//client secrets 
document.querySelector('#form-search').addEventListener('submit', async event => {
    event.preventDefault();
    let ui = new UI();
    try{
        const userName=document.querySelector('#username').value;
        const {profile, repos} = await new API().getInfor(userName);
        ui.render(profile, repos);
        ui.alert("Tìm thành công")
    } catch (error) {
        ui.alert("Không có người dùng này")
    }

})