import './App.css'
import * as Tone from 'tone';
export default function App() {
  const synth=new Tone.Synth().toDestination();
  const playSound=()=>{
    synth.triggerAttackRelease("C4","8n");
  }
  return (
    <>
    <header>
      <ul>
        <li><label htmlFor="chord-1">1</label></li>
        <li><label htmlFor="chord-2">2</label></li>
        <li><label htmlFor="chord-3">3</label></li>
        <li><label htmlFor="chord-4">4</label></li>
        <li><label htmlFor="chord-5">5</label></li>
      </ul>
    </header>
    <main>
      <button onClick={playSound}>Play Sound </button>
    </main></>
  )
}
