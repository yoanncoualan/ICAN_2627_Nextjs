// On s'assure qu'on est côté client :
"use client";
import Link from "next/link";
// Import du hook :
import { useState } from "react";
 
export default function Compteur() {
  // Déclare une variable d'état appelée "count" avec une valeur initiale de 0
  const [count, setCount] = useState<number>(0);
 
  return (
    <>

        <Link href="/effect">useEffect</Link>

      <h1>Compteur</h1>
      <p>Valeur actuelle : {count}</p>
      <div>
        {/* Bouton pour incrémenter */}
        <button onClick={() => setCount(count + 1)}>+ Incrémenter</button>
 
        {/* Bouton pour décrémenter */}
        <button onClick={() => setCount(count - 1)}>- Décrémenter</button>
 
        {/* Bouton pour réinitialiser */}
        <button onClick={() => setCount(0)}>Réinitialiser</button>
      </div>
    </>
  );
}