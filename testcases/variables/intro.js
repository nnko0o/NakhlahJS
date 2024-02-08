// check if code contain any var declaration
const regex = /var\s+(\w+)\s*(?:=.*)?\s*;\s*/;
if (!regex.test(code)) {
    isPass = false;
    msg = "لم يتم إنشاء متغير وتعيين قيمة له";
} else {
    const matches = code.match(regex);
    const varName = matches[1];
    if (code.includes(varName + " = ")) {
        isPass = true;
        msg = "اجابة صحيحة";
    } else {
        isPass = false;
        msg = "لم يتم إنشاء متغير وتعيين قيمة له";
    }
} 
