const bpmSlider = document.getElementById("bpmSlider");
const bpmValue = document.getElementById("bpmValue");

const state = {
  bpm: 170,
  tracks: {
    drums: { muted: false, locked: false },
    bass: { muted: false, locked: false },
    pads: { muted: false, locked: false },
    lead: { muted: false, locked: false },
    fx: { muted: false, locked: false }
  }
};

bpmSlider.addEventListener("input", () => {
  state.bpm = Number(bpmSlider.value);
  bpmValue.textContent = state.bpm;
});

document.querySelectorAll(".track").forEach(trackEl => {
  const track = trackEl.dataset.track;
  const muteBtn = trackEl.querySelector(".mute");
  const lockBtn = trackEl.querySelector(".lock");

  muteBtn.addEventListener("click", () => {
    state.tracks[track].muted = !state.tracks[track].muted;
    muteBtn.classList.toggle("muted", state.tracks[track].muted);
  });

  lockBtn.addEventListener("click", () => {
    state.tracks[track].locked = !state.tracks[track].locked;
    lockBtn.classList.toggle("locked", state.tracks[track].locked);
  });
});

document.getElementById("generateBtn").addEventListener("click", () => {
  console.log("Generate unlocked tracks", state);
});

document.getElementById("randomBtn").addEventListener("click", () => {
  console.log("Randomize unlocked tracks", state);
});

document.getElementById("playBtn").addEventListener("click", () => {
  console.log("Play");
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  console.log("Pause");
});

document.getElementById("stopBtn").addEventListener("click", () => {
  console.log("Stop");
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const exportedTracks = Object.entries(state.tracks)
    .filter(([_, data]) => !data.muted)
    .map(([name]) => name);

  console.log("Export MIDI tracks:", exportedTracks);
});
