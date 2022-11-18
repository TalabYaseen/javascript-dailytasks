// localStorage.clear()
document.getElementById("submit").onclick = function(){
    localStorage.setItem("email" , document.getElementById("email").value)
    localStorage.setItem("password" , document.getElementById("password").value)
    event.preventDefault()
    // window.location.href="./log_in.html";
}
    document.getElementById("Go_Log_in").onclick = function(){
        event.preventDefault()
        window.location.href="./log_in.html";}
    

    
    // bottum = document.getElementById("submit");
    // if (check_data() == "red") {
    //     // mm = Math.random()*100;
    //     if (bottum.style.margin == '' || bottum.style.margin == '1em '+300+'px') {
    //         bottum.style.margin='1em '+20+'px';
    //     }else if ( bottum.style.margin='1em '+20+'px') {
    //         bottum.style.margin='1em '+300+'px';
    //         i++
    //     }
                
    // } else if (check_data() == "green"){
        
    // }

// expermantal_data = [{user:"talab",
// email : "talab@gmail.com" ,
// password : "10"}]
// function check_data() {
//     unchecked_data_user = document.getElementById("user");
//     unchecked_data_email = document.getElementById("email");
//     unchecked_data_password  = document.getElementById("password");
//     unchecked_data_array = [unchecked_data_user.value,unchecked_data_email.value,unchecked_data_password.value]
//     console.log(unchecked_data_array)
//     bottum = document.getElementById("submit");
//     for (i=0;i<expermantal_data.length;i++){
//         if ((unchecked_data_array[0] == expermantal_data[i].user) && (unchecked_data_array[1] == expermantal_data[i].email) && (unchecked_data_array[2] == expermantal_data[i].password)){
//             return bottum.style.backgroundColor = "green";
//         }
//         else if (i==expermantal_data.length-1) 
//             return bottum.style.backgroundColor = "red";
//         }
        

//         }
     

    



