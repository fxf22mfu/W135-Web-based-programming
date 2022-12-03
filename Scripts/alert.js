function functionAlertMember1(msg, myYes) {
    var confirmBox = $("#confirmMember1");
    confirmBox.find(".messageMember1").text(msg);
    confirmBox.find(".yesMember1").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find(".yesMember1").click(myYes);
    confirmBox.show();
 }

 function functionAlertMember2(msg, myYes) {
    var confirmBox = $("#confirmMember2");
    confirmBox.find(".messageMember2").text(msg);
    confirmBox.find(".yesMember2").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find(".yesMember2").click(myYes);
    confirmBox.show();
 }

 function functionAlertMember3(msg, myYes) {
    var confirmBox = $("#confirmMember3");
    confirmBox.find(".messageMember3").text(msg);
    confirmBox.find(".yesMember3").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find(".yesMember3").click(myYes);
    confirmBox.show();
 }
 
 function functionAlertMember4(msg, myYes) {
    var confirmBox = $("#confirmMember4");
    confirmBox.find(".messageMember4").text(msg);
    confirmBox.find(".yesMember4").unbind().click(function() {
       confirmBox.hide();
    });
    confirmBox.find(".yesMember4").click(myYes);
    confirmBox.show();
 }
