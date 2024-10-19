import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import SubstanceSelector from './components/SubstanceSelector';
import DosageChart from './components/DosageChart';
import { substanceData } from './data';
import { SubstanceData } from './types';

declare global {
  interface Window {
    MathJax: any;
  }
}

function App() {
  const [selectedSubstance, setSelectedSubstance] =
    useState<SubstanceData | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)'],
          ],
          processEscapes: true,
        },
      });
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    }
  }, [selectedSubstance]);

  const handleSubstanceSelect = (
    substance: string,
    method: string,
    unit: string
  ) => {
    const selected = substanceData.find(
      (s) => s.substance === substance && s.method === method && s.unit === unit
    );
    if (selected) {
      setSelectedSubstance(selected);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-center">'gree[D]</h1>
        <h2 className="text-lg text-center">
          Towards agreed-upon Dosing Tiers for recreational drugs
        </h2>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <SubstanceSelector
            substances={substanceData}
            onSelect={handleSubstanceSelect}
          />
          {selectedSubstance && <DosageChart data={selectedSubstance} />}
        </div>
      </main>
      <footer className="mt-8">
        <div className="container mx-auto px-4">
          <div
            className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
            role="alert"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm">
                  This information is for educational purposes only. It is not
                  intended as a substitute for professional medical advice,
                  diagnosis, or treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
