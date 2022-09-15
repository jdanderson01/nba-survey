let validFlag = false;
let q1_valid = false;
let q2_valid = false;
let q3_valid = false;
let q4_valid = false;
let q5_valid = false;

function setupForm() {
  document.myform.addEventListener("submit", processForm, false);
  document.myform.first_name_name.addEventListener("focus", fnameFocus, false);
  document.myform.first_name_name.addEventListener("blur", fnameBlur, false);
  document.myform.last_name_name.addEventListener("focus", lnameFocus, false);
  document.myform.last_name_name.addEventListener("blur", lnameBlur, false);
  document.myform.mail_address.addEventListener("focus", enameFocus, false);
  document.myform.mail_address.addEventListener("blur", enameBlur, false);
  document.myform.phone_number.addEventListener("focus", pnameFocus, false);
  document.myform.phone_number.addEventListener("blur", pnameBlur, false);
  document.myform.student_address.addEventListener("focus", snameFocus, false);
  document.myform.student_address.addEventListener("blur", snameBlur, false);
}

function fnameFocus() {
  let q1 = document.getElementById("q1");
  let span = q1.getElementsByTagName("span");
  span[0].firstChild.nodeValue = "Please enter your first name!";
}

function fnameBlur() {
  let myRegEx = /^[a-zA-Z]+$/; /* regular expression to make sure user puts in letters*/
  let fname = document.myform.first_name_name.value;
  let q1 = document.getElementById("q1");
  let span = q1.getElementsByTagName("span");
  let imgDiv = document.getElementById("imgDiv");
  while (imgDiv.hasChildNodes()) {
    imgDiv.removeChild(imgDiv.lastChild);
  }
  if (fname.match(myRegEx) != null) {
    console.log("Valid!");
    /* creates check mark once the input matches the regular expression */
    let img = document.createElement("img");
    img.src = "img/green_check.png";
    let imgDiv = document.getElementById("imgDiv");
    imgDiv.appendChild(img);
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("Success!"));
      q1_valid = true;
    } else {
      span[0].firstChild.nodeValue = "Success!";
      q1_valid = true;
    }
  } else {
    console.log("Not valid!");
    /* creates the X mark if the user input value doesn't match the regular expression */
    let img_error = document.createElement("img");
    img_error.src = "img/x_mark.png";
    let imgDiv = document.getElementById("imgDiv");
    imgDiv.appendChild(img_error);
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("Error!"));
      q1_valid = false;
    } else {
      span[0].firstChild.nodeValue = "Error!";
      q1_valid = false;
    }
  }
}

function lnameFocus() {
  let q2 = document.getElementById("q2");
  let span = q2.getElementsByTagName("span");
  span[0].firstChild.nodeValue = "Please enter your last name!";
}

function lnameBlur() {
  let myRegEx = /^[a-zA-Z]+$/; /* regular expression to make sure user puts in letters*/
  let lname = document.myform.last_name_name.value;
  let q2 = document.getElementById("q2");
  let span = q2.getElementsByTagName("span");
  let imgDiv_two = document.getElementById("imgDiv_two");
  while (imgDiv_two.hasChildNodes()) {
    imgDiv_two.removeChild(imgDiv_two.lastChild);
  }
  if (lname.match(myRegEx) != null) {
    console.log("Valid!");
    /* creates check mark once the input matches the regular expression */
    let imgTwo = document.createElement("img");
    imgTwo.src = "img/green_check.png";
    let imgDiv_two = document.getElementById("imgDiv_two");
    imgDiv_two.appendChild(imgTwo);
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("Success!"));
      q1_valid = true;
    } else {
      span[0].firstChild.nodeValue = "Success!";
      q1_valid = true;
    }
    validFlag = true;
  } else {
    console.log("Not valid!");
    /* creates the X mark if the user input value doesn't match the regular expression */
    let imgTwo_error = document.createElement("img");
    imgTwo_error.src = "img/x_mark.png";
    let imgDiv_two = document.getElementById("imgDiv_two");
    imgDiv_two.appendChild(imgTwo_error);
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("Error!"));
      q1_valid = false;
    } else {
      span[0].firstChild.nodeValue = "Error!";
      q1_valid = false;
    }
    validFlag = false;
  }
}

