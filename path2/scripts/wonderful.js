/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block id="26" type="math_random_int" inline="true" x="405" y="41"><value name="FROM"><block id="27" type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block id="28" type="math_number"><field name="NUM">100</field></block></value></block></xml>*#*#*/
function math_random_int(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


math_random_int(1, 100);
   							