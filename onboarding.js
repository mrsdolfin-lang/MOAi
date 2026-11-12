/* First-run onboarding. Loaded after app.js and extends it:
   - the first API key you add is selected automatically (no extra "Use this provider" tap)
   - demo mode explains how to connect a real model */
(function () {
  const addKey0 = addKey;
  addKey = function () {
    const p = prov(sel);
    const had = cfg(p.id).keys.length;
    addKey0();
    if (sel !== "general" && p.type !== "demo" && cfg(p.id).keys.length > had && st.active === "demo") {
      st.active = p.id; saveSt(); chip(); plist(); pdet();
      toast("Using " + p.name + ". You can start chatting.");
    }
  };

  demoReply = async function* () {
    const r = "This is a demo reply, so no AI model is connected yet.\n\n**To chat with a real model:**\n\n1. Open **Settings** (the sliders icon)\n2. Pick a provider and paste your API key\n3. Start chatting. The first key you add is selected for you\n\nYour keys stay on this device.";
    await sleep(500);
    for (const c of r.match(/\S+\s*|\s+/g)) { await sleep(14); yield c; }
  };

  function banner() {
    const e = $(".empty");
    if (!e || st.active !== "demo" || $(".ob", e)) return;
    e.insertAdjacentHTML("afterbegin", '<div class="ob" style="border:1px solid var(--line);background:var(--panel);border-radius:12px;padding:12px 14px;margin-bottom:22px;display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap"><span style="font-size:14px">Demo mode: replies are samples. Add an API key to chat with a real model.</span><button class="bt pri" data-open="1">Add API key</button></div>');
  }
  const render0 = render;
  render = function () { render0(); banner(); };
  col.addEventListener("click", (e) => { if (e.target.closest("[data-open]")) openSet("openai", false); });
  render();
})();
