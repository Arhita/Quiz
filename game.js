function add_user()
{
 player1_name=document.getElementById("player1_input_name").value;
 player2_name=document.getElementById("player2_input_name").value;

 localStorage.setItem("player_one_name",player1_name);
 localStorage.setItem("player_two_name",player2_name);

 window.location="game_page.html";
}