function enameFocus() {
  let q3 = document.getElementById("q3");
  let span = q3.getElementsByTagName("span");
  span[0].firstChild.nodeValue = "Please enter your email!";
}

function enameBlur() {
  let secondRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; /* regular expression to match email */
  let ename = document.myform.mail_address.value;
  let q3 = document.getElementById("q3");
  let span = q3.getElementsByTagName("span");
  let imgDiv_three = document.getElementById("imgDiv_three");
  while (imgDiv_three.hasChildNodes()) {
    imgDiv_three.removeChild(imgDiv_three.lastChild);
  }
  if (ename.match(secondRegEx) != null) {
    /* creates check mark once the input matches the regular expression */
    let imgThree = document.createElement("img");
    imgThree.src = "img/green_check.png";
    let imgDiv_three = document.getElementById("imgDiv_three");
    imgDiv_three.appendChild(imgThree);
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("Success!"));
      q3_valid = true;
    } else {
      span[0].firstChild.nodeValue = "Success!";
      q3_valid = true;
    }
  } else {
    console.log("Not Valid!");
    /* creates the X mark if the user input value doesn't match the regular expression */
    let imgThree_error = document.createElement("img");
    imgThree_error.src = "img/x_mark.png";
    let imgDiv_three = document.getElementById("imgDiv_three");
    imgDiv_three.appendChild(imgThree_error);
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("Error!"));
      q3_valid = false;
    } else {
      span[0].firstChild.nodeValue = "Error!";
      q3_valid = false;
    }
  }
}

function pnameFocus() {
  let q4 = document.getElementById("q4");
  let span = q4.getElementsByTagName("span");
  span[0].firstChild.nodeValue = "Please enter your phone number!";
}

function pnameBlur() {
  let thirdRegEx = /^\d{3}-\d{3}-\d{4}$/; /* regular expression to match phone number */
  let pname = document.myform.phone_number.value;
  let q4 = document.getElementById("q4");
  let span = q4.getElementsByTagName("span");
  let imgDiv_four = document.getElementById("imgDiv_four");
  while (imgDiv_four.hasChildNodes()) {
    imgDiv_four.removeChild(imgDiv_four.lastChild);
  }
  if (pname.match(thirdRegEx) != null) {
    console.log("Valid!");
    /* creates check mark once the input matches the regular expression */
    let imgFour = document.createElement("img");
    imgFour.src = "img/green_check.png";
    imgDiv_four.appendChild(imgFour);
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("Success!"));
      q4_valid = true;
    } else {
      span[0].firstChild.nodeValue = "Success!";
      q4_valid = true;
    }
    validFlag = true;
  } else {
    console.log("Not valid!");
    /* creates the X mark if the user input value doesn't match the regular expression */
    let imgFour_error = document.createElement("img");
    imgFour_error.src = "img/x_mark.png";
    let imgDiv_four = document.getElementById("imgDiv_four");
    imgDiv_four.appendChild(imgFour_error);
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("Error!"));
      q4_valid = false;
    } else {
      span[0].firstChild.nodeValue = "Error!";
      q4_valid = false;
    }
    validFlag = false;
  }
}

function snameFocus() {
  let q5 = document.getElementById("q5");
  let span = q5.getElementsByTagName("span");
  span[0].firstChild.nodeValue = "Please enter your student address!";
}

function snameBlur() {
  let fourthRegEx = /^https:\/\/[a-z]+\.[a-z]+.[a-z]+.[a-z]+\/~[0-9a-z]+\/$/; /* regular expression to match student address */
  let sname = document.myform.student_address.value;
  let q5 = document.getElementById("q5");
  let span = q5.getElementsByTagName("span");
  let imgDiv_five = document.getElementById("imgDiv_five");
  while (imgDiv_five.hasChildNodes()) {
    imgDiv_five.removeChild(imgDiv_five.lastChild);
  }

  if (sname.match(fourthRegEx) != null) {
    /* creates check mark once the input matches the regular expression */
    let imgFive = document.createElement("img");
    imgFive.src = "img/green_check.png";
    let imgDiv_five = document.getElementById("imgDiv_five");
    imgDiv_five.appendChild(imgFive);
    if (span[0].firstChild.nodeValue == null) {
      span[0].appendChild(document.createTextNode("Success!"));
      console.log("Valid!");
      validFlag = true;
    } else {
      span[0].firstChild.nodeValue = "Success!";
      q5_valid = true;
    }
  } else {
    /* creates the X mark if the user input value doesn't match the regular expression */
    let imgFive_error = document.createElement("img");
    imgFive_error.src = "img/x_mark.png";
    let imgDiv_five = document.getElementById("imgDiv_five");
    imgDiv_five.appendChild(imgFive_error);
    span[0].firstChild.nodeValue = "Error!";
    q5_valid = false;
  }
}

