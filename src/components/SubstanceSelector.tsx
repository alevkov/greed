import React, { useState, useEffect } from 'react';
import { SubstanceData } from '../types';

interface SubstanceSelectorProps {
  substances: SubstanceData[];
  onSelect: (substance: string, method: string, unit: string) => void;
}

const SubstanceSelector: React.FC<SubstanceSelectorProps> = ({ substances, onSelect }) => {
  const [selectedSubstance, setSelectedSubstance] = useState<string>('');
  const [availableMethods, setAvailableMethods] = useState<string[]>([]);
  const [availableUnits, setAvailableUnits] = useState<string[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<string>('');

  // Create a unique list of substances
  const uniqueSubstances = Array.from(new Set(substances.map(s => s.substance)));

  useEffect(() => {
    if (selectedSubstance) {
      const substanceData = substances.filter(s => s.substance === selectedSubstance);
      const methods = Array.from(new Set(substanceData.map(s => s.method)));
      setAvailableMethods(methods);
      setSelectedMethod(methods[0] || '');

      const units = Array.from(new Set(substanceData.map(s => s.unit)));
      setAvailableUnits(units);
      setSelectedUnit(units[0] || '');
    } else {
      setAvailableMethods([]);
      setAvailableUnits([]);
      setSelectedMethod('');
      setSelectedUnit('');
    }
  }, [selectedSubstance, substances]);

  const handleSubstanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubstance(e.target.value);
  };

  const handleMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMethod(e.target.value);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUnit(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedSubstance && selectedMethod && selectedUnit) {
      onSelect(selectedSubstance, selectedMethod, selectedUnit);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div id="options-container" className="selector-group">
        <select
          id="substance"
          name="substance"
          className="dropdown-model selector-item"
          value={selectedSubstance}
          onChange={handleSubstanceChange}
        >
          <option value="">Select a substance</option>
          {uniqueSubstances.map((substance, index) => (
            <option key={`${substance}-${index}`} value={substance}>
              {substance}
            </option>
          ))}
        </select>
        <select
          id="method"
          name="method"
          className="dropdown-model selector-item"
          value={selectedMethod}
          onChange={handleMethodChange}
          disabled={!selectedSubstance}
        >
          <option value="">Select a method</option>
          {availableMethods.map((method, index) => (
            <option key={`${method}-${index}`} value={method}>
              {method}
            </option>
          ))}
        </select>
        <select
          id="unit"
          name="unit"
          className="dropdown-model selector-item"
          value={selectedUnit}
          onChange={handleUnitChange}
          disabled={!selectedSubstance}
        >
          <option value="">Select a unit</option>
          {availableUnits.map((unit, index) => (
            <option key={`${unit}-${index}`} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="flat-button generate-button"
          disabled={!selectedSubstance || !selectedMethod || !selectedUnit}
        >
          Generate Chart
        </button>
      </div>
    </form>
  );
};

export default SubstanceSelector;