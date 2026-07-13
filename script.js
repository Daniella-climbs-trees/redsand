/* RedSand — contact form handler
   Submits to Formspree via fetch so visitors stay on the page. */

(function () {
  var FORMSPREE_ENDPOINT = "https://formspree.io/f/xgojjaln";

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  var button = document.getElementById("form-submit");

  if (!form) return;

  function show(msg, ok) {
    status.textContent = msg;
    status.className = "form-status mono " + (ok ? "ok" : "error");
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    button.disabled = true;
    button.textContent = "SENDING…";

    try {
      var res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        show("Transmission received. We\u2019ll be in touch shortly.", true);
        button.textContent = "SENT";
      } else {
        show("Something went wrong. Please try again in a moment.", false);
        button.disabled = false;
        button.textContent = "SEND TRANSMISSION";
      }
    } catch (err) {
      show("Something went wrong. Check your connection and try again.", false);
      button.disabled = false;
      button.textContent = "SEND TRANSMISSION";
    }
  });
})();
