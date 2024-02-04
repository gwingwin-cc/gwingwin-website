var appData = {
    lang: 'english',
}

const translations = {
    "english": {
        "greeting1": "If you want to be like a duck that can't swim like a fish or walk like a chicken, then join us to become a penguin 🐧",
        "greeting2": "However, even after becoming a penguin, you still won't be able to walk properly 🤣 🤣 🤣.",
        "gwingwin_info_01": "developers aim to deliver software projects and",
        "gwingwin_info_02": "community",
        "gwingwin_info_03": "support for sharing knowledge.",
        "content1": "We aim to be an organization that supports developers and provides the best, friendly community for sharing knowledge.",
        "content2": "Now, our Discord is available for joining. 👍",
        "content3": "Click here to join our Discord."
    },
    "thai": {
        "greeting1": "ถ้าเป็นเป็ดที่ไม่เก่งสักทางมาเป็น Gwin 🐧 กับเราไหม",
        "greeting2": "เปลี่ยนแต่ชื่อไม่เก่งเหมือนเดิม 🤣 🤣 🤣",
        "gwingwin_info_01": "งานพัฒนาระบบ Software, IT Consult และ",
        "gwingwin_info_02": "เป็นแหล่งคอมมูนิตี้",
        "gwingwin_info_03": "สำหรับการแบ่งปันประสบการณ์ ความรู้ ด้าน Technology ต่างๆ",
        "content1": "เรา `จะเป็น` องกรณ์ที่มุ่งเน้นเพื่อช่วยเหลือ ส่งเสริมด้าน Dev และ Technology และเป็น Community เพื่อส่งเสริมและแชร์การเรียนรู้",
        "content2": "ตอนนี้เริ่มต้นที่มี Discord แล้ว 👍",
        "content3": "มา join space ใน Discord กันนะครับ"
    }
};

function translate(lang, key) {
    console.log(translations[lang][key])
    return translations[lang][key];
}