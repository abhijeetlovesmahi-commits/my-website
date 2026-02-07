function generate() {
  const name = document.getElementById("name").value;
  const cls = document.getElementById("class").value;
  const eng = +document.getElementById("eng").value || 0;
  const hin = +document.getElementById("hin").value || 0;
  const math = +document.getElementById("math").value || 0;

  const total = eng + hin + math;

  const result = `
    <h2>The International School</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Class:</b> ${cls}</p>
    <table border="1" width="100%">
      <tr><th>Subject</th><th>Marks</th></tr>
      <tr><td>English</td><td>${eng}</td></tr>
      <tr><td>Hindi</td><td>${hin}</td></tr>
      <tr><td>Maths</td><td>${math}</td></tr>
      <tr><th>Total</th><th>${total}</th></tr>
    </table>
  `;

  const div = document.createElement("div");
  div.innerHTML = result;

  html2pdf().from(div).save(`${name}_marksheet.pdf`);
}
