var member1 = document.getElementById('member1');
var member2 = document.getElementById('member2');
var member3 = document.getElementById('member3');
var member4 = document.getElementById('member4');

function Hide() {
   member1.style = 'display: none';    
   member2.style = 'display: none';   
   member3.style = 'display: none';   
   member4.style = 'display: none';   
}

function Show() {
   member1.style = 'display: ';    
   member2.style = 'display: ';   
   member3.style = 'display: ';   
   member4.style = 'display: ';   
}

function functionAlertMember1(msg, myYes) {
   var confirmBox = $("#confirmMember1");
   confirmBox.find(".messageMember1").text(msg);
   confirmBox.find(".yesMember1").click(function() {
      confirmBox.hide();
      Show();
   });
   confirmBox.find(".yesMember1").click(myYes);
   confirmBox.show();
   Hide();
   member1.style = 'display: ';  
}

function functionAlertMember2(msg, myYes) {
   var confirmBox = $("#confirmMember2");
   confirmBox.find(".messageMember2").text(msg);
   confirmBox.find(".yesMember2").click(function() {
      confirmBox.hide();
      Show();
   });
   confirmBox.find(".yesMember2").click(myYes);
   confirmBox.show();
   Hide();
   member2.style = 'display: ';  
 }

 function functionAlertMember3(msg, myYes) {
   var confirmBox = $("#confirmMember3");
   confirmBox.find(".messageMember3").text(msg);
   confirmBox.find(".yesMember3").click(function() {
      confirmBox.hide();
      Show();
   });
   confirmBox.find(".yesMember3").click(myYes);
   confirmBox.show();
   Hide();
   member3.style = 'display: ';  
}
 
function functionAlertMember4(msg, myYes) {
   var confirmBox = $("#confirmMember4");
   confirmBox.find(".messageMember4").text(msg);
   confirmBox.find(".yesMember4").click(function() {
      confirmBox.hide();
      Show();
      
   });
   confirmBox.find(".yesMember4").click(myYes);
   confirmBox.show();
   Hide();
   member4.style = 'display: ;';
   
 }