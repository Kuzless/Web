function showDiv() {
    if (document.getElementById('block1').style.display == "none") {
        document.getElementById('block1').style.display = "block";
        document.getElementById('block2').style.display = "none";
        document.getElementById('block3').style.display = "block";
        document.getElementById('block4').style.display = "none";
    } else {
        document.getElementById('block1').style.display = "none";
        document.getElementById('block2').style.display = "block";
        document.getElementById('block3').style.display = "none";
        document.getElementById('block4').style.display = "block";
    }
    return false;
 }