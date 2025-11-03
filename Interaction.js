let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");
let container = document.getElementById("container");
const params = new URLSearchParams(window.location.search);
let username = params.get("name");
// 限制用户名长度，避免页面样式崩坏
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

// 防止 `null` 变成 `"null"`
if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}

let clickCount = 0; // 记录点击 No 的次数

function changeText() {
  if (clickCount >= noTexts.length) {
    return "呜呜~ 我才不要呢，我就要娶洋洋，不管不管!!!!";
  }
  return noTexts[clickCount - 1];
}

// No 按钮的文字变化
const noTexts = [
  "？洋洋你认真的吗…",
  "洋洋要不再想想？",
  "洋洋我不许你选这个！ ",
  "不行，我喜欢你洋洋!!!!!!!!",
  "不行，我就要你洋洋!!!!!!!!",
];

// No 按钮点击事件
noButton.addEventListener("click", function () {
  clickCount++;

  // 让 Yes 变大，每次放大 2 倍
  let yesSize = 1 + clickCount * 1.2;
  yesButton.style.transform = `scale(${yesSize})`;

  // 挤压 No 按钮，每次右移 50px
  let noOffset = clickCount * 50;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // 让图片和文字往上移动
  let moveUp = clickCount * 25;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // No 文案变化（前 5 次变化）
  if (clickCount <= 5) {
    noButton.innerText = changeText();
  }

  // 图片变化（前 5 次变化）
  switch (clickCount) {
    case 1:
      mainImage.src = "./image/shocked.png"; // 震惊
      questionText.innerText = changeText();
      break;
    case 2:
      mainImage.src = "./image/think.png"; // 思考
      questionText.innerText = changeText();
      break;
    case 3:
      mainImage.src = "./image/angry.png"; // 生气
      questionText.innerText = changeText();
      break;
    default:
      mainImage.src = "./image/crying.png"; // 哭
      questionText.innerText = changeText();
      break;
  }

  if (clickCount >= 5) mainImage.src = "./image/crying.png"; // 之后一直是哭
});

// Yes 按钮点击后，进入表白成功页面

yesButton.addEventListener("click", function () {
    location.href = './location.html';
  // 确保用户名安全地插入
  // document.querySelector(".yes-text").innerText = loveTest;
});

  // 禁止滚动，保持页面美观
  document.body.style.overflow = "hidden";



