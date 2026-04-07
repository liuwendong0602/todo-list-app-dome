let inputEl = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

// 添加任务
addBtn.onclick = function() {
  let value = inputEl.value.trim();

  // 防止空输入
  if (value === "") return;

  let li = document.createElement("li");
  li.innerText = value;

  // 点击任务：切换完成 + 可删除
  li.onclick = function() {
    // 切换完成状态
    li.classList.toggle("done");

    // 确认删除
    if (confirm("确定删除吗？")) {
      li.remove();
    }
  };

  list.appendChild(li);

  // 清空输入框 + 聚焦
  inputEl.value = "";
  inputEl.focus();
};

// 按 Enter 添加任务
inputEl.onkeydown = function(e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
};