function processForm(event) {
  event.preventDefault();
  if (validFlag == false) {
    console.log("Something is invalid!");
  } else {
    console.log(
      "First name is: " +
      document.myform.elements["first_name_name"].value +
      " and last name is: " +
      document.myform.elements["last_name_name"].value
    );

    let footerDiv = document.getElementById("footerDiv");
    let footerText = document.createTextNode(
      "Created by:" +
      document.myform.elements["first_name_name"].value +
      document.myform.elements["last_name_name"].value
    );
    while (footerDiv.hasChildNodes()) {
      footerDiv.removeChild(footerDiv.lastChild);
    } //stops footer text from repeating on submit
    footerDiv.appendChild(footerText);
    let radio_buttons = document.myform.elements["ability"];
    for (let x = 0; x < radio_buttons.length; x++) {
      if (radio_buttons[x].checked) {
        console.log(
          radio_buttons[x].value +
          " button is checked and the value is " +
          radio_buttons[x].value
        );
      } else {
        console.log(radio_buttons[x].value + " button is not checked");
      }
    }
    let radio_buttons_two = document.myform.elements["trait"];
    for (let x = 0; x < radio_buttons.length; x++)
      if (radio_buttons_two[x].checked) {
        console.log(
          radio_buttons_two[x].value +
          " button is checked and the value is " +
          radio_buttons_two[x].value
        );
        if (radio_buttons[0].checked && radio_buttons_two[0].checked) {
          while (last_image.hasChildNodes()) {
            last_image.removeChild(last_image.lastChild);
          } //stops images from repeating
          console.log("You got Kobe Bryant");
          let img_kobe = document.createElement("img");
          img_kobe.src = "img/kobe_bryant.jpg";
          let imgDiv_kobe = document.getElementById("last_image");
          imgDiv_kobe.appendChild(img_kobe);
          let kobeText = document.createTextNode("You got Kobe Bryant!");
          imgDiv_kobe.appendChild(kobeText);
        } else if (radio_buttons[0].checked && radio_buttons_two[1].checked) {
          while (last_image.hasChildNodes()) {
            last_image.removeChild(last_image.lastChild);
          }
          console.log("You got Kareem Abdul-Jabbar");
          let img_kareem = document.createElement("img");
          img_kareem.src = "img/kareem_jabbar.jpg";
          let imgDiv_kareem = document.getElementById("last_image");
          imgDiv_kareem.appendChild(img_kareem);
          let kareemText = document.createTextNode(
            "You got Kareem Abdul-Jabbar!"
          );
          imgDiv_kareem.appendChild(kareemText);
        } else if (radio_buttons[1].checked && radio_buttons_two[1].checked) {
          while (last_image.hasChildNodes()) {
            last_image.removeChild(last_image.lastChild);
          }
          console.log("You got Tim Duncan");
          let img_duncan = document.createElement("img");
          img_duncan.src = "img/tim_duncan.jpg";
          let imgDiv_duncan = document.getElementById("last_image");
          imgDiv_duncan.appendChild(img_duncan);
          let duncanText = document.createTextNode("You got Tim Duncan!");
          imgDiv_duncan.appendChild(duncanText);
        } else if (radio_buttons[1].checked && radio_buttons_two[0].checked) {
          while (last_image.hasChildNodes()) {
            last_image.removeChild(last_image.lastChild);
          }
          console.log("You got Hakem Olajuwon");
          let img_hakeem = document.createElement("img");
          img_hakeem.src = "img/hakeem_olajuwon.jpg";
          let imgDiv_hakeem = document.getElementById("last_image");
          imgDiv_hakeem.appendChild(img_hakeem);
          let hakeemText = document.createTextNode("You got Hakeem Olajuwon!");
          imgDiv_hakeem.appendChild(hakeemText);
        }
      }
    return false;
  }
}
window.addEventListener("load", setupForm, false);