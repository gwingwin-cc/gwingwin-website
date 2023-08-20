document.addEventListener('DOMContentLoaded', function() {
    const languageDropdown = document.getElementById('languageDropdown');
    const translations = {
        "english": {
            "greeting1": "If you want to be like a duck that can't swim like a fish or walk like a chicken, then join us to become a penguin 🐧",
            "greeting2": "However, even after becoming a penguin, you still won't be able to walk properly 🤣 🤣 🤣.",
            "content1": "We aim to be an organization that supports developers and provides the best, friendly community for sharing knowledge.",
            "content2": "Now, our Discord is available for joining. 👍",
            "content3": "Click here to join our Discord."
        },
        "thai": {
            "greeting1": "ถ้าเป็นเป็ดที่ไม่เก่งสักทางมาเป็น Gwin 🐧 กับเราไหม",
            "greeting2": "เปลี่ยนแต่ชื่อไม่เก่งเหมือนเดิม 🤣 🤣 🤣",
            "content1": "เรา `จะเป็น` องกรณ์ที่มุ่งเน้นเพื่อช่วยเหลือ ส่งเสริมด้าน Dev และ Technology และเป็น Community เพื่อส่งเสริมและแชร์การเรียนรู้",
            "content2": "ตอนนี้เริ่มต้นที่มี Discord แล้ว 👍",
            "content3": "มา join space ใน Discord กันนะครับ"
        }
    };

    languageDropdown.addEventListener('change', function() {
        const selectedLanguage = languageDropdown.value;

        if (translations[selectedLanguage]) {
            const { greeting1, greeting2, content1, content2, content3 } = translations[selectedLanguage];
            document.getElementById("greeting1").innerHTML = greeting1
            document.getElementById("greeting2").innerHTML = greeting2
            document.getElementById("content1").innerHTML = content1
            document.getElementById("content2").innerHTML = content2
            document.getElementById("content3").innerHTML = content3
        } 
    });
});