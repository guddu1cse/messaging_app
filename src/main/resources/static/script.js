var stompClint = null;

function connect(){
      let socket = new SockJS("/server1");
      stompClint = Stomp.over(socket);
      stompClint.connect({} , function(frame){
        console.log("connected... " + frame);

        $("#name-form").addClass('d-none');
        $("#chat-room").removeClass('d-none');

        //subscribe
        stompClint.subscribe("/topic/return-to" , function(response){
        showMessage(JSON.parse(response.body));

        });

      })

}

    function showMessage(message){

      $("#message-container-table").prepend(`<tr><td><b>${message.name} :</b>${message.content}</td></tr>`);
    }

    function sendMessage(){
        let jsonOb ={
        name:localStorage.getItem("name"),
        content:$("#message-value").val()
        }

        stompClint.send("/app/message",{},JSON.stringify(jsonOb));

    }

    $(document).ready((e)=>{

    $("#login").click(()=>{

        let name = $("#name-value").val();
        localStorage.setItem("name" , name);
        connect();
    })

    $("#send").click(()=>{
       sendMessage();

    })

    })