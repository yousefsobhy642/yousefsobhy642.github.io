(function(){
  var C = CONFIG;
  var nm = C.name || "Your Name";
  document.getElementById("name").textContent = nm;
  document.getElementById("fname").textContent = nm;
  document.getElementById("yr").textContent = new Date().getFullYear();
  document.title = nm + " | Data Analyst";
  function btn(label, href, primary, ext){
    var a = document.createElement("a");
    a.className = "btn" + (primary ? " primary" : "");
    a.textContent = label; a.href = href;
    if (ext) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }
  function fill(el, items){ items.forEach(function(i){ if (i[1]) el.appendChild(btn(i[0], i[1], i[3], i[2])); }); }
  var mail = C.email ? "mailto:" + C.email : "";
  var tel = C.phone ? "tel:" + C.phone.replace(/\s+/g,"") : "";
  var wa = C.phone ? "https://wa.me/" + C.phone.replace(/[^\d]/g,"") : "";
  fill(document.getElementById("heroLinks"), [
    ["Email me", mail, false, true], ["GitHub", C.github, true], ["LinkedIn", C.linkedin, true], ["Download CV", C.cv, true]
  ]);
  fill(document.getElementById("contactLinks"), [
    ["Email", mail, false, true], ["WhatsApp", wa, true], ["Call", tel, false, true],
    ["Hire me on Khamsat", C.khamsat, true], ["Mostaql", C.mostaql, true], ["Nafezly", C.nafezly, true],
    ["LinkedIn", C.linkedin, true], ["GitHub", C.github, true]
  ]);
  document.querySelectorAll(".proj").forEach(function(card){
    var d = C.projects[card.dataset.p] || {};
    if (d.cover) { var s = card.querySelector(".shot"); var ci = new Image(); ci.alt = ""; ci.onload = function(){ s.innerHTML = ""; s.appendChild(ci); }; ci.src = d.cover; }
    var code = d.code === "github" ? C.github : d.code;
    fill(card.querySelector(".links"), [["View project", d.live, true, true], ["Source code", code, true]]);
  });
})();