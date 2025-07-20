
document.querySelector(".btn-click").addEventListener("click", () => {
    alert("Thank you for purchasing the tool!");
});
const tools = JSON.parse(localStorage.getItem('tools') || '[]');
const container = document.getElementById('toolContainer');
tools.forEach(tool => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${tool.image}" alt="tool image" />
    <h3>${tool.title}</h3>
    <p>${tool.description}</p>
    <button class="btn-click" onclick="window.open('${tool.link}', '_blank')">Open</button>
  `;
  container.appendChild(card);
});