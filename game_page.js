player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player_one_name").innerHTML=player1_name+":";
document.getElementById("player_two_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_ques").innerHTML="Question Turn :"+player1_name;
document.getElementById("player_ans").innerHTML="Answer Turn :"+player2_name;

function send()
{
    get_word=document.getElementById("word_input").value;
    word=get_word.toLowerCase();

    char1=word.charAt(1);
    lenght_word=Math.floor(word.length/2);

    char2=word.charAt(lenght_word);
    lenght_minus=word.length-1;
    char3=word.charAt(lenght_minus);

    rem=word.replace(char1,"_");
    rem2=rem.replace(char2,"_");
    rem3=rem2.replace(char3,"_");

    question_word = "<h4 id='word_display'> Q. "+rem3+"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
     document.getElementById("output").innerHTML = row;
     document.getElementById("word_input").value = "";
}

que_turn="player_1";
ans_turn="player_2";

function check()
{
  word_ans=document.getElementById("word_input").value;
  lower_word=word.toLowerCase();
  console.log("Word in lower case"+lower_word);

  if(lower_word == word)
  {
   if(ans_turn== "player1")
   {
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;
   }
   else
   {
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
   }
  }
  if(que_turn== "player1")
   {
    que_turn="player2";
    document.getElementById("player_ques").innerHTML="question turn-"+player2_name;
   }
   else
   {
    que_turn="player1";
    document.getElementById("player_ques").innerHTML="question turn-"+player1_name;
   }
   if(ans_turn== "player1")
   {
    ans_turn="player2";
    document.getElementById("player_ans").innerHTML="answer turn-"+player2_name;
   }
   else
   {
    ans_turn="player1";
    document.getElementById("player_ans").innerHTML="answer turn-"+player1_name;
   }

   document.getElementById("word_input")
}