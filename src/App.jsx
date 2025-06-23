import './App.css'
import { useState } from 'react';
import * as Tone from 'tone';
export default function App() {
  const synth=new Tone.Synth().toDestination();
  let [chord,setChord]=useState("1");
  let chords=['A4 C5 E5','F4 A4 C5','G4 B4 D5','D4 F4 A4','E4 G4 B4'].map((stri)=>stri.split(" "));
  const onOptionChange = e => {
    setChord(e.target.value);
    for(let i=0;i<1;i++){synth.triggerAttackRelease(chords[Number(chord)][i],"8n");
                        }  
  }
  const playSound=()=>{
  var pattern = new Tone.Pattern(function(time, note){
	synth.triggerAttackRelease(note, 0.25);
}, ["C4", "D4", "E4", "G4", "A4"]);  pattern.start(0);
Tone.Transport.start();//synth.triggerAttackRelease("C4","8n");
  }
  return (
    <>
    <header>
      <input type="checkbox" id="chord-1" name="chord" value="1" onChange={onOptionChange} checked={chord==="1"}/>
      <input type="checkbox" id="chord-2" name="chord" value="2" onChange={onOptionChange} checked={chord==="2"}/>
      <input type="checkbox" id="chord-3" name="chord" value="3" onChange={onOptionChange} checked={chord==="3"}/>
      <input type="checkbox" id="chord-4" name="chord" value="4" onChange={onOptionChange} checked={chord==="4"}/>
      <input type="checkbox" id="chord-5" name="chord" value="5" onChange={onOptionChange} checked={chord==="5"}/>
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
