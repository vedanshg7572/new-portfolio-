// Web Audio API Synthesizer for UI Sound Effects
class SoundEngine {
  constructor() {
    this.enabled = false
    this.audioCtx = null
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (AudioContext) {
        this.audioCtx = new AudioContext()
      }
    }
  }

  toggle() {
    this.enabled = !this.enabled
    if (this.enabled) {
      this.init()
      this.playChime()
    }
    return this.enabled
  }

  playHover() {
    if (!this.enabled || !this.audioCtx) return
    try {
      const osc = this.audioCtx.createOscillator()
      const gain = this.audioCtx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(440, this.audioCtx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.05)
      gain.gain.setValueAtTime(0.02, this.audioCtx.currentTime)
      gain.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 0.05)
      osc.connect(gain)
      gain.connect(this.audioCtx.destination)
      osc.start()
      osc.stop(this.audioCtx.currentTime + 0.05)
    } catch (e) {}
  }

  playClick() {
    if (!this.enabled || !this.audioCtx) return
    try {
      const osc = this.audioCtx.createOscillator()
      const gain = this.audioCtx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(600, this.audioCtx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(200, this.audioCtx.currentTime + 0.08)
      gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime)
      gain.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 0.08)
      osc.connect(gain)
      gain.connect(this.audioCtx.destination)
      osc.start()
      osc.stop(this.audioCtx.currentTime + 0.08)
    } catch (e) {}
  }

  playChime() {
    if (!this.audioCtx) return
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]
      notes.forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator()
        const gain = this.audioCtx.createGain()
        osc.type = 'sine'
        osc.frequency.value = freq
        gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime + i * 0.06)
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + i * 0.06 + 0.3)
        osc.connect(gain)
        gain.connect(this.audioCtx.destination)
        osc.start(this.audioCtx.currentTime + i * 0.06)
        osc.stop(this.audioCtx.currentTime + i * 0.06 + 0.3)
      })
    } catch (e) {}
  }
}

export const soundFx = new SoundEngine()